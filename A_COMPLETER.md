# A COMPLETER - Informations à fournir par le client

---

## Tâches manuelles VERSION 9 (2026-10-21)

| Tâche | Détail | Priorité |
|-------|--------|----------|
| Logo conversion | Convertir `Nouveau%20logo%20RBD%20ADVICE.jfif` en `logo-rba-advice.webp` (fond transparent si possible) et mettre à jour les `<img src>` sur toutes les pages | Haute |
| Photo fondateur | Placer la photo de Rafik Benyacoub dans `assets/img/fondateur/rafik-benyacoub.webp` (le fallback PNG `Rafik%20BENYACOUB.png` doit rester à la racine si déjà présent) | Haute |
| Favicon | Créer `assets/img/favicon.png` (32×32 ou 48×48) depuis le logo | Moyenne |
| Tailwind CSS | Remplacer le CDN `<script src="https://cdn.tailwindcss.com">` par un fichier CSS compilé `assets/css/style.css` pour la production | Haute |
| Test formulaire | Vérifier que l'ID Formspree `xgaogzzz` est bien activé dans votre compte Formspree (contact.html) | Haute |
| og:image | Créer `assets/img/og-image.png` (1200×630 px) pour les partages réseaux sociaux | Moyenne |

---

| Fichier | Emplacement | Information attendue | Priorité |
|---------|------------|---------------------|----------|
| contact.php | Ligne 9-10 | DESTINATAIRE : benyacoubrafik@gmail.com (configuré). EXPEDITEUR technique : r.benyacoub@rba-advice.fr (doit appartenir au domaine). Vérifier SPF pour autoriser l'envoi depuis Infomaniak en plus de Microsoft. | Haute |
| contact.html | Message de succès | Délai de réponse : [À COMPLÉTER : délai de réponse, ex. « sous 24 h ouvrées »] | Haute |
| index.html | Section "Le mot de Rafik" | Photo du fondateur [PHOTO À FOURNIR] | Moyenne |
| realisations.html | Photo PROXIMA VI | Image à convertir en WebP optimisé (moins de 250 Ko) - actuellement fichier jpg de 19,7 Mo copié tel quel | Moyenne |

| rba-advice.html | Section "Notre parcours" | Parcours détaillé du fondateur [À COMPLÉTER : description parcours] | Moyenne |
| rba-advice.html | Section "Zone d'intervention" | Adresse précise du siège social [À COMPLÉTER] | Moyenne |
| rba-advice.html | Emplacement photo | Photo du fondateur ou de l'équipe [PHOTO] | Moyenne |
| mentions-legales.html | Section "Éditeur du site" | Adresse éditeur [À COMPLÉTER] | Moyenne |
| mentions-legales.html | Section "Hébergement" | Prestataire hébergement [À COMPLÉTER] | Moyenne |
| mentions-legales.html | Section "Forme juridique" | Forme juridique [À COMPLÉTER] | Moyenne |
| mentions-legales.html | Section "Capital social" | Capital social [À COMPLÉTER] | Moyenne |
| mentions-legales.html | Section "Numéro TVA intracommunautaire" | Numéro TVA [À COMPLÉTER] | Moyenne |
| mentions-legales.html | Section "Numéro TVA transfrontalier" | Numéro TVA transfrontalier [À COMPLÉTER] | Moyenne |
| mentions-legales.html | Section "Conditions générales de vente" | Conditions générales [À COMPLÉTER] | Moyenne |
| mentions-legales.html | Section "Clause de rétractation" | Clause de rétractation [À COMPLÉTER] | Moyenne |
| mentions-legales.html | Section "Litiges" | Juridiction compétente [À COMPLÉTER] | Moyenne |
| mentions-legales.html | Section "Loi applicable" | Loi applicable [À COMPLÉTER] | Moyenne |
| expertises.html | - | Meta description unique (déjà faite) | Basse |
| expertises-moa.html | - | Meta title et description uniques | Basse |
| expertises-moa-technique.html | - | Meta title et description uniques | Basse |
| expertises-due-diligence.html | - | Meta title et description uniques | Basse |
| expertises-moex.html | - | Meta title et description uniques | Basse |
| realisations.html | - | Meta title et description uniques | Basse |
| rba-advice.html | - | Meta title et description uniques | Basse |
| contact.html | - | Meta title et description uniques | Basse |
| mentions-legales.html | - | Meta title et description uniques | Basse |
| politique-confidentialite.html | - | Meta title et description uniques | Basse |
| 404.html | - | Meta title et description uniques | Basse |
| expertises-moa.html | Contenu | FAQ 4-5 questions (différence MOA/AMO/MOEX, quand faire appel, etc.) | Moyenne |
| expertises-moa.html | Contenu | Cas d'usage illustratif anonymisé | Moyenne |
| expertises-moa.html | Contenu | Livrables détaillés (rapport, planning, budget, tableau de bord) | Moyenne |
| expertises-moa-technique.html | Contenu | FAQ 4-5 questions | Moyenne |
| expertises-moa-technique.html | Contenu | Cas d'usage illustratif anonymisé | Moyenne |
| expertises-moa-technique.html | Contenu | Livrables détaillés | Moyenne |
| expertises-due-diligence.html | Contenu | FAQ 4-5 questions | Moyenne |
| expertises-due-diligence.html | Contenu | Cas d'usage illustratif anonymisé | Moyenne |
| expertises-due-diligence.html | Contenu | Livrables détaillés | Moyenne |
| expertises-moex.html | Contenu | FAQ 4-5 questions | Moyenne |
| expertises-moex.html | Contenu | Cas d'usage illustratif anonymisé | Moyenne |
| expertises-moex.html | Contenu | Livrables détaillés | Moyenne |
| rba-advice.html | Contenu | Valeurs détaillées (rigueur, transparence, réactivité) | Moyenne |
| Fiches pratiques | - | Créer 3 fiches : "Checklist due diligence technique avant acquisition", "MOA, AMO, MOEX : qui fait quoi ?", "Les erreurs qui font déraper un budget travaux" | Basse |
| assets/img/ | - | Créer favicon.png et og-image.png (si absents) | Basse |
| assets/fonts/ | - | Télécharger et héberger police Inter en local (woff2) | Basse |
| assets/img/ | - | Télécharger images Unsplash hero et footer en WebP local | Basse |
| assets/css/ | - | Compiler Tailwind CSS et créer style.css minifié | Haute |
| assets/js/ | - | Créer script.js pour menu mobile (si nécessaire) | Basse |
| Toutes pages | Navigation | Mettre à jour navigation et footer avec menu mobile, logo, top bar contact, liens actifs | Haute |
| Pages expertise | - | Ajouter fil d'Ariane | Moyenne |
| Toutes pages | - | Tester navigation clavier | Basse |
| Toutes pages | - | Tester affichage mobile, tablette, desktop | Basse |
| Toutes pages | - | Tester accessibilité WCAG AA | Basse |
| Toutes pages | - | Lighthouse > 90 en performance, accessibilité, bonnes pratiques, SEO | Haute |
