/* Qu'est-ce que Javascript ? 

- C'est un langage de programation (à l'inverse de HTML et CSS qui sont des langages de balisage et de style)

-Il sert principalement à rendre notre site  ou notre application interractif

Qu'est-ce qu'on utilise dans Javascript ?

-Les variables

Quest-ce qu'une variable ?

- Une variable est 'comme une sorte de boite vide' dans laquelle on STOCK des valeurs (ou des données pour Ilyes) pour pouvoir les utiliser par la suite

Les déclaration des variables (les mots clés):

- LET nomVariable (ou nom_variable)
- VAR nomVariable 
- CONST nomVariable : la valeur ne peut pas être modifiée une fois affectée (jusqu'a la fin du script)

Les types de variables:

- chaines de caractères (string)
- nombre entier (integer ou Int) (même si typeof affichera Number)
- nombre decimal (float)
- booleens (boolean= true or false)

Concatenation :
 
-L'opérateur de concatenation (+) lorsqu'il est utilisé avec des nombres sert à les additionner et lorsqu'il est utilisé avec autre chose que des nombre il sert d'opérateur de concatenation (relie deux chaines de caractères)*/ 


// Exo de freecodecamp
// const options = ["Rock", "Paper", "Scissors"];

// function getRandomComputerResult() {
//   const randomIndex = Math.floor(Math.random() * options.length);
//   return options[randomIndex];
// }

// function hasPlayerWonTheRound(player, computer) {
//   return (
//     (player === "Rock" && computer === "Scissors") ||
//     (player === "Scissors" && computer === "Paper") ||
//     (player === "Paper" && computer === "Rock")
//   );
// }

// let playerScore = 0;
// let computerScore = 0;

// function getRoundResults(userOption) {
//   const computerResult = getRandomComputerResult();

//   if (hasPlayerWonTheRound(userOption, computerResult)) {
//     playerScore++;
//     return `Player wins! ${userOption} beats ${computerResult}`;
//   } else if (computerResult === userOption) {
//     return `It's a tie! Both chose ${userOption}`;
//   } else {
//     computerScore++;
//     return `Computer wins! ${computerResult} beats ${userOption}`;
//   }
// }

// const playerScoreSpanElement = document.getElementById("player-score");
// const computerScoreSpanElement = document.getElementById("computer-score");
// const roundResultsMsg = document.getElementById("results-msg");

// function showResults(userOption){
//   roundResultsMsg = getRoundResults(userOption);
//   console.log (roundResultsMsg)
//   playerScoreSpanElement = playerScore;
//   console.log (playerScoreSpanElement)
//   computerScoreSpanElement = computerScore;
// };