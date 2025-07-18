/**
 *
 * Les objets Javascript
 *
 * Qu'est ce qun objet ?
 *
 * En javascript, un objet est une structure qui permet de stocker des pairs clé/valeur.
 * Chaque propriété est définie comme :
 * Cle : valeur
 */
// Exemple:

const PERSONNE = {
  nom: "Nadia",
  aimeLeJavascript: true,
  age: 28,
};

console.log(PERSONNE);

// Comment acceder aux valeurs d'un objet
// Deux manières

console.log(PERSONNE["nom"]);
console.log(PERSONNE.nom);

// Modifier ou ajouter une propriété

// Modifier

PERSONNE.nom = "Ghislain";

console.log(PERSONNE);

PERSONNE.age = 18;

console.log(PERSONNE.age);

// Ajouter une propriété

PERSONNE.ville = "vitry-sur-scèene";

console.log(PERSONNE);

// Supprimer : un mots clé: delete

delete PERSONNE.aimeLeJavascript;

console.log(PERSONNE);

// Boucler sur un objet avec  la boucle for ...in

for (let property in PERSONNE) {
  console.log(PERSONNE[property]);
}

// Fonction dans un objet
// Met clé qui s'apelle this
let classe = {
  //propriété: number, booleen, objet
  nbEleve: 11,
  travaillentBien: true,
  bonjour: function () {
    document.writeln("Nous sommes " + this.nbEleve + " dans la classe");
  },

  sousClasse: {
    nbEleve: 38,
    travaillentBien: false,
    salut: function () {
      document.writeln("Nous sommes " + this.nbEleve + " dans la classe");
    },
  },
};
// J'appelle la fonction boujour
classe.bonjour();
// J'appelle la fonction qui est dans l'objet sousClasse qui lui même est dans l'objet classe
classe.sousClasse.salut();

// Les tableaux d'objets

let utilisateurs = [
  { nom: "Alice", age: 30 },
  { nom: "Bob", age: 25 },
];

document.writeln(utilisateurs[0].age);

// for...of: Itère sur les VALEURS seulement
// user représentes les objet en eux même
for (let user of utilisateurs) {
  console.log(user.age);
}

// for...in:
let utilisateursObjt = {
  utilisateur1: {
    nom: "Alice",
    age: 30,
  },
  utilisateur2: {
    nom: "Bob",
    age: 25,
  },
};

// user représente chaque clé de l'objet utlisateyrsObj (utilisateur1 et utilisateur2)

for(let user in utilisateursObjt) {
    console.log(utilisateursObjt[user].age);
}