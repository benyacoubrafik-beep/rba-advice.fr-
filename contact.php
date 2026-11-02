<?php
declare(strict_types=1);

/**
 * Réception du formulaire de contact du site : envoie un email à RBA ADVICE.
 * Aucune donnée n'est enregistrée sur le serveur.
 */

const DESTINATAIRE = 'benyacoubrafik@gmail.com';
const EXPEDITEUR   = 'r.benyacoub@rba-advice.fr'; // doit appartenir au domaine du site

date_default_timezone_set('Europe/Paris');
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

// Vérification de l'origine de la requête
$allowed_origins = ['https://www.rba-advice.fr', 'http://www.rba-advice.fr'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !in_array($origin, $allowed_origins)) {
    reponse(403, false);
}

// Rate limiting par IP (simple in-memory)
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rate_limit_file = sys_get_temp_dir() . '/rba_advice_rate_limit_' . md5($ip);
$rate_limit_data = file_exists($rate_limit_file) ? json_decode(file_get_contents($rate_limit_file), true) : ['count' => 0, 'time' => time()];
$time_window = 3600; // 1 heure
$max_requests = 5;

if ($rate_limit_data['time'] < time() - $time_window) {
    $rate_limit_data = ['count' => 0, 'time' => time()];
}

if ($rate_limit_data['count'] >= $max_requests) {
    reponse(429, false);
}

$rate_limit_data['count']++;
file_put_contents($rate_limit_file, json_encode($rate_limit_data));

function reponse(int $code, bool $ok): never
{
    http_response_code($code);
    echo json_encode(['ok' => $ok]);
    exit;
}

/** Texte sur une seule ligne, sans caractères de contrôle (protège contre l'injection d'en-têtes). */
function ligne(mixed $valeur, int $max): string
{
    $valeur = is_string($valeur) ? $valeur : '';
    $valeur = preg_replace('/[\r\n\t]+/', ' ', $valeur) ?? '';
    $valeur = preg_replace('/\p{C}+/u', '', $valeur) ?? '';
    return couper(trim($valeur), $max);
}

/** Texte multi-lignes, sans caractères de contrôle autres que le retour à la ligne. */
function texte(mixed $valeur, int $max): string
{
    $valeur = is_string($valeur) ? str_replace("\r\n", "\n", $valeur) : '';
    $valeur = preg_replace('/[^\P{C}\n]+/u', '', $valeur) ?? '';
    return couper(trim($valeur), $max);
}

function couper(string $valeur, int $max): string
{
    return function_exists('mb_substr') ? mb_substr($valeur, 0, $max) : substr($valeur, 0, $max);
}

function libelle(array $choix, mixed $valeur): string
{
    return is_string($valeur) && isset($choix[$valeur]) ? $choix[$valeur] : 'Non précisé';
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    reponse(405, false);
}

// Champ piège : un robot le remplit, un visiteur ne le voit pas. On répond « ok » sans rien envoyer.
if (!empty($_POST['website'])) {
    reponse(200, true);
}

$nom         = ligne($_POST['name'] ?? '', 100);
$email       = ligne($_POST['email'] ?? '', 150);
$telephone   = ligne($_POST['phone'] ?? '', 30);
$entreprise  = ligne($_POST['company'] ?? '', 120);
$description = texte($_POST['description'] ?? '', 4000);

if ($nom === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($_POST['contact-consent'])) {
    reponse(422, false);
}

$profils = [
    'investisseur' => 'Investisseur', 'proprietaire' => 'Propriétaire', 'promoteur' => 'Promoteur',
    'entreprise' => 'Entreprise', 'particulier' => 'Particulier', 'autre' => 'Autre',
];
$actifs = [
    'entreprise' => "Immobilier d'entreprise", 'residentiel' => 'Immobilier résidentiel',
    'logistique' => 'Logistique et activité', 'particulier' => 'Particulier',
];
$operations = [
    'construction-neuve' => 'Construction neuve', 'rehabilitation' => 'Réhabilitation',
];
$besoins = [
    'due-diligence' => 'Due diligence', 'moa-amo' => 'MOA / AMO', 'moa-technique' => 'MOA technique',
    'moex' => 'MOEX', 'pilotage' => 'Pilotage', 'autre' => 'Autre',
];

$corps = implode("\n", [
    'Nouvelle demande reçue depuis le site rba-advice.fr le ' . date('d/m/Y à H:i'),
    '',
    'Nom : ' . $nom,
    'Email : ' . $email,
    'Téléphone : ' . ($telephone !== '' ? $telephone : 'Non renseigné'),
    'Entreprise : ' . ($entreprise !== '' ? $entreprise : 'Non renseignée'),
    '',
    'Profil : ' . libelle($profils, $_POST['profile'] ?? null),
    'Le projet concerne : ' . libelle($actifs, $_POST['asset-type'] ?? null),
    'Type d\'opération : ' . libelle($operations, $_POST['operation-type'] ?? null),
    'Besoin : ' . libelle($besoins, $_POST['need'] ?? null),
    '',
    'Description du projet :',
    $description !== '' ? $description : '(non renseignée)',
    '',
    "Le visiteur a accepté d'être recontacté.",
]);

$sujet = '=?UTF-8?B?' . base64_encode('[Site RBA ADVICE] Nouvelle demande de ' . $nom) . '?=';

$entetes = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'From: RBA ADVICE <' . EXPEDITEUR . '>',
    'Reply-To: ' . $email,
]);

$envoye = @mail(DESTINATAIRE, $sujet, $corps, $entetes, '-f' . EXPEDITEUR);

reponse($envoye ? 200 : 500, $envoye);
