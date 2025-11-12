<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Schubert</title>
</head>

<body>
    <h1>Qu'est-ce que l'ORM ? (Object-Relational Mapping)</h1>

    <p>L'ORM est une technique qui permet de représenter des données stockées dans une base de données relationnelle
        sous forme d'bjet en programation</p>

    <p>Grâce à l'ORM, les développeurs peuvent interagir avec la base de données en utilisant des objets putôt que des
        requêtes SQL explicites ("INSERT INTO products (etc)"). Symfony utilise Doctrine comme outil ORM par defaut, ce
        qui permet de générer des requêtes SQL automatiquement et de s'adapter à différents SGBD (système de gestin de
        base de données) utilisés.</p>
    <h2>Création d'une entité</h2>
    <p>Une enité représente une table de la base de données sous forme de classe PHP? Après avoir crée une entité,
        Doctrine nous permet de manipuler ces objets pour effectuer des opérations CRUD (Create, Read, Update, Delete)
    </p>

    <h2>Création d'une nouvelle ressource:</h2>
    <p>Pour créer une nouvelle ressource, il nous suffit d'instancier l'entité dans notre controller, d'utiliser la
        méthode persit() de l'EntityManager pour l'enregistrer, puis de valider la transaction avec la méthode flush().
    </p>


</body>

</html>