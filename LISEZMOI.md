# LISEZMOI - Procédure de mise en ligne sur Infomaniak

## Prérequis
- Accès SFTP Infomaniak
- Nom de domaine : rba-advice.fr
- Hébergement : mutualisé Infomaniak (Apache, PHP)

## Étapes de mise en ligne

### 1. Transfert des fichiers via SFTP
1. Connectez-vous à votre espace Infomaniak via SFTP
2. Allez dans le dossier `www/` de votre hébergement
3. Transférez tous les fichiers suivants du dossier local vers le serveur :
   - `index.html`
   - `expertises.html`
   - `expertises-moa.html`
   - `experties-moa-technique.html`
   - `expertises-due-diligence.html`
   - `expertises-moex.html`
   - `rba-advice.html`
   - `realisations.html`
   - `contact.html`
   - `contact.php`
   - `mentions-legales.html`
   - `politique-confidentialite.html`
   - `404.html`
   - `sitemap.xml`
   - `robots.txt`
   - `.htaccess`
   - `rba-advice-logo.png`
   - Dossier `assets/` complet (avec tous les sous-dossiers)

### 2. Vérification du formulaire de contact
1. Ouvrez le site dans votre navigateur
2. Allez sur la page contact.html
3. Remplissez le formulaire avec vos coordonnées
4. Soumettez le formulaire
5. Vérifiez que vous recevez l'email sur benyacoubrafik@gmail.com (destinataire configuré dans contact.php)
6. Si vous ne recevez pas l'email :
   - Vérifiez les logs de votre hébergement Infomaniak
   - Vérifiez que l'expéditeur PHP (r.benyacoub@rba-advice.fr) est autorisé à envoyer depuis Infomaniak
   - Vérifiez l'enregistrement SPF du domaine rba-advice.fr auprès de votre registrar

### 3. Vérification SEO
1. Testez l'accès à https://www.rba-advice.fr/sitemap.xml
2. Testez l'accès à https://www.rba-advice.fr/robots.txt
3. Vérifiez que la redirection HTTP vers HTTPS fonctionne
4. Testez la page 404 : https://www.rba-advice.fr/page-inexistante.html

### 4. Vérification RGPD
1. Vérifiez que le lien vers la politique de confidentialité fonctionne depuis le formulaire de contact
2. Vérifiez que le lien vers la politique de confidentialité fonctionne depuis le pied de page
3. Testez que la case à cocher "J'accepte d'être recontacté" est bien cochée avant l'envoi

### 5. Tests finaux
- Testez tous les liens internes
- Testez l'affichage sur mobile, tablette et desktop
- Testez la navigation au clavier (Tab, Entrée)
- Vérifiez que le menu mobile fonctionne correctement
- Vérifiez que les images s'affichent correctement
- Vérifiez que le formulaire de contact envoie bien l'email

## Checklist avant publication

- [ ] Tous les fichiers transférés sur le serveur
- [ ] Formulaire de contact testé et fonctionnel
- [ ] Redirection HTTPS fonctionnelle
- [ ] Page 404 personnalisée fonctionnelle
- [ Politique de confidentialité accessible depuis le formulaire et le footer
- [ ] Mentions légales accessibles depuis le footer
- [ ] Sitemap.xml accessible
- [ ] Robots.txt accessible
- [ ] Favicon s'affiche dans l'onglet du navigateur
- [_testé] Navigation mobile fonctionnelle
- [testé] Menu burger s'ouvre et se ferme
- [testé] Lien actif du menu correspond à la page affichée
- [testé] Tous les liens internes fonctionnent
- [testé] Formulaire de contact envoie bien l'email
- [à compléter] SPF autorise l'envoi depuis Infomaniak en plus de Microsoft

## Important : Configuration SPF

⚠️ **CRITIQUE** : Le formulaire de contact utilise `r.benyacoub@rba-advice.fr` comme expéditeur PHP technique et envoie les emails à `benyacoubrafik@gmail.com`. Pour que les emails soient bien délivrés, vous devez vérifier votre enregistrement SPF auprès de votre registrar (OVH, Gandi, etc.) et vous assurer qu'il autorise :
- L'adresse IP du serveur Infomaniak
- Le serveur de messagerie Microsoft (outlook.office365.com)

Sans cela, les emails risquent d'être bloqués ou marqués comme spam.

## Support Infomaniak

En cas de problème :
- Centre d'aide : https://www.infomaniak.com/
- Support technique : disponible depuis votre manager Infomaniak
- Numéro : 0 820 200 200 (non surtaxé)
