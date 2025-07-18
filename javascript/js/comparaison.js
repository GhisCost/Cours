// Les Opérateurs de comparaison

// !!! SURTOUT PAS ( A = B)
//  L'opérateur de comparaison == signifie 'égal à' 
// Il permet de vérifier que les VALEURS de 2 variables sont indentiques

let nb1 = 123;
let nb2 = "123";

console.log(nb1 == nb2); // Retournera TRUE (c'est vrai que les valeurs de nb1 et nb3 sont les mêmes)

// L'opérateur de comparaison stricte === signifie 'égal à' 
// À la différence de ==, il vérifie également le type de la variable ET sa valeur

console.log(nb1 === nb2); // Retournera FALSE (nb1 est de type Number et nb2 de type String)

// L'opérateur différent != signifi 'Différent de ... EN VALEUR'

console.log(nb1 != nb2); //Retournera FALSE (les valeurs ne sont pas différentes)

// L'opérateur strictement différent !== signifie ' Strictement différent de ... en Type et Valeurs'

console.log(nb1 !== nb2); // Retournera TRUE (les valeurs sont les mémes mais les types sont différents)


// L'opérateur > signifie "plus grand que"

console.log(nb1 > nb2); //retourne false

// L'opérateur>= signifie 'plus grand ou égale à'

console.log(nb1 >= nb2); // retourne true

//L'opérateur < signifie 'plus petit que' 

console.log(nb1 < nb2); // retourne false

// L'opérateur <= signifie ' plus petit ou éagal à

console.log(nb1 <= nb2) // retourne true


// Conversion des types :

nb2 = parseInt(nb2); // Converti en nombre
nb2 = parseFloat(nb2); // Converti en décimale

nb1 = nb1.toString(); // Converti en chaine de caractère

