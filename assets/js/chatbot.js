/* ── RBA ADVICE Chatbot Widget ─────────────────────────── */
(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    apiEndpoint: '/.netlify/functions/chat',
    welcomeMessage: "Bonjour, je suis l'assistant de RBA ADVICE, cabinet de conseil et de pilotage immobilier en Île-de-France. Comment puis-je vous aider ?",
    quickButtons: ['MOA / AMO', 'MOA technique', 'Due diligence', 'MOEX & pilotage', 'Prestation de service', "J'ai une question"]
  };

  let messages = [];
  let isOpen = false;
  let isLoading = false;
  let consentGiven = false;

  // ── Création du DOM ──────────────────────────────────────
  function createWidget() {
    // Bouton flottant
    const btn = document.createElement('button');
    btn.id = 'rba-chat-btn';
    btn.setAttribute('aria-label', 'Ouvrir le chat RBA ADVICE');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4v-4z"/>
      </svg>
      <span id="rba-chat-badge" aria-hidden="true"></span>`;

    // Fenêtre de chat
    const win = document.createElement('div');
    win.id = 'rba-chat-window';
    win.setAttribute('role', 'dialog');
    win.setAttribute('aria-label', 'Chat RBA ADVICE');
    win.setAttribute('aria-modal', 'true');
    win.innerHTML = `
      <div id="rba-chat-header">
        <div class="rba-chat-header-info">
          <div class="rba-chat-avatar" aria-hidden="true">R</div>
          <div>
            <div class="rba-chat-name">RBA ADVICE</div>
            <div class="rba-chat-status">Conseil &amp; Pilotage Immobilier</div>
          </div>
        </div>
        <button id="rba-chat-close" aria-label="Fermer le chat">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div id="rba-chat-messages" role="log" aria-live="polite" aria-label="Messages"></div>
      <div class="rba-rgpd-notice">
        Vos données sont traitées conformément à notre
        <a href="politique-confidentialite.html">politique de confidentialité</a>.
      </div>
      <div id="rba-chat-footer">
        <textarea
          id="rba-chat-input"
          rows="1"
          placeholder="Votre message…"
          aria-label="Saisir un message"
          maxlength="500"></textarea>
        <button id="rba-chat-send" aria-label="Envoyer">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
          </svg>
        </button>
      </div>`;

    document.body.appendChild(btn);
    document.body.appendChild(win);
  }

  // ── Afficher un message ──────────────────────────────────
  function appendMessage(role, text, quickBtns) {
    const container = document.getElementById('rba-chat-messages');
    const div = document.createElement('div');
    div.className = `rba-msg rba-msg-${role}`;
    div.textContent = text;
    container.appendChild(div);

    if (quickBtns && quickBtns.length > 0) {
      const btnGroup = document.createElement('div');
      btnGroup.className = 'rba-quick-btns';
      quickBtns.forEach(label => {
        const b = document.createElement('button');
        b.className = 'rba-quick-btn';
        b.textContent = label;
        b.onclick = () => sendMessage(label);
        btnGroup.appendChild(b);
      });
      container.appendChild(btnGroup);
    }

    scrollBottom();
  }

  // ── Indicateur de chargement ─────────────────────────────
  function showTyping() {
    const container = document.getElementById('rba-chat-messages');
    const div = document.createElement('div');
    div.className = 'rba-typing';
    div.id = 'rba-typing-indicator';
    div.innerHTML = '<span></span><span></span><span></span>';
    container.appendChild(div);
    scrollBottom();
  }
  function hideTyping() {
    const el = document.getElementById('rba-typing-indicator');
    if (el) el.remove();
  }

  // ── Scroll bas ───────────────────────────────────────────
  function scrollBottom() {
    const container = document.getElementById('rba-chat-messages');
    container.scrollTop = container.scrollHeight;
  }

  // ── Envoi d'un message ───────────────────────────────────
  async function sendMessage(text) {
    text = (text || '').trim();
    if (!text || isLoading) return;

    // Désactiver les boutons rapides existants
    document.querySelectorAll('.rba-quick-btn').forEach(b => b.disabled = true);

    messages.push({ role: 'user', content: text });
    appendMessage('user', text);

    const input = document.getElementById('rba-chat-input');
    if (input) { input.value = ''; input.style.height = 'auto'; }

    isLoading = true;
    showTyping();

    try {
      const res = await fetch(CONFIG.apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages })
      });

      hideTyping();

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
       appendMessage('bot', errData.error || "Je rencontre une difficulté technique. Veuillez réessayer ou contacter Rafik directement : r.benyacoub@rba-advice.fr");
        isLoading = false;
        return;
      }

      const data = await res.json();
      const botText = data.message || '';

      messages.push({ role: 'assistant', content: botText });

      // Afficher le consentement RGPD si coordonnées demandées
      const needsConsent = /e-mail|coordonnées|prénom|nom/i.test(botText) && !consentGiven;
      appendMessage('bot', botText);

      if (needsConsent) {
        showConsentBox();
      }

    } catch (err) {
      hideTyping();
      appendMessage('bot', "Je rencontre une difficulté technique. Vous pouvez contacter Rafik directement : r.benyacoub@rba-advice.fr ou 06 23 35 64 38.");
    }

    isLoading = false;
  }

  // ── Case de consentement RGPD ────────────────────────────
  function showConsentBox() {
    if (consentGiven) return;
    const container = document.getElementById('rba-chat-messages');
    const box = document.createElement('div');
    box.className = 'rba-consent-box';
    box.innerHTML = `
      <label>
        <input type="checkbox" id="rba-consent-cb">
        <span>J'accepte que RBA ADVICE conserve ces informations pour traiter ma demande, conformément à la
          <a href="politique-confidentialite.html" target="_blank" style="color:#8A6430;">politique de confidentialité</a>.
        </span>
      </label>`;
    container.appendChild(box);
    scrollBottom();

    document.getElementById('rba-consent-cb').addEventListener('change', function() {
      consentGiven = this.checked;
      if (this.checked) box.style.borderColor = 'rgba(16,185,129,0.5)';
    });
  }

  // ── Ouvrir / fermer ──────────────────────────────────────
  function openChat() {
    const win = document.getElementById('rba-chat-window');
    const btn = document.getElementById('rba-chat-btn');
    isOpen = true;
    win.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    document.getElementById('rba-chat-badge').style.display = 'none';

    // Message de bienvenue à la première ouverture
    if (messages.length === 0) {
      setTimeout(() => {
        appendMessage('bot', CONFIG.welcomeMessage, CONFIG.quickButtons);
      }, 300);
    }

    setTimeout(() => {
      const input = document.getElementById('rba-chat-input');
      if (input) input.focus();
    }, 350);
  }

  function closeChat() {
    const win = document.getElementById('rba-chat-window');
    const btn = document.getElementById('rba-chat-btn');
    isOpen = false;
    win.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.focus();
  }

  // ── Événements ───────────────────────────────────────────
  function bindEvents() {
    document.getElementById('rba-chat-btn').addEventListener('click', () => {
      isOpen ? closeChat() : openChat();
    });

    document.getElementById('rba-chat-close').addEventListener('click', closeChat);

    document.getElementById('rba-chat-send').addEventListener('click', () => {
      const input = document.getElementById('rba-chat-input');
      sendMessage(input.value);
    });

    document.getElementById('rba-chat-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const input = document.getElementById('rba-chat-input');
        sendMessage(input.value);
      }
    });

    // Auto-resize textarea
    document.getElementById('rba-chat-input').addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = Math.min(this.scrollHeight, 80) + 'px';
    });

    // Fermer avec Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) closeChat();
    });
  }

  // ── Init ─────────────────────────────────────────────────
  function init() {
    createWidget();
    bindEvents();
  }

  // Chargement différé
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // Délai pour ne pas bloquer le rendu initial
    setTimeout(init, 100);
  }

})();
