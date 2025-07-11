// Syntaxe de base

// Commentaire sur une ligne

/* Commentaire
sur
plusieurs
lignes
*/

// -- 1 : Déclarer une variable en Javascript
// Déclarer une variable = le mot clé let suivi du nom de la variable
// On peut aussi faire directement let prenom = "Rayane";
let prenom;
var prenom2;

// -- 2 : Affecter une valeur à une variable
prenom = "Rayane";
console.log(prenom);
prenom = "Ilyes";
console.log(prenom);
prenom = "Nadia";
console.log(prenom);

// -- 3 : Une instruction se termine TOUJOURS par un point-virgule, il est aussi possible d'écrire plusieurs instructions sur une seule ligne

// inst_1;
// inst_2;
// inst_2; inst_3;

// -- 4 : Afficher une boite de dialogue (2 façons)

// alert("Super, tu es arrivé sur mon site !");
// window.alert("Super, tu es arrivé sur mon site !");

// -- 5 : Afficher dans la console

console.log("Coucou, je suis apprenant au poleS");

// -- 6 : Afficher dans la page web directement (writeln), Attention, ne prennons pas l'habitude de l'utiliser

document.writeln("<h1> Hello World ! </h1>");

// -- 7 : Demander à l'utilisateur une valeur (2 façons de faire)

// prompt("Question : Quel jour de la semaine sommes-nous ?");

// window.prompt("Quel jour de la semaine sommes-nous ?");

// -- Et pour manipuler cette valeur, je dois la stocker;

// let jour = prompt("Question : Qui a les plus beaux cheveux de la terre ?");

// console.log(jour);
// document.writeln(jour);

// -- 8 : Attention !! Le JS est sensible à la casse ('case sensitive'): mavariable =/= maVariable =/= ma_variable;

// mavariable;
// maVariable = camel case; let maMaisonParisienne; let chiffreAdditionne;
// ma_variable = snake case; let ma_maison_parisienne; let chiffre_additionne;

let chiffre_additionne;
document.writeln(chiffre_additionne);

// -- 9 : Règles des noms de variable  = Une variable ne peut pas commencer par un chiffre, elle doit contenir que des caractères alphanumériques et ne peut pas être un mot reservé (var, let , for, if des éléments natifs du langage JS)

/** LES TYPES DE VARIABLES */

// -- 1. Chaînes de caractères (string)
let vacances = "2017";
let destination = "Australie";

// -- 2. Nombre entier (Integer ou Int)
let annee = 2017;
let age = 19;

// -- 3. Les nombres decimaux (Float) ATTENTION !!! en anglais les virgules sont des points

let decimal = 2.5;

// -- 4. Des booléens (Boolean = VRAI / FAUX = TRUE / FALSE);

let unBooleenFalse = false;
let unBooleenTrue = true;

// -- 5. Undefined (Non défini)
let quelquechose; // il sera undefined tant que je ne lui aurai pas donné de valeur

// -- 6. null (nulle);
let nulle = null;

// -- 7. Les Constantes

/* La déclaration const permet de créer une constante accessible uniquement en lecture. Contrairement à une variable (let,var), sa valeur ne peut plus être modifiée par réafectation plus bas dans le code, une constante ne peut pas être déclarée à nouveau dans le même script !*/

//  -- Par convention les constantes sont en majuscules:

const PAYS = "France"; // Type chaine de caractère (string)
const AN = "2025"; // type chaine de caractère (string)
const BIRTH = 2025; // Type Nombre entier (Int)

// -- 8. Typeof permet d'identifier le type de ma variable

console.log(PAYS);
console.log(typeof PAYS);

console.log(BIRTH);
console.log(typeof BIRTH);

const PASTRUE = false;
console.log(typeof PASTRUE);
