/*La Concatenation*/

let annee = 2025;
let futur = 3;

let resultat = annee + futur;

console.log(resultat);
// Concatenation: La concatenation est le fait de lier dun type string avec d'autre type ou lui même


let phrase1 = "Aujourd'hui je suis ";
let phrase2 = "heureux, c'est louis qui l'as dit !";

console.log(phrase1 + phrase2)
// 3 façon de concatener

// Avec doubles guillemets
document.writeln(
  "<h1> L'année " + annee + " + " + futur + " = " + resultat + "</h1>"
);

// Avec simple guillemets (attention au mots à appostrophes)
document.writeln("<h2> Nous sommes actuellement en " + annee + "</h2>");

// En backtick
document.writeln(`<h3> Nous sommens en ${annee} </h3>`)