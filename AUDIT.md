# AUDIT DU SITE RBA ADVICE - État initial

Date : 09/10/2026

## Fichiers présents

### Pages HTML
- `index.html` - Page d'accueil (actuellement une copie de la page expertises)
- `expertises.html` - Hub des expertises
- `expertises-moa.html` - MOA / AMO
- `expertises-moa-technique.html` - MOA Technique
- `expertises-due-diligence.html` - Due Diligence
- `expertises-moex.html` - MOEX & Pilotage
- `rba-advice.html` - Qui est RBA ADVICE
- `realisations.html` - Réalisations
- `contact.html` - Formulaire de contact
- `mentions-legales.html` - Mentions légales

### Autres fichiers
- `contact.php` - Script PHP de traitement du formulaire (sécurisé, correct)
- `rba-advice-logo.png` - Logo principal
- `Site type.png` - Référence visuelle fournie

### Dossiers
- `assets/img/clients/` - Logos clients
- `assets/img/realisations/` - Photos des 3 réalisations
- `Clients/` - Sources clients (ne pas modifier)
- `Réalisations/` - Sources réalisations (ne pas modifier)

---

## PROBLÈMES DÉTECTÉS

### 1. Structure et navigation
- **index.html n'est pas une vraie page d'accueil** : affiche "NOS EXPERTISES" comme titre, copie du contenu de expertises.html
- **Menu mobile absent** : le menu est masqué sur mobile (`hidden md:flex`), pas de burger menu
- **Lien actif du menu** : ne correspond pas toujours à la page affichée (ex: index.html affiche "NOS EXPERTISES" actif)
- **Top bar inutile** : "MON ESPACE CLIENT" (#) et icône de recherche inactive
- **Fil d'Ariane absent** : pas de breadcrumb sur les sous-pages d'expertise
- **Logo** : texte "RBA ADVICE" au lieu du logo image

### 2. Performance et dépendances
- **Tailwind via CDN** : à remplacer par CSS compilé et minifié
- **Google Fonts** : police Inter chargée depuis Google, à héberger en local
- **Images externes** : images Unsplash du hero et footer, à télécharger en local en WebP
- **Pas de lazy loading** sur les images
- **Pas de width/height** sur les images
- **Pas d'alt** pertinents sur certaines images

### 3. SEO
- **Title non unique** : plusieurs pages ont le même title
- **Meta description non unique** : plusieurs pages ont la même description
- **Pas de balises canonical**
- **Pas de balises Open Graph**
- **Pas de favicon**
- **Pas de sitemap.xml**
- **Pas de robots.txt**
- **Pas de données structurées JSON-LD**

### 4. Conformité légale
- **Pas de politique de confidentialité** : fichier à créer
- **Pas de page 404.html**
- **Formulaire newsletter** : dans le footer, non relié à rien, à retirer
- **Pas de bandeau cookies** : à évaluer (si pas de traceur non essentiel, mentionner dans politique de confidentialité)
- **Consentement formulaire** : présent mais pas lié à la politique de confidentialité

### 5. Contenu
- **Page d'accueil** : manque les sections demandées (hero avec promesse, chiffres clés, 3 problématiques, méthode, aperçu réalisations, "Ils nous ont fait confiance")
- **Pages d'expertise** : manque FAQ, cas d'usage illustratif, livrables détaillés
- **Page "Qui est RBA ADVICE"** : manque la section parcours et valeurs, zone d'intervention précise, emplacement photo
- **Contenu complémentaire** : pas de fiches pratiques/articles

### 6. Configuration serveur
- **Pas de .htaccess** : pour redirection HTTPS, page 404, compression, cache, en-têtes de sécurité

### 7. Accessibilité
- **Contraste à vérifier** : certains textes sur fond bleu foncé
- **Navigation clavier** : à tester
- **Alt manquants** sur certaines images

---

## POINTS DÉJÀ CORRECTS (ne pas refaire)

- ✅ Email autorisé : contact@rba-advice.fr
- ✅ LinkedIn renseigné : https://www.linkedin.com/in/rafik-benyacoub-60421ab4
- ✅ Un seul lien LinkedIn dans le pied de page
- ✅ Copyright 2026
- ✅ Lien "Mentions légales" présent
- ✅ Page Réalisations avec les 3 projets réels et leurs photos (NEW G, BOBIGNY CŒUR DE VILLE, REIWA)
- ✅ Section "Ils nous ont fait confiance" (AURIS, CFC DEVELOPPEMENT, GEFEC)
- ✅ Bandeau bleu des pages intérieures corrigé (classe `.hero-gradient`)
- ✅ Formulaire de contact relié à contact.php
- ✅ contact.php sécurisé (validation, nettoyage, champ piège)

---

## INFORMATIONS DISPONIBLES

- Email : contact@rba-advice.fr
- LinkedIn : https://www.linkedin.com/in/rafik-benyacoub-60421ab4
- Raison sociale : RBA ADVICE
- SIRET : 914 659 669 00016
- Forme juridique, capital, adresse siège : [À COMPLÉTER]
- TVA : [À COMPLÉTER]
- Zone d'intervention : Île-de-France
- Logo : rba-advice-logo.png (à utiliser aussi en SVG si disponible dans assets/img/logo/)
- Favicon et og-image : à vérifier dans assets/img/

---

## STRUCTURE ASSETS

```
assets/
├── img/
│   ├── clients/        (logos clients)
│   ├── realisations/   (photos des 3 projets)
│   └── logo/           (à vérifier si rba-advice-logo.svg existe)
```

---

## PRIORITÉS

1. **Haute** : Vraie page d'accueil, navigation mobile, logo, SEO de base
2. **Moyenne** : Contenu pages d'expertise, politique confidentialité, 404, performance
3. **Basse** : Fiches pratiques/articles, htaccess avancé, Lighthouse optimization
