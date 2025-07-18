// getElementById va retourner l'élément demandé grâce à son ID
// let first =document.getElementById("li1");

// querySelector() va retourner l'élément demandé grace aux selecteur CSS (Attention ! il retourne un seul élément)

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



// // Changer les attributs

// let image = document.querySelector("img");

// console.log(image);


// let srcImage = image.getAttribute("src");

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

let prompteur = prompt("Être vous heureux dans la vie (oui/non) ?");

let imageReponse = document.createElement("img");
let text2;

if(prompteur== "oui" || prompteur == "Oui"){
    imageReponse.setAttribute('src','./assets/img/pouce_leve.jpg');
    text2=" Super, je suis ravi pour toi";
} else if ( prompteur== "non" || prompteur== "Non"){
    imageReponse.setAttribute("src","./assets/img/pouce_baisse.jpg");
    text2= " Cheh ! Hahahaha";
} else {
    imageReponse.setAttribute("src","./assets/img/image3.jpg");
    text2=" OUI ou NON, on a dit !!!!";
};

document.body.appendChild(imageReponse);
document.body.append(text2);


