<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bach</title>
</head>

<body>
    <h1>Authentification avec Symfony</h1>
    <p>Symfony est un framework très puissant qui offre une multitude de fonctionnalités, notamment en matière de
        sécurité et d'authentification. Nous allons voir ici comment mettre en place un système d'inscription et de
        connexion en utilisant Symfony</p>

    <h2>Bundles nécéssaires</h2>

    <p>Pour mettre en place l'inscription, nous allons utiliser plusieurs bundles indispensables:</p>

    <ul>
        <li>symfony/security-bundle</li>
        <li>symfonycasts/verify-email-bundle</li>
        <li>doctrine/doctrine-bundle</li>
    </ul>

    <h2>Création de l'entité User</h2>
    <p>/!\ Attention: l'entité doit forcement implementer UserInterface afin que Symfony la reconnaisse comme une entité utilisateur</p>

    <h2>Création du formulaire d'inscription</h2>
    <p>La commande suivante permet de générer un formulaire d'inscription pour l'entité User:</p>
    <p>symfony console make:form</p>

    <h2>Connexion utilisateur</h2>
    <p>Pour générer un système de connexion, Symfony propose une commande pratique:</p>
    <p>symfony console make:security:form-login</p>
    <p>Cette commande génère un controller d'authentification ainsi que sa vue associée</p>

</body>

</html>