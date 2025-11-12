<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nozart</title>
</head>

<body>
    <h1>Installation d'un projet Symfony</h1>
    <p>Pour installé un projet symfony on va avoir besoin de 2 éléments principaux</p>

    <ul>
        <li>
            <a href="https://getcomposer.org/download/">Composer</a>
        </li>
        <li>
            <a href="https://scoop.sh">Scoop</a>
        </li>
    </ul>
    <h2>Qu'est-ce que Composer ?</h2>
    <p>Composer est un outil de gestion de dépendance pour PHP. Il permet de déclarer les bibliothèques ou
        fonctionnalités dont nous aurons besoin pour notre projet et de les gégrer (installer, mettre à jour,
        supprimer) de manière organisée</p>

    <h2>Lignes de commande pour symfony:</h2>
    <ul>
        <li>composer creat-project symfony/skeleton "nom du projet" (installe les bases de notre projet symfony)</li>
        <li>composer install (installe les dépendances sauvegargées dans composer.json)</li>
        <li>composer update (met à jour les dépendances vers leurs dernières versions compatibles)</li>
        <li>composer require vendor/package (ajoute une nouvelle dépendance au projet, l'installe et la sauvegarde dans
            compsoer.json) </li>
        <li>composer remove vendor/package (supprime la dépendance du projet)</li>
        <li>composer dump-autoload (régénère le fichier autoload de compsoer en cas d'erreur) </li>
    </ul>
    <p>NB: Une dépendance est une bibliothèque ou un package de code importés dans un projet</p>
    <p>Package: Collection de fichier et de resources, comme du code source, des bibliothèques, des modules ou encores
        des fichiers de configuratiion, il permet entre autre de réutiliser son code entre les différents projets.</p>

    <hr>
    <h2>Qu'est-ce que Scoop ?</h2>
    <p>Scoop est un gestionnaire de packets pour windows. Il sert à instlaller des logiciels et outils en lignes de
        commandes pour windows, que nous evite des passer par des navigateurs ou des installateurs graphiques pour
        installer ces logiciels </p>
    <p>Nous allons utiliser scoop pour récupérer la CLI (Command-Line Interface) de Symfony, ce qui va grandement nous
        aider pour la suite.</p>
    <h3>Mise en place de la CLI Symfony</h3>

    <ul>
        <li>Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser</li>
        <li>Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression</li>
        <li>scoop install symfony-cli (pour installer la CLI de symfony)</li>
        <li>symfony server:start (pour lancer le serveur Symfony, il ne nécéssitera pas laragon) </li>
    </ul>

    <h3>Avantages de composer</h3>
    <ul>
        <li>Gestion de dépendances: Lrs de l'installation de symfony, composer configure automatiquements toutes les
            dépendances requises et télécharge les bonnes versions des bibliothèques et composants nécéssaires pour le
            projet.</li>
        <li>Mise à jour du projet: Avec "composer update", on s'assure que nos dépendances sont toujours à jour</li>
    </ul>

    <h3>Avantage de scoop</h3>

    <ul>
        <li>Gestion du projet: Grace à la CLI de Symfony, après avoir installé symfony avec composer, nous aurons accès
            à toutes les commandes utiles pour la getsion du projet. Comme démarrer un server, créer des controllers,
            créer des entités, templates etc...</li>
    </ul>

</body>

</html>