/**Les Tableaux
 *
 * À quoi sert un tableau ?
 *
 * Il sert à stocker plusieurs valeurs (ou données) dans une variable, au lieu d'une seule valeur
 */

// Créer un tableau

// 1. let tableau = new Array(element0, element1, element2);
// 2. let tableau = Array(element0, element1, element2);
// 3. let tableau = [element0, element1, element2];

// Un tableau est composé d'index (c'est la place de l'élément dans le tableau), l'index commence TOUJOURS par 0
let fruits = ["pommes", "bananes", "cerises"];

console.log(fruits); // !!!!! Attention affiché un tableau entier ne fonctionnera pas sur PHP

let first = fruits[0]; // On copie le premier élément du tableau fruits et on le stock dans la variable first

console.log(first); // Affichera "pommes"

// Boucler sur un tableau
// let i = 0 (il représentera l'emplacement initial dans le tableau vu que le tableau commence toujours par 0)

let couleurs = ["red", "green", "orange"];

for (let i = 0; i < fruits.length; i++) {
  // document.writeln("<p style=color:" + couleurs[i]+ ";>" + "Fruit numéro " + (i+1) +" est " + fruits[i] + "</p>");
  document.writeln(
    `<p style="color:${couleurs[i]}"> Fruit numéro ${i + 1} est ${
      fruits[i]
    } </p>`
  );
}

// Méthode push: Ajoute un nouvel éléments au tableau MAIS retourne la nouvelle longueur du tableau

// Ajouter le dernier élément
fruits.push("Oranges"); // Ajoute Oranges au tableau fruits
console.log(fruits);

// Supprimer le dernier élément
let oranges = fruits.pop(); //Supprime "Oranges" du tableau
console.log(oranges); //= "Oranges";
console.log(fruits);

// fruits = ["pommes", "bananes", "cerises"];

// Supprimer le premier élément d'un tableau

let pommes = fruits.shift(); // Supprime "Pommes" du tableau
console.log(pommes); // = "Pommes"

// fruits = ["bananes", "cerises"];

// Ajouter au début tableau

let nouvelleLongueur = fruits.unshift("Papaye");
console.log(fruits); // fruits = ["Papaye", "bananes", "cerises"];
console.log(nouvelleLongueur); // 3

//Trouver l'index d'un élément dans le tableau
let pos = fruits.indexOf("bananes");
console.log(pos); //1

// Supprimer un élément par son index
let removeItem = fruits.splice(pos, 1); // removeItem sera égal à 'bananes';

// Slice:

// Méthode qui renvoie un tableau, contenant une copie superficielle ("shallow copy"= qui partage certain propriété avec l'objet d'origine, Attention !!) d'une portion du tableau d'origine, elle est définie par un index de début et un index de fin (exclu)

let animaux = [
  "chat",
  "chien",
  "lama",
  "ornithorynque",
  "chinchilla",
  "ratel",
  "péroquet",
];

let newAnimal = animaux.slice(1, 5); //retourne de chien à chinchilla
let list = animaux.slice(1); //retourne à partir de chien jusqu'à la fin
let chien = animaux.slice(1, 2);

// newAnimal = ['Chien','Lama','ornithorynque','chinchilla'];
// list = ['Chien','Lama','ornithorynque','chinchilla','ratel','perroquet'];

newAnimal.unshift("Chat");
console.log(newAnimal);
