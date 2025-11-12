<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vivaldi</title>
</head>

<body>
    <h1>Les entités</h1>
    <p>Rappel: Les entités représentent les tables de notre base de données dans notre application sous forme de classes
        d'objet en PHP. Elles permettent de manipuler les données de la base de données comme des objets.</p>
    <p>Pour créer une entités dans Symfony, on utise la CLI avec la commande suivante:</p>
    <p>symfony console make:entity</p>
    <p>En executant cette commande, nous serons invités à fournir les détails de l'entités, comme son nom et ses
        propriétés (qui seront converti en colonnes dans MySQL)</p>
    <p>une fois l'entités créee, Symfony générera deux fichiers principaux:</p>
    <ul>
        <li>Fichiers d'entité: Ce fichier PHP contient la définition de la classe d'entité, les propriétés, les methodes
            gettes/setters et les annotations ou attributs Doctrine qui décrivent comment les propriétés sont mappées
            sur les colonnes de la table.</li>
        <li>Fichier repository: Ce fichier php contient des méthodes personnalisées pour intéragir avec les données de
            l'entité. Il permt d'ajouter des requêtes spécifiques à la base de données.</li>
    </ul>
    <p>Ne pas oublier de faire une migration !</p>
</body>

</html>