# CHANGELOG - Modifications réalisées

---

## VERSION 9 — Défauts techniques, accroche client, téléphone (2026-10-21)

### Défauts techniques (toutes les 9 pages)

| Ref | Description |
|-----|-------------|
| A1  | Menu mobile déplacé hors `<nav>`, `aria-expanded="false"` sur le bouton burger, fonctions `openMenu()`/`closeMenu()`, overlay `#menu-overlay` (bg-black/40 z-40), fermeture par Escape et clic overlay |
| A2  | SVG LinkedIn corrompu remplacé par le chemin Simple Icons correct (top bar : w-4 h-4 mr-2 ; footer : w-5 h-5 mr-3) |
| A5  | Description footer : "acteurs de l'immobilier dans la maîtrise technique…" → "investisseurs, propriétaires, promoteurs et entreprises dans la maîtrise de leurs projets immobiliers…" |
| A6  | Stat "+250 M€" reformatée (était "250 M€+") ; compteur animé IntersectionObserver 2 s, respecte prefers-reduced-motion |
| A7  | `.section-label` : font-size 0.65rem → 0.75rem, color → #8A6430 ; `--bronze-dark: #8A6430` ajouté à `:root` ; copyright `text-slate-400/500` → `text-slate-300` |
| A9  | Canonical et og:url : `https://www.rba-advice.fr/` → `https://rba-advice.fr/` |

### Accroche client (pages spécifiques)

| Ref | Description                                                                                      | Pages          |
|-----|--------------------------------------------------------------------------------------------------|----------------|
| B1  | Section "Le Fondateur" insérée entre "Notre positionnement" et "Chiffres clés"                  | rba-advice.html |
| B2  | H1 → "Sécurisez vos décisions immobilières, de l'acquisition à la livraison."                   | rba-advice.html |
| B3  | Labels stats mis à jour ("par notre fondateur")                                                  | index + rba-advice |
| B4  | Bouton secondaire "Voir nos réalisations" dans le hero (boutons en flex-row)                    | rba-advice.html |
| B5  | Téléphone 06 23 35 64 38 ajouté : top bar (toutes pages), footer Contact (toutes pages), avant formulaire (contact.html), section CTA (rba-advice.html) | Toutes (9) |
| B7  | Section "multisectoriel" : suppression cartes "Construction neuve" et "Réhabilitation" (4 restantes), grille → `grid-cols-2 md:grid-cols-4` | rba-advice.html |

---

Date : 19/10/2026

---

## VERSION 8 - Refonte graphique premium des onglets "Nos expertises" et "Réalisations"

### Harmonisation des couleurs (Point 2)
- ✅ Couleur de référence identifiée : blue-600 (#2563EB) utilisée sur l'onglet "RBA ADVICE"
- ✅ Onglets "Nos expertises" et "Réalisations" déjà harmonisés avec blue-600
- ✅ Aucune modification nécessaire sur les couleurs de navigation

### Page expertises.html (Point 3)
- ✅ Introduction éditoriale premium avec surtitre, titre principal et texte descriptif
- ✅ Refonte des cartes d'expertises :
  - Layout horizontal (icône + numéro + titre) au lieu de centré vertical
  - Espacements généreux (p-12, gap-12)
  - Bordures fines (border-slate-200) avec hover sur bordure (border-blue-600)
  - Coins carrés (rounded-sm) au lieu de rounded-xl
  - Icônes plus grandes (w-16 h-16) avec fond qui change au hover (blue-100 → blue-600)
  - Lien "En savoir plus" avec flèche et effet translate-x au hover
  - Séparateur border-t entre description et détails
  - Titres en slate-900 pour cohérence avec rba-advice.html
- ✅ Suppression des exposants (1, 2, 3) au profit de numéros inline dans le layout

### Page realisations.html (Point 4)
- ✅ Refonte majeure : passage de grille 3 colonnes à présentation éditoriale alternée
- ✅ Composition alternée détails/image et image/détails pour les 9 projets
- ✅ Cartouches de données clés pour chaque projet :
  - Chiffres imposants en text-3xl avec bordure gauche colorée
  - Bleu pour immobilier d'entreprise
  - Vert pour immobilier résidentiel
  - Orange pour commerces et logistique
- ✅ Éléments graphiques subtils sur les images (carrés border/positionnés)
- ✅ Images avec shadow-lg et rounded-sm
- ✅ Typographie premium : text-3xl pour titres, text-lg pour descriptions
- ✅ Espacements généreux (gap-16, mb-24, py-32)
- ✅ Filtres harmonisés (rounded-sm, slate-100 au lieu de gray-100)
- ✅ CTA refondu avec fond bleu nuit (#0f172a) et éléments géométriques décoratifs
- ✅ Suppression de la grille et des cartes originales
- ✅ Fonctionnalités filtres et modale conservées (JavaScript inchangé)

### Direction artistique globale (Point 6)
- ✅ Palette chromatique harmonisée : bleu profond (#0f172a), bleu intermédiaire (#2563EB), slate (#0f172a, #475569, #64748b)
- ✅ Typographie : hiérarchie affirmée avec text-3xl/text-4xl pour titres principaux
- ✅ Espacements : respiration améliorée (py-32, gap-16, mb-24)
- ✅ Boutons : coins carrés (rounded-sm) sur sections premium
- ✅ Ombres : shadow-lg sur images et CTA
- ✅ Coins : sobres et premium

---

## VERSION 7 - Amélioration visuelle et professionnalisation du site

### Page index.html
- ✅ Point 1 : Chiffres clés refondus avec traitement premium (chiffres plus imposants, séparations fines, fond bleu nuit profond, alignement irréprochable)
- ✅ Point 2 : Section "Voici comment nous avancerons" enrichie avec pictogrammes SVG professionnels pour chaque étape (document, graphique, horloge, validation)
- ✅ Point 3 : Section "Parlons de votre projet" repensée avec fond bleu nuit, éléments géométriques décoratifs subtils, lignes architecturales, élégance premium
- ✅ Point 6 : Transitions entre sections simplifiées (ligne fine au lieu de dégradés)

### Page expertises.html
- ✅ Point 4 : Introduction éditoriale avec surtitre et hiérarchie typographique premium
- ✅ Point 4 : Cartes d'expertises refaites (bordures fines, coins carrés, hover sur bordure, espacements maîtrisés, taille d'icônes réduite)
- ✅ Point 4 : Titres en slate-900 au lieu de blue-600 pour cohérence avec rba-advice.html
- ✅ Point 4 : Textes descriptifs réduits en taille pour meilleure lisibilité
- ✅ Point 6 : Harmonisation avec la page "Qui est RBA ADVICE ?"

### Page realisations.html
- ✅ Point 5 : Descriptions des projets reformulées pour être plus professionnelles et synthétiques (suppression de "en tant que salarié chez", uniformisation des missions)
- ✅ Point 5 : Projet WORKSTATION : image corrigée avec même aspect-ratio et object-cover que les autres projets
- ✅ Point 5 : Attributs data modals mis à jour avec descriptions simplifiées
- ✅ Corrections de formulation : "MOEX, sous-traitance AURIS" au lieu de "MOEX en sous-traitance d'AURIS", "salarié AURIS" au lieu de "en tant que salarié chez AURIS"

### Améliorations globales (Point 6)
- ✅ Palette chromatique harmonisée : bleu nuit (#0f172a), bleu intermédiaire (#2563EB), slate pour textes (#0f172a, #475569, #64748b)
- ✅ Typographie : hiérarchie affirmée, utilisation mesurée du gras, tailles de texte cohérentes
- ✅ Espacements : respiration améliorée, sections plus aérées
- ✅ Boutons : coins arrondis remplacés par coins carrés sur sections premium
- ✅ Cohérence générale : même langage visuel entre pages

---

## VERSION 6 - Refonte visuelle section "Qui est RBA ADVICE ?" de l'accueil

### Page index.html
- ✅ Section "Qui est RBA ADVICE ?" refondue en composition asymétrique premium
- ✅ Colonne gauche : surtitre "Qui sommes-nous ?", titre fort "L'expertise technique au service de vos décisions immobilières", texte synthétique, phrase de différenciation en bloc mis en valeur, lien "Découvrir RBA ADVICE"
- ✅ Colonne droite : photographie architecturale, éléments graphiques subtils inspirés des tracés techniques, chiffre clé "+250 M€ de travaux gérés" intégré en superposition
- ✅ Direction artistique premium : fond blanc, typographie hiérarchisée, espacements maîtrisés, sans dégradés
- ✅ Responsive design adapté desktop/tablette/mobile

---

## VERSION 5 - Corrections page MOEX et pilotage

### Page expertises-moex.html
- ✅ Rubrique "Missions" : OPR remplacé par "Opérations préalables à la réception"
- ✅ Rubrique "Questions fréquentes" : réponse à "Quelle est la différence entre MOEX et OPC ?" remplacée par le texte exact demandé
- ✅ Rubrique "Nos livrables" : supprimé "Synthèse de l'exécution et bilan de l'opération", ajouté "Visas des documents d'exécution"

### Vérifications
- ✅ Recherche d'autres occurrences des anciens textes : aucune trouvée dans le projet
- ✅ Aucune modification nécessaire sur les autres pages, sitemap.xml ou données structurées

---

## VERSION 4 - Dernière amélioration

### Page d'accueil
- ✅ Supprimé section des logos (AURIS, CFC DEVELOPPEMENT, GEFEC) au-dessus de "Votre situation"
- ✅ Supprimé en entier le bloc "Le mot de Rafik Benyacoub" (texte, signature, photo placeholder)

### Page Réalisations
- ✅ Ajouté PROXIMA VI avec photo copiée (proxima-vi.jpg)
- ✅ Ajouté LE BARJAC avec photo copiée (le-barjac.jpg)
- ✅ Ajouté REIWA avec photo copiée (reiwa.jpg à partir de REIWA.jfif)
- ✅ Projets ajoutés après les existants dans l'ordre : PROXIMA VI, LE BARJAC, REIWA
- ⚠️ PROXIMA VI photo non convertie en WebP (commande magick non disponible sur le système) - fichier jpg copié tel quel

### Documentation
- ✅ Mis à jour CHANGELOG.md

---

## VERSION 3 - Ultime série de modifications

### Général
- ✅ Remplacé "15 projets" par "20 projets" sur index.html (compteur animé)
- ✅ Remplacé "15 projets" par "20 projets" sur rba-advice.html

### Page d'accueil
- ✅ Déplacé section "Ils nous ont fait confiance" au-dessus de "Votre situation"
- ✅ Supprimé la ligne "Opérations suivies pour COGEDIM, Nexity, Bouygues Immobilier, Unibail-Rodamco, Hines"
- ✅ Remplacé rubrique "Votre projet concerne" (4 pastilles) par bloc "Quel est votre projet immobilier ?" avec 4 cartes photos
- ✅ Ajouté section "Qui est RBA ADVICE ?" avec le texte exact demandé (6 paragraphes)
- ✅ Supprimé les 3 briques d'engagement (Indépendance, Transparence, Interlocuteur unique)
- ✅ Supprimé l'intertitre "Voici qui je suis" et le paragraphe d'extrait de présentation

### Page Réalisations
- ✅ PARC ARIANE mis en premier dans l'ordre d'affichage
- ✅ PARC ARIANE : remplacé "Propriétaire" par "Maître d'ouvrage"
- ✅ BOBIGNY CŒUR DE VILLE : "Construction de 350 logements" → "Construction de 350 logements à Bobigny"
- ✅ PARC D'EXPOSITION PORTE DE VERSAILLES : "Modernisation et rénovation lourde du Parc d'exposition" → "Modernisation et rénovation lourde du Parc d'exposition de la Ville de Paris"
- ✅ PARC D'EXPOSITION PORTE DE VERSAILLES : mission → "MOEX et coordination des travaux en tant que salarié chez AURIS"
- ✅ WORKSTATION : remplacé "MOD" par "Maîtrise d'Ouvrage Déléguée : HINES FRANCE"
- ✅ WORKSTATION : image affichée en entier avec object-contain
- ✅ INNOVEA : titre → "INNOVEA" (supprimé "Châtenay-Malabry" du titre)
- ✅ INNOVEA : description → "Construction de 63 logements à énergie positive, Châtenay-Malabry"
- ✅ INNOVEA : certification → "NF Habitat HQE" (remplacé le placeholder)

### Page Expertises
- ✅ Ajouté carte "Logistique et activité" avec les 4 lignes exactes demandées

### Documentation
- ✅ Mis à jour A_COMPLETER.md (ligne certification INNOVEA retirée)

---

## VERSION 2 - Corrections demandées

### Suppression du numéro de téléphone
- ✅ Supprimé 06 23 35 64 38 et tel:+33623356438 de toutes les pages HTML
- ✅ Supprimé des top bars, footers, sections contact, et messages d'erreur
- ✅ Supprimé du JSON-LD ProfessionalService (index.html)
- ✅ Supprimé de politique-confidentialite.html et mentions-legales.html
- ✅ Mis à jour AUDIT.md pour ne plus mentionner le téléphone

### Remplacement email de contact
- ✅ Remplacé r.benyacoub@rba-advice.fr par contact@rba-advice.fr sur tout le site visible
- ✅ Top bar de toutes les pages (index, contact, rba-advice, realisations, expertises, expertises-*.html)
- ✅ Footer de toutes les pages
- ✅ Page contact.html (message d'erreur et suppression des 3 briques Email/Téléphone/Localisation)
- ✅ Politique de confidentialité (2 occurrences)
- ✅ Mentions légales (2 occurrences)
- ✅ JSON-LD ProfessionalService (index.html)
- ✅ contact.php : laissé DESTINATAIRE = benyacoubrafik@gmail.com (conformément aux instructions) et EXPEDITEUR = r.benyacoub@rba-advice.fr (expéditeur technique)
- ✅ Mis à jour LISEZMOI.md et A_COMPLETER.md pour refléter les nouveaux emails

### Documentation
- ✅ Mis à jour LISEZMOI.md pour préciser le destinataire benyacoubrafik@gmail.com
- ✅ Mis à jour A_COMPLETER.md pour documenter la configuration SPF requise

### Formulaire de contact
- ✅ Remplacé "Family office" par "Particulier" dans le profil
- ✅ Modifié "Votre projet concerne" : ne garde que Immobilier d'entreprise, Immobilier résidentiel, Logistique et activité, Particulier
- ✅ Ajouté nouvelle rubrique "Type d'opération" avec Construction neuve et Réhabilitation
- ✅ Mis à jour contact.php pour gérer le nouveau champ operation-type
- ✅ Ajouté placeholder de délai de réponse dans le message de succès

### Page d'accueil
- ✅ Ajouté "Particulier" dans la liste des publics accompagnés
- ✅ Modifié chiffres clés : 13 ans → 15, 50+ projets → 15, ajouté +250 M€ de travaux pilotés
- ✅ Ajouté deux nouvelles cartes "Votre situation" (lancez une nouvelle opération, valorisez votre actif)
- ✅ Ajouté section "Le mot de Rafik Benyacoub" avec le texte exact demandé

### Page "Qui est RBA ADVICE ?"
- ✅ Remplacé le texte de positionnement par le texte exact demandé (6 paragraphes)
- ✅ Modifié chiffres : 13 ans → 15, 50+ projets → 15, MOEX MOA → +250 M€ de travaux pilotés
- ✅ Remplacé "Due diligence technique" par "Logistique et activité"
- ✅ Remplacé "Pilotages d'opérations" par "Particuliers"

### Page "MOEX et Pilotage"
- ✅ Ajouté "Particuliers" et "Cabinets de MOEX et d'architectes" dans "Pour qui ?"
- ✅ Ajouté livrables : Compte rendu de réunion de chantier MOEX ou OPC, Tableau de suivi des agréments, Tableau de suivi financier
- ✅ Remplacé "Planning détaillé mis à jour régulièrement" par "Planning détaillé et pointé mis à jour régulièrement"

### Page hub Expertises
- ✅ Ajouté notes de bas de page pour expliquer les sigles (AMO, MOA, MOEX)

### Page d'accueil - Storytelling en 3 actes
- ✅ Restructuré en storytelling "Vous → Moi → Ensemble"
- ✅ Acte 1 (VOUS, fond clair) : Hero avec 2 boutons, 6 cartes "Votre situation" avec hover, pastilles "Votre projet concerne"
- ✅ Barre de confiance sous le hero avec logos et mentions
- ✅ Bandeau engagement (indépendance, transparence, interlocuteur unique)
- ✅ Acte 2 (MOI, fond bleu marine) : Section "Le mot de Rafik Benyacoub", 3 chiffres animés avec IntersectionObserver et prefers-reduced-motion, extrait de la page "Qui est RBA ADVICE"
- ✅ Acte 3 (ENSEMBLE, fond bleu clair dégradé) : Méthode en 4 étapes en frise horizontale, aperçu 3 réalisations, "Ils nous ont fait confiance" avec mentions COGEDIM/Nexity/etc., CTA final "Parlons de votre projet"
- ✅ Ajouté transitions douces entre les actes (dégradés)
- ✅ Ajouté JavaScript pour compteurs animés avec respect de prefers-reduced-motion
- ✅ Ajouté bouton "back to top" avec apparition au scroll

### Page Réalisations
- ✅ Ajouté filtre "Commerces et logistique"
- ✅ Supprimé REIWA de la page
- ✅ Ajouté PARC ARIANE (détails complets, photo copiée)
- ✅ Ajouté WORKSTATION (détails complets, photo copiée)
- ✅ Ajouté PARC D'EXPOSITION PORTE DE VERSAILLES (détails complets, photo copiée)
- ✅ Ajouté INNOVEA Châtenay-Malabry (détails complets, photo copiée, placeholder certification)
- ✅ Modifié NEW G (ajouté certifications et architectes)
- ✅ Modifié BOBIGNY (supprimé coût, ajouté certifications et architectes)
- ✅ JavaScript de filtrage fonctionnel
- ✅ Photos copiées dans assets/img/realisations/
- ✅ Modale accessible pour détails du projet (clic, clavier Escape, clic extérieur)
- ✅ Breadcrumbs sur les 4 pages d'expertise (MOA, MOA Technique, Due Diligence, MOEX)

### Améliorations générales
- ✅ Bouton "back to top" avec apparition au scroll sur l'accueil
- ✅ JavaScript accessible et respecting prefers-reduced-motion

---

## VERSION 1 - Étapes précédentes

## Étape 1 : Audit initial
- ✅ Création de AUDIT.md avec état des lieux et problèmes détectés

## Étape 2 : Page d'accueil
- ✅ Création d'une vraie page d'accueil (remplacement de la copie de expertises.html)
- ✅ Hero avec promesse claire : "Sécurisez vos décisions immobilières, maîtrisez vos opérations"
- ✅ Section chiffres clés : +13 ans d'expérience, 50+ projets réalisés
- ✅ 3 problématiques clients (acquisition, chantier qui dérape, restructuration)
- ✅ Section "Notre méthode" en 4 étapes (Cadrage, Analyse, Pilotage, Suivi)
- ✅ Aperçu des 3 réalisations avec photos réelles
- ✅ Section "Ils nous ont fait confiance" (AURIS, CFC DEVELOPPEMENT, GEFEC)
- ✅ CTA final : "Vous avez un projet immobilier ?"
- ✅ Top bar remplacée par : téléphone, email, LinkedIn
- ✅ Menu mobile fonctionnel (burger menu)
- ✅ Logo image intégré (rba-advice-logo.png)
- ✅ Footer : suppression formulaire newsletter, ajout bloc Contact
- ✅ Données structurées JSON-LD ProfessionalService
- ✅ Meta title et description unique
- ✅ Balises Open Graph et Twitter Card
- ✅ Canonical tag
- ✅ Images avec loading="lazy", width, height et alt

## Étape 3 : Conformité légale
- ✅ Création de politique-confidentialite.html
- ✅ Création de 404.html
- ✅ Création de sitemap.xml
- ✅ Création de robots.txt
- ✅ Création de .htaccess (redirection HTTPS, 404, compression, cache, en-têtes sécurité)

## Étape 4 : Sécurisation contact.php
- ✅ Ajout vérification origine de la requête
- ✅ Ajout rate limiting par IP (5 requêtes par heure)

## Étape 5 : Navigation et footer unifiés
- ✅ Toutes les pages mises à jour avec top bar contact (téléphone, email, LinkedIn)
- ✅ Logo image sur toutes les pages
- ✅ Menu mobile fonctionnel sur toutes les pages
- ✅ Navigation avec liens actifs corrects sur toutes les pages
- ✅ Footer unifié avec bloc Contact et suppression newsletter
- ✅ Lien politique de confidentialité dans footer

## Étape 6 : Enrichissement pages d'expertise
- ✅ expertises-moa.html : fil d'Ariane, 8 missions, 4 livrables, cas d'usage illustratif, FAQ 5 questions
- ✅ expertises-moa-technique.html : fil d'Ariane, 6 missions, 4 livrables, cas d'usage illustratif, FAQ 4 questions
- ✅ expertises-due-diligence.html : fil d'Ariane, 6 points analysés, 4 livrables, cas d'usage illustratif, FAQ 4 questions
- ✅ expertises-moex.html : fil d'Ariane, 8 missions, 4 livrables, cas d'usage illustratif, FAQ 4 questions
- ✅ SEO amélioré sur toutes les pages d'expertise (title, description, canonical, Open Graph)

## Étape 7 : Autres pages
- ✅ expertises.html : navigation et footer unifiés, SEO amélioré
- ✅ realisations.html : navigation et footer unifiés, SEO amélioré
- ✅ rba-advice.html : navigation et footer unifiés, SEO amélioré
- ✅ contact.html : navigation et footer unifiés, SEO amélioré

---

## RESTE À FAIRE (voir A_COMPLETER.md)

### Étape 2 - Améliorations "visiteur qui découvre le site" (terminé)
- ✅ Barre de confiance sous le hero avec logos et mentions
- ✅ Bandeau engagement (indépendance, transparence, interlocuteur unique)
- ✅ Page Réalisations : filtres par catégorie (4 filtres), cartes uniformes, modale accessible pour détails
- ✅ Page Réalisations : ajout des 4 nouveaux projets demandés avec photos et détails
- ✅ Page Réalisations : modifications de NEW G et BOBIGNY selon corrections
- ✅ Breadcrumbs sur les 4 pages d'expertise
- ✅ Back to top button discret
- ✅ Compteurs animés avec prefers-reduced-motion
- ⏳ SEO et partage : og-image.png à fournir, sitemap.xml à mettre à jour pour nouvelles pages
- ⏳ Performance : remplacer Tailwind CDN par CSS compilé, héberger Inter en local, convertir images en WebP

### Étape 4 - Effet "dossiers en verre" (non implémenté)
- ⏳ À implémenter : dossier coloré avec panneau en verre dépoli, tilt au survol, ouverture au clic/clavier/toucher, fichiers en éventail

- Créer favicon.png et og-image.png
- Compiler Tailwind CSS (remplacer CDN)
- Héberger police Inter en local
- Télécharger images Unsplash en local en WebP
- Enrichir page "Qui est RBA ADVICE" (parcours détaillé, photo emplacement)
- Créer 3 fiches pratiques/articles
- Tester formulaire de contact en local avec php -S
- Tests Lighthouse et corrections
- Ajouter données structurées JSON-LD sur toutes les pages (partiellement fait sur index.html)
- Meta SEO uniques sur mentions-legales.html, politique-confidentialite.html, 404.html
