/* Les écouteurs d'événements

1.Qu'est-ce qu'un événement ?

Un événement est une action ou un comportement détécté par le navigateur:

Exemples: 
-Un clic de souris
-Un appui sur une touche de clavier
-Un survol
-Le chargement d'une page

2. Pourquoi utiliser des écouteurs ?

Un écouteur d'événement (event Listener) permet de dire à la page: 
"Quand l'utilisateur fait ceci (événement), tu fait ça (fonction)"

*/

// 3.Synthaxe de base

// element.addEventListener ("evenement", functionaexecuter());

let click = document.querySelector("#clickclick");

// J'ai recupéré l'élément HTML avec l'id #clickclick
// Lorsque je clique sur le bouton, il analyse le type de comportement à avoir ("ici le click") puis il execute la fontion anonyme. 

click.addEventListener('click',function(){
    let div=document.createElement('div');
    div.innerHTML = "<h1 style='color:pink'> Tu viens de cliquer sur le bouton </h1>";
    document.body.appendChild(div);
}); 

/* 4. Types d'évenements les plus courants 

click= "click de souris";
dblclick= "double click de souris";
mouseover= 'survol de souris';
mouseout= "quand la souris quitte l'élément",
keydown=" touche du clavier pressée",
keyup= "touche relaché";
submit= "formulaire envoyé";
change="valeur changée (input, select)";
input= "text saisi en temps réel (sur input)";
load= "Page ou image chargée"
*/

// 5. Fonction nommée vs fonction anonyme

function direBonjour(){
    console.log("Bonjour !");
}

click.addEventListener('click',direBonjour);


// 6. Retirer un écouteur
// removeEventListener : Attention, il faut obligatoirement une fonction nommée !!


// 7 Evenements sur plusieurs éléments

let tousMesboutons = document.querySelectorAll('.test');

// tousMesboutons contient un tableau avc 3 boutons
// Pour chacuns (btn représente chaque bouton individuellement)

tousMesboutons.forEach(btn=>{
// Ecotueur d'événement sur chaque bouton (click), LE BOUTON sur lequel je click activera son propre écouteur d'évenement

    btn.addEventListener('click',function(){
        alert('Bouton Cliqué !');
        btn.style.backgroundColor="blue";
    })
})

// 8. Objet (event) (détail de l'évenement)
// Il sert à savoir par exemple: quelle touche a été préssée, quel élément a été cliqué etc etc...

document.addEventListener('keydown',function(event){
    console.log("Touche préssée : " + event.key);
});

// 9. BONUS : Astuce utile

let form=document.querySelector('form')

form.addEventListener('submit',function(event){
    event.preventDefault(); // Empecher l'envoie du formulaire
    // Je peux faire mes vérification d'usage
let message=[];
// (il n'y a aucune erreur de base)
let error= false;

// Si la VALEUR de mon input a une longueur inférieur à 3 caractère alors je réaffecte la valeur de ma variable message et je change la variable error à true pour signifier une erreur
    if(this.querySelector('#nom').value.length <2){
        message.push('votre nom doit avoir 2 caractère ou plus');
        error= true;
    } 
    if (this.querySelector("#prenom").value.length<2){
        message.push('Votre prénom doit avoir 2 caractère ou plus');
        error = true;
    }

    if(error== false){
// Code pour envoyer au serveur et passer à la suite

    } else {
        document.body.append(message);
    }
});




