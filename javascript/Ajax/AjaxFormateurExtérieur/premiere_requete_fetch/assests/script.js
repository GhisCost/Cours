console.log("script lancé");

function getUrl() {
  const url = "https://api.thecatapi.com/v1/images/search";

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP:${response.status}`);
      }
      return response.json();
    })
    .then((data) => data[0].url)
    .catch((error) => console.error(error));
}

let imageChat = document.getElementById("imageChat");

getUrl().then((urlImage) => {
  imageChat.setAttribute("src", urlImage);
});

let button = document.getElementById("btn");

button.addEventListener("click", function () {
  getUrl().then((urlImage) => {
    imageChat.setAttribute("src", urlImage);
  });
});

let imageChat1 = document.getElementById("chat1");
let imageChat2 = document.getElementById("chat2");
let imageChat3 = document.getElementById("chat3");
let imageChat4 = document.getElementById("chat4");

getUrl().then((urlImage1) => {
  imageChat1.setAttribute("src", urlImage1);
});

getUrl().then((urlImage2) => {
  imageChat2.setAttribute("src", urlImage2);
});

getUrl().then((urlImage3) => {
  imageChat3.setAttribute("src", urlImage3);
});

getUrl().then((urlImage4) => {
  imageChat4.setAttribute("src", urlImage4);
});

let btn1chat = document.getElementById("btn1chat");
let btn4chat = document.getElementById("btn4chat");
let div1chat = document.getElementById("div-unchat");
let div4chat = document.getElementById("div-quatrechat");

btn1chat.addEventListener("click", function () {

  div1chat.classList.add("apparait");
  div4chat.classList.add("disparait");
  div1chat.classList.remove("cacher");
  div4chat.classList.remove("montrer");


});

btn4chat.addEventListener("click", function () {

  div1chat.classList.add("cacher");
  div4chat.classList.add("montrer");
  div1chat.classList.remove("apparait");
  div4chat.classList.remove("disparait");


});

let btn4 = document.getElementById("btn4");

btn4.addEventListener("click", function () {
  getUrl().then((urlImage1) => {
    imageChat1.setAttribute("src", urlImage1);
  });

  getUrl().then((urlImage2) => {
    imageChat2.setAttribute("src", urlImage2);
  });

  getUrl().then((urlImage3) => {
    imageChat3.setAttribute("src", urlImage3);
  });

  getUrl().then((urlImage4) => {
    imageChat4.setAttribute("src", urlImage4);
  });
});
/*

const url = "https://api.thecatapi.com/v1/images/search";
const imageSection = document.getElementById("images-section");

function getRandomImageUrl() {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data[0].url)
    .catch((error) => console.error("mon ptit gars, ", error));
}

function addImagesToSection(imagesAmount) {
  for (i = 0; i < imagesAmount; i++) {
    getRandomImageUrl().then((response) => {
      imageSection.innerHTML += `
      <img 
        src="${response}"
        alt="Photo de chat"
        style="width: 300px; height: 150px;"
      />`;
    });
  }
}

addImagesToSection(6);

 */