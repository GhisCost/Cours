// /* Les conditions */

// // -- Structure de base : if

// if (true) {
//   // Par defaut la condition à vérifier (le if vérifie si elle est vraie)
//   /* Code à éxecture*/
// }

// EXEMPLE :

// let nb1 = 10;

// if (nb1 < 50) {
//   console.log("nb1 est inférieur à 50");
// }

// if (true) {
//   /* code si la condition est vrai*/
// } else {
//   /*code si la condition est fausse*/
// }

// if (nb1 > 50) {
//   console.log("nb1 est supérieur à 50");
// } else {
//   console.log("nb1 n'est pas supérieur à 50");
// }

// //  ELSE IF

// // Else if est reservé au cas ou une autre conditions serait acceptable pour notre code

// let nb2 = 50;
// let nb3 = 60;

// if (nb2 > 60) {
//   console.log(`${nb2} est suppérieur à ${nb3} `);
// } else if (nb2 == nb3) {
//   console.log(`${nb2} est égale à ${nb3}`);
// } else {
//   console.log("tu m'embetes avec tes condition");
// }

// // SWITCH

// // Le switch vérifie UNE variable selon des cas

// let str = "Ghislain";

// switch (str) {
//   case "Nadia":
//     str = "je m'appelle Nadia";
//     break;
//   case "Sabrina":
//     str = "je m'appelle Sabrina";
//     break;
//   case "Ghislain":
//     str = "Je m'appelle Ghislain";
//     break;
//   default:
//     str = "je n'ai pas de prénom";
//     break;
// }

// console.log(str);

// // En utilisant les prompts

// let prompteur = prompt("quelle est la couleur de vos yeux ?");

// switch (prompteur) {
//   case "bleus":
//     case "bleu":
//     document.writeln(
//       "<h1> Les yeux bleus rappellent la couleur de l'ocean </h1>"
//     );
//     break;
//   case "verts":
//     case "vert":
//     document.writeln("<h1>Les yeux verts rappellent les emeuraudes </h1>");
//     break;
//   case "marrons":
//     case "marron":
//     document.writeln("<h1>Les yeux marron rappellent les troncs d'arbres</h1>");
//     break;
//   case "vairons":
//     document.writeln(
//       "<h1>Les yeux vairon rappellent la diversité du monde</h1>"
//     );
//     break;
//   default:
//     document.writeln("<h1> On a dit une couleur connard !</h1>");
//     break;
// }

// OPERATEURS LOGIQUES 

//  -- L'opérateur ET : &&
/* => prenom === prenomLogin
=> age === ageLogin
*/

let email = prompt("Quel est votre adresse mail ?");
let emailBDD = "groupe@gmail.com";

let mdp = prompt("Quel est votre mot de passe ?");
let mdpBDD = "X3F6OOKM";

// Pour afficher mon console.log, il faut ABSOLUMENT que mes deux conditions SOIENT VRAIES 

// Base des TRUE ET FALSE
// FALSE && FALSE : FALSE;
// FALSE && TRUE : FALSE;
// TRUE && TRUE : TRUE;

if((email == emailBDD) && (mdp == mdpBDD)){
  console.log('Vous êtes connecté')
} else {
  console.log("Votre email ou votre mdp est incorrect.")
}

//  -- L'opérateur ou (||)
//  À la différence de && (ET), OU (||) ne demande que à ce que l'une des deux conditions soit vraie

// FALSE || FALSE : FALSE;
// FALSE || TRUE : TRUE;
// TRUE || FALSE : TRUE;
// TRUE || TRUE : TRUE;

let prenom = "Nadia";
let prenom2 = "N'Golo";

let age = 22;
let age2 = 22;

if (prenom == prenom2 || age== age2) {
  console.log ("Tu est dans la vérité");
} else {
  console.log("TU es dans le mensonge ! ");
}

// ^ XOR (Opérateur OU Exclusif)
/* 
TRUE ^ TRUE : FALSE;
TRUE ^ FALSE : TRUE;
FALSE ^ TRUE : TRUE;
FALSE ^ FALSE : FASLE;
*/

/* Exemple : Une soirée en boite de nuit, l'entrée SOIT aux blondes, SOIT aux chatains*/

let cheveux = "Brune", cheveux2 = "chatain";

if (cheveux == "blonde" ^ cheveux == "rousse") {
  console.log("Vous pouvez entrer");
} else {
  console.log("Vous devez payer pour entrer 50 €")
}

// L'opérateur PAS (!) signifie que c'est le contraire de.

let utilisateurConnecte = true;

if(!utilisateurConnecte) {
  console.log("oui, il est connecté");
} else {
  console.log("non, il n'est pas connecté");
}

// ça revient à écrire 

if(utilisateurConnecte == false) {
  console.log("oui, il est connecté");
} else {
  console.log("non, il n'est pas connecté");
}


let nombres = 23;

if (!nombres == 23) {
  console.log("23");
} else {
  console.log("FALSE");
}