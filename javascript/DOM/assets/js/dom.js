// LE DOM

// Le DOM est une interface de programation permettant aux langages de programation (JS pour nous), de manipuler le contenu (html), la structure(html) et le style(css) d'une page web

// getElementById va retourner l'élément demandé grâce à son ID (uniquement le premier si par erreur il y a plusieur élément avec le même ID)
// let first =document.getElementById("li1");

// getElementsByClassName (par nom de class); getElementByTagName (par nom de balise)

// querySelector() va retourner l'élément demandé grace aux selecteur CSS (Attention ! il retourne un seul élément, le premier)

// let first = document.querySelector("#li1");

// console.log(first);

// // querySelectorAll() va retourner TOUS les éléments demandés sous forme de "noeud" (tableau) même s'il n'y qu'un seul élément

// let lis = document.querySelectorAll("nav>ul>li");

// console.log(lis);

// // FOREACH: méthode qui va nous permettre de boucler sur les tableaux
// let text=''

// lis.forEach((li)=>{
//  text += li.textContent;

// });

// console.log(text);

// Changer les attributs

// let image = document.querySelector("img");

// console.log(image);

// getAttribute() recupère l'attribut (dans une balise html ex: id, class, src, href, etc...)

// let srcImage = image.getAttribute("src");

// setAttribute change ou crée un attribut d'une balise HTML

// // image.setAttribute("src","");

// // je recupère mes images

// let images= document.querySelectorAll("img");
// // Pour chacune des images on recupère l'attirbut alt
// images.forEach((image)=>{
//     if(image.getAttribute('alt') == "janthir wilds"){
//         image.style.width= "50%";
//     } else if (image.getAttribute('alt') == "vision of eternity"){
//         image.style.width= "75%";
//         image.style.boxShadow="10px 10px 10px black";
//     } else {
//         image.style.height="25%";
//     }
// })


// Modification CSS

// La propriété style nous servira à acceder à toutes les propriétés disponible en CSS

// h1.style.fontSize='60px'
// Modification du DOM

// let li6 = document.createElement('li');
// console.log(li6);
// // On ajoute la classe li
// li6.setAttribute("class","li");
// console.log(li6);

// // J'ajoute le text '6' à l'intérieur
// li6.textContent= '6'
// console.log (li6);

// // append() ou appendChild()
// let ul = document.querySelector('nav>ul');

// console.log(ul);

// ul.appendChild(li6);

// // on l'efface
// li6.remove()

// // Créer un élément HTML

// // createElement('nom de la balise')
// let titreH3 = document.createElement('h3');

// // textcontent = récupère ou défini le texte dans l'élément

// titreH3.textContent="Le petit royaume de Louis";
// titreH3.setAttribute('id','supprime-moi')

// // Je rends titreH3 enfant de body
// document.body.appendChild(titreH3);

// // Je supprime l'élément après l'avoir crée directement
// let h3Supp= document.querySelector('#supprime-moi');
// h3Supp.remove()


// Exemple prompt

// let prompteur = prompt("Être vous heureux dans la vie (oui/non) ?");

// let imageReponse = document.createElement("img");
// let text2;

// if (prompteur == "oui" || prompteur == "Oui") {
//   imageReponse.setAttribute("src", "./assets/img/pouce_leve.jpg");
//   text2 = " Super, je suis ravi pour toi";
// } else if (prompteur == "non" || prompteur == "Non") {
//   imageReponse.setAttribute("src", "./assets/img/pouce_baisse.jpg");
//   text2 = " Cheh ! Hahahaha";
// } else {
//   imageReponse.setAttribute("src", "./assets/img/image3.jpg");
//   text2 = " OUI ou NON, on a dit !!!!";
// }

// document.body.appendChild(imageReponse);
// document.body.append(text2);

// Prompteur:

// let prompteur =prompt ("Combien de chat avez vous ?");

// let p= document.createElement('p');

// if(prompteur== 0){
//     p.textContent= "Bien joué, ça sert à rien les chats ! "
// } else if (prompteur>0 && prompteur <4){
//     p.textContent= "Nan c'est eux qui vous possède !"
// } else {
//     p.textContent="Ils vont vous dévorer d'ici peu..."
// }

// document.body.appendChild(p);


// DOM un peu plus approfondi

// Naviger dans le DOM
// Le DOM forme un arbre d'éléments liés entre eux: Parent, enfants, frères, etc... 

//"parentElement": Récupère l'élément parent
// "children": liste des enfants directs
// "nextElementSibling / previousElementSibling": frère suivant ou frère précédent 

let parag=document.querySelector("#second");

console.log(parag.previousElementSibling); // Affichera le p sans id

// innerHYML vs textContent 
// textContent affiche du texte BRUT alors que innerHTML transcrit le HTML en balises
let inner=document.querySelector('#exempleInner');
let text=document.querySelector("#exempleText");

text.textContent= "<div> coucou </p>"
inner.innerHTML="<div><p><i>coucou</i></p></div>"

// Cloner un élément
let clone = document.querySelector('#parent').cloneNode(true); //Si true=copie des enfants aussi, si false ou vide = copie sans les enfants (copie superficielle)

document.body.appendChild(clone);

// Petit rappel
// Pour générer dynamiquement une structure complète

// document.createElement() pour créer un élément
// appendChild() pour les imbriquer
// setAttribute() pour leur donner un attribut
// textContent ou innerHTML pour insérer du contenu

// Les classes
// Manipuler les classes avec classList

let cobbaye= document.createElement('span')

// ajouter une classe

cobbaye.classList.add('class1','class2');
console.log(cobbaye);

// Retirer
cobbaye.classList.remove('class1');
console.log(cobbaye);

// Toggle (ajoute ou supprime en fonction de si elle est présente ou non)

cobbaye.classList.toggle('class1')
console.log(cobbaye);

// Contains (Vérifie si la classe existe dans l'attribut), renvoie True/False

let check = cobbaye.classList.contains('class1');
console.log(check);

// value de formulaire 

let nom = document.querySelector('#nom').value;
console.log(nom);
let prenom = document.querySelector('#prenom').value;
console.log(prenom);

nom = "Hakim"; //Changer uniqument dans javascript

prenom = "Hakim"; //Changer seulement dans javascript