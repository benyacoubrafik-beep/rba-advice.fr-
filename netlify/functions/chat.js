// Netlify Function — Proxy sécurisé pour le chatbot RBA ADVICE
// Variables d'environnement requises :
//   GEMINI_API_KEY — Google AI Studio (gratuit)
//   FORMSPREE_ID   — xgaogzzz

const GEMINI_API = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent';
const FORMSPREE  = 'https://formspree.io/f/';

const SYSTEM_PROMPT = `Assistant de RBA ADVICE, cabinet de conseil immobilier en Île-de-France. Fondé par Rafik Benyacoub (15 ans exp., +250M€ travaux). Contact : r.benyacoub@rba-advice.fr | 06 23 35 64 38.

RÈGLES : français, vouvoiement, 2-3 phrases max, jamais de prix.

EXPERTISES :
1. MOA/AMO : pilotage opération de A à Z
2. MOA Technique : analyse technique, aide à la décision
3. Due Diligence : risques techniques avant acquisition
4. MOEX/OPC : exécution chantier, délais, coûts, qualité
+ Prestation de service sur cahier des charges.

QUALIFICATION (une question à la fois) : (1) besoin, (2) type d'actif, (3) localisation, (4) phase, (5) échéance, (6) rôle, (7) coordonnées (prénom, nom, société, e-mail, tél. facultatif).

Fin de collecte : "Merci [Prénom]. Rafik vous recontacte sous 24h ouvrées."

Quand coordonnées complètes, ajoute après ta réponse : |||LEAD|||{"lead":true,"prenom":"...","nom":"...","societe":"...","email":"...","telephone":"...","expertise":"...","actif":"...","localisation":"...","phase":"...","echeance":"...","role":"...","priorite":"CHAUD|TIEDE|FROID","resume":"..."}

PRIORITÉ : CHAUD=travaux+<3mois, TIÈDE=conception, FROID=>6mois`;

exports.handler = async (event) => {
  // CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { messages } = body;
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Messages required' }) };
  }

  // Limite : max 50 messages par conversation
  if (messages.length > 50) {
    return { statusCode: 429, headers, body: JSON.stringify({ error: 'Conversation trop longue' }) };
  }

  const GEMINI_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_KEY) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Configuration manquante' }) };
  }

  try {
    // Appel Gemini
    const geminiBody = {
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: messages.slice(-4).map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      })),
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 400,
        topP: 0.8
      },
      safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_LOW_AND_ABOVE' }
      ]
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9500);

    let geminiRes;
    try {
      geminiRes = await fetch(`${GEMINI_API}?key=${GEMINI_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(geminiBody),
        signal: controller.signal
      });
    } catch (fetchErr) {
      clearTimeout(timeout);
      return { statusCode: 503, headers, body: JSON.stringify({ error: 'Service temporairement indisponible. Veuillez réessayer dans quelques secondes.' }) };
    }
    clearTimeout(timeout);

    if (!geminiRes.ok) {
      const err = await geminiRes.text();
      console.error('Gemini error:', err);
      return { statusCode: 502, headers, body: JSON.stringify({ error: 'LLM indisponible', detail: err }) };
    }

    const geminiData = await geminiRes.json();
    const rawText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // Détecter si un lead est présent
    let responseText = rawText;
    let leadData = null;

    if (rawText.includes('|||LEAD|||')) {
      const parts = rawText.split('|||LEAD|||');
      responseText = parts[0].trim();
      try {
        leadData = JSON.parse(parts[1].trim());
      } catch (e) {
        console.error('Lead JSON parse error:', e);
      }
    }

    // Envoi email via Formspree si lead complet
    if (leadData && leadData.lead && leadData.email) {
      await sendFormspree(leadData, messages);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: responseText, lead_captured: !!leadData })
    };

  } catch (err) {
    console.error('Handler error:', err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Erreur interne' }) };
  }
};

async function sendFormspree(lead, messages) {
  const formspreeId = process.env.FORMSPREE_ID || 'xgaogzzz';
  const transcript = messages.map(m => `[${m.role}] ${m.content}`).join('\n');

  const subject = `[Lead site] ${lead.expertise || 'Demande'} – ${lead.societe || lead.nom || 'Inconnu'} – ${lead.localisation || 'N/A'}`;

  const emailBody = `
NOUVEAU LEAD CHATBOT RBA ADVICE
================================
Date : ${new Date().toLocaleString('fr-FR')}
Canal : Chatbot texte

CONTACT
Prénom / Nom : ${lead.prenom || ''} ${lead.nom || ''}
Société : ${lead.societe || 'N/A'}
Fonction : ${lead.fonction || 'N/A'}
E-mail : ${lead.email}
Téléphone : ${lead.telephone || 'Non renseigné'}

PROJET
Expertise : ${lead.expertise || 'N/A'}
Type d'actif : ${lead.actif || 'N/A'}
Localisation : ${lead.localisation || 'N/A'}
Surface / Nature : ${lead.surface || 'N/A'}
Phase : ${lead.phase || 'N/A'}
Échéance : ${lead.echeance || 'N/A'}
Rôle : ${lead.role || 'N/A'}

QUALIFICATION
Niveau de priorité : ${lead.priorite || 'N/A'}
Résumé : ${lead.resume || 'N/A'}

TRANSCRIPTION
${transcript}
  `.trim();

  await fetch(`${FORMSPREE}${formspreeId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      _subject: subject,
      _language: 'fr',
      message: emailBody,
      email: lead.email,
      name: `${lead.prenom || ''} ${lead.nom || ''}`.trim()
    })
  });
}
