//  LES BOUCLES

/** Les boucles sont des structures qui servent à éxécuter du code autant de fois que nécéssaire 
 * 
 * Il existe plusieurs type de boucles mais les plus utilisées sont les suivantes: for / while
*/

// La boucle While (tant que)

// let compteur = 1;


 // tant que mon compteur est strictement inférieur à 10, la boucle se relance jusqu'à ce que la condition soit fausse;

 // while( compteur < 10) {
//     document.writeln("<h2 style='color: crimson'> Voici mon compteur : " + compteur + "</h2>");

 //     // ATTENTION: ne pas oublier d'incrementer (sous peine de boucle infini)
//     compteur++;
// }

// let response = '';

// while (response != 'non') {
//     response = prompt (" Etes vous bloqué dans l'Izanami ?");
//     console.log (response);
// }

// DO ... WHILE : 

// À la différence de WHILE, Do While executera toujours le premier tour de sa boucle même si la condition est fausse

// let i = 0;

// do {
//   document.writeln(i);
//   i++;
// } while ( i > 1);

// La boucle FOR 

/* 
for (3 arguments){
... Code à éxécuter
}

for (let i=0; i<10 ; i++){
}
Différence avec While: tout est dans la parenthèse pour le for
*/
for (let i = 0; i <= 20; i+=2) {
    document.writeln ("<h3>Salut, je suis le numéro " + i + "</h3>");
}