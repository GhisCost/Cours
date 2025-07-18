/**
 * Les Fonctions
 * 
 * Les fonctions sont des structures qui permettent de reutiliser le code à l'intérieur indéfiniment selon les besoins
 * 
 * structure:
 * 
 * function nomdelafonction(){
 * ...code à executer !;
 * }
 */

// Les fonctions prédéfinies (native)

// indexof()
// Cherche la position d'un élément dans une chaine de caractère (si l'élément n'est pas trouvé il retourne -1)

// let phrase = "pates";

// let position = phrase.indexOf("e"); // Cherche la position du e dans 'pates'

// document.writeln ('<span>' + position + '</span>');

// includes()

// vérifie si une chaine de caractère contient un élément  (retourne true ou false)

// let email = prompt("quel est votre email ?");

// if (email.includes ('@')){
//     alert('Email Valide');
// } else{
//     alert('Email invalide');
// }

// toLowerCase(), toUppercase() minuscule et majuscule

// length: length retourne la longueur d'une chaine de caractère (ou le nombre d'éléments d'un tableau)

// Math.round: arrondi un chiffre décimal à l'entier le plus proche
// Math.floor: arrondi un chiffre décimal à l'entier inférieur
// Math.random: retourne un décimal entre 0 et 1

// for (let i = 0; i < 20; i++) {
//     let random = Math.round(Math.random() * 25);
 
//     while (random < 5) {
//         random = Math.round(Math.random() * 25);
//     }
 
//     document.writeln(random);
// }

// Fonctions Utilisateurs

/**
 * 
 * Les fonctions utilisateur se distinguent en 4 types
 * 
 */

//1.Fonction sans paramètres sans valeur de retour

// On laisse les paramètre et la fonction ne d'aucun return

function additionSansVSansR(){
   document.writeln("<p>"+ (10 + 2) + "</p>");
};

// J'appelle ma fonction 

additionSansVSansR()

// 2.Fonction avec paramèter sans valeur de retour

// On rempli le ou les paramètres et la fonction ne dispose d'aucun return

function additionAvecVSansR(num1,num2){
    document.writeln("<p>" + (num1+num2) + "</p>");
}

// Je rempli mes paramètres à chaque fois que j'appelle ma fonction

additionAvecVSansR(30,50);
additionAvecVSansR(60,200);

// 3. Fonction sans paramètre avec valeur de retour

function additionSansVavecR(){
    return 20 + 30;
}

let addition1 = additionSansVavecR();

document.writeln(addition1);

// 4. Fonction avec parametre avec valeur de retour

function additionAvecVAvecR(num1,num2){
    return "Le résultat de " + num1 + " + " + num2 + " est égale à " + (num1+num2);
}

let addition2 = additionAvecVAvecR(23,34);

console.log(addition2);

// Quelques exemples

function bonjour(){
    document.writeln("<p> Bonjour tout le monde </p>");
}

bonjour();

function bonjourP(nom){
    document.writeln ("<p>Bonjour "  + nom + "</p>")
};

function bonjourR(){
    return `<p> Bonjour tout le monde</p>`;
}

let bonjour1 = bonjourR();

document.writeln(bonjour1);

function bonjourVR(nom){
    return `Bonjour ${nom}`;
}

let sabrina = bonjourVR('Sabrina');

document.writeln(sabrina);

// Function avec Prompt :

function meteo(saison,temperature){
    let message = "Nous sommes en " + saison + " et il fait acctuellement " + temperature + " degrès";

    document.writeln("<p>"+ message + "</p>");

}

let saison = prompt("Donne moi une saison :");
let temperature = prompt("Donne moi une température");
meteo(saison,temperature);