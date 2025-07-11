/*Les Incrémentations*/

// -- Incrementation :

let nb1 = 1;

nb1 = nb1 + 1; // Fonctionne avec 1 ou tout autre chiffre mais n'est pas une incrémentation si c'est un autre chiffre qu'1
nb1 += 100, // nb1 = nb1 + 100;
console.log(nb1);

// Ecriture simplifiée
nb1++; //NE FONCTIONNE QU'AVEC 1 !!
console.log(nb1);

// -- Décrementation

nb1 = nb1 - 1;
nb1--;

console.log(nb1);

// Incrémentation 2 :

let nb2 = 5;
console.log(nb2);
let x = nb2++; // x prend la valeur de nb2 AVANT qu'il soit incrémenter et sera donc égale à 5. En revanche si ++nb2 alors l'incrémentaton est effectuée AVANT la réupération de la valeur, x sera donc égale à 6;
console.log(x);
console.log(nb2);
