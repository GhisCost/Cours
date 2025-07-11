/* LES OPERATEURS */

/*Les opérateurs (comme leur nom l'indique) consistent à faire des opérations mathématiques en utilisant les symboles +, -, *, /, % */

// Pour calculer un resultat, j'ai besoin de stocker mes valeurs

let nb1 = 24; //à ne pas confondre avec "24" qui est un string (chaine de caractère)

let nb2 = 35;

// Addition ( + )

let resultatAddition = nb1 + nb2;

console.log(nb1 + nb2); // Affichera seulement le resultat des 2 variables
console.log(resultatAddition); // Affichera le resultat des 2 variables nb1+ nb2 STOOCKEES dans la variable resultatAddition

resultatAddition = resultatAddition + 10; // la valeur sera égale à elle même + 10

console.log(resultatAddition);

//  Soustraction ( - )

let resultatsSoustraction = nb1 - nb2;
console.log(resultatsSoustraction);

// Multiplication ( * )

let resultatMultiplication = nb1 * nb2;
console.log(resultatMultiplication);

// Division ( / )

let resultatDivision = nb1 / nb2;
console.log(resultatDivision);

//Modulo ( % )
// -- Le modulo retourne le reste d'un division
// Il multiplie la partie entière du resltat de la division avec le second nombre de la division et prend l'écart entre cette multiplication et le premier chiffre de la division

let resultatModulo = nb1 % nb2;
console.log(resultatModulo);

let resultat = nb1 + nb2;

resultat = nb1 - nb2;
resultat = nb1 * nb2;
resultat = nb1 / nb2;
resultat = nb1 % nb2;

console.log(resultat); // le restultat sera égal à la derniere ligne écrite (modulo)
