// Configuration TMDB

const API_KEY = "85869b339d3ddc0986e40f109e52cf49";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";



const recherche = document.getElementById("barreRecherche");
const submit = document.getElementById("submit");
const form = document.getElementById("formRecherche");



async function searchMovies(param) {
 
  showSearchLoading();
    setTimeout ( async() =>{ try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTg2OWIzMzlkM2RkYzA5ODZlNDBmMTA5ZTUyY2Y0OSIsIm5iZiI6MTc2MTY0NzAwMS4yMzUwMDAxLCJzdWIiOiI2OTAwOTk5OTBkYjYzZGMzMjFmYjc1ZjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Br4o-wuxPsgrcI9RCIHKYYvLzAJDQ0v8HmuBe5YyQf8",
      },
    };
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?include_adult=false&query=${param}`,
      options
    );
    const data = await res.json();
    displayMovies(data.results);
  } catch {
    console.error(err);
  }
}, 
1000)
}

function showSearchLoading(){
  let divFilms = document.getElementById("movies-grid");
  divFilms.innerHTML= "<div class='loader'></div>"
}


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = recherche.value.trim();

  recherche.value = "";
  recherche.focus();

  searchMovies(query);
});


async function displayMovies(param) {
  let divFilms = document.getElementById("movies-grid");

  divFilms.innerHTML = "";

  param.forEach((element) => {
    let div = document.createElement("div");

    if (element.poster_path) {
      div.innerHTML = `<img src='${IMG_URL + element.poster_path}' alt='${
        element.title
      }'></img> <p class=titreFilms>${
        element.title
      }</p> <p class=resume>${element.overview.slice(0, 100)}...</p>`;
    } else {
      div.innerHTML = `<img src='./assets/img/img_film_default.jpg' alt='image de bobine de film'></img> <p class=titreFilms>${
        element.title
      }</p> <p class=resume>${element.overview.slice(0, 100)}...</p>`;
    }

    let div2 = document.createElement("div");
    div2.innerHTML = ``;
    divFilms.appendChild(div);
  });
}

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTg2OWIzMzlkM2RkYzA5ODZlNDBmMTA5ZTUyY2Y0OSIsIm5iZiI6MTc2MTY0NzAwMS4yMzUwMDAxLCJzdWIiOiI2OTAwOTk5OTBkYjYzZGMzMjFmYjc1ZjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Br4o-wuxPsgrcI9RCIHKYYvLzAJDQ0v8HmuBe5YyQf8'
//   }
// };

// fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
