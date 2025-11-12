<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beethoven</title>
</head>

<body>
    <h1>Création BDD avec ORM</h1>
    <p>Avec Symfony et grâce aux CLI (command-line-interface), nous pouvons créer et gérer notre base de données
        directement sans avoir à passer par l'interface phpmyadmin </p>
    <p>Pour cela, nous allons installer le pack ORM (object-relational-mapping) qui va faciliter la gestion de la base
        de données en permettant de créer et manipuler des entités</p>

    <p>Nous allons installer ce pack avec Composer en utilisant la commande suivante: "composer require
        symfony/orm-pack"</p>
    <p>Ce pack inclut les outils nécéssaires pour configurer Doctrine ORM, qui est la bibliothèque utilisée pour
        l'intéraction avec la BDD dans Symfony</p>
    <p>Nous allons pouvoir créer la BDD, créer les tables à l'intérieur, effectuer des migrations pour la mise à jour
        des tables et gérer les données en utilisant les objets PHP plutôt que des requêtes SQL brutes</p>

    <h2>.ENV</h2>
    <p>.env est un fichier apparu lors de l'installationde notre projet et mis à jour lors de l'installation du parck
        ORM, il contient les informations de connexion à la BDD (par defaut sur PostgreSQL), mais nous allons travailler
        avec MySQL. il faut donc commenter la ligne PostgreSQL et décommenter la ligne du dessus.</p>
    <p>Il suffit ensuitre de remplir les informations de notre BDD dans la ligne même si la base de données n'existe pas encore !</p>

    <h2>Créer la base de données</h2>
    <p>Maintenant que .env est configuré, nous allons utiliser la CLI de Symfony pour lui dire de créer notre BDD. Pour cela nous utiliserons la commande suivante: "symfony console doctrine:database:create" (marche aussi avec symfony console d:d:c) </p>
    <p>La BDD est maitennant créee, mais il faut maintenant la remplir de tables et définir les propriétés des tables.</p>
    <p>Pour cela, nous utiliserons les entités qui représenteront les tables de notre BDD dans notre appli sous forme de classes d'objets.</p>
    <p>Liens utiles</p>
    <ul>
        <li>
            <a href="https://fr.wikipedia.org/wiki/Doctrine_(ORM)">Doctrine ORM</a>
        </li>
    </ul>
</body>

</html>