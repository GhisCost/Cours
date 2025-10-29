// Configuration TMDB

const API_KEY = "85869b339d3ddc0986e40f109e52cf49";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const recherche = document.getElementById("barreRecherche");
const submit = document.getElementById("submit");
const form = document.getElementById("formRecherche");

async function searchMovies(param) {
  showSearchLoading();
  setTimeout(async () => {
    try {
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
    } catch (error) {
      console.error("Erreur:", error);
    }
  }, 1000);
}

function showSearchLoading() {
  let divFilms = document.getElementById("movies-grid");
  divFilms.innerHTML = "<div class='loader'></div>";
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
    div.classList.add("movie");

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

const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#close-modal");
const modalBody = document.querySelector("#modal-body");

function openModal(content) {
  modalBody.innerHTML = content;
  modal.classList.remove("hidden");
}

const divFilms2 = document.getElementById("movies-grid");

async function getMovieDetails(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos&language=fr-FR`;

  try {
    const response = await fetch(url);
    const movie = await response.json();
    return movie;
  } catch (error) {
    console.error("Erreur:", error);
    return null;
  }
}

function getTrailer(movie) {
  const videos = movie.videos.results;

  const trailer = videos.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  return trailer;
}

divFilms2.addEventListener("click", async function (e) {
  let cible = e.target;

  while (cible && !cible.classList.contains("movie")) {
    cible = cible.parentElement;
  }
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTg2OWIzMzlkM2RkYzA5ODZlNDBmMTA5ZTUyY2Y0OSIsIm5iZiI6MTc2MTY0NzAwMS4yMzUwMDAxLCJzdWIiOiI2OTAwOTk5OTBkYjYzZGMzMjFmYjc1ZjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Br4o-wuxPsgrcI9RCIHKYYvLzAJDQ0v8HmuBe5YyQf8",
      },
    };
    const title = cible.querySelector(".titreFilms").textContent;
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?include_adult=false&query=${encodeURIComponent(
        title
      )}`,
      options
    );
    const data = await res.json();

    const film = data.results[0];

    const detailFilm = await getMovieDetails(film.id);

    let trailerFilm = getTrailer(detailFilm);

    const descriptionFilm = film.overview;

    const noteFilm = film.vote_average;

    const dateFilm = film.release_date;

    console.log(trailerFilm);

    if (!trailerFilm) {
      trailerFilm = new Object();
      trailerFilm.key = "jIQ6UV2onyI?si=ulOTaYWc_nlgtauT";
    }

    const content = `
      <h2>${film.title}</h2>
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/${trailerFilm.key}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <p class=resumeModal>${descriptionFilm}</p>
      <div class=noteDate>
      <p class=note> Note moyenne: ${noteFilm}/10</p>
      <p class=date> Date de sortie: ${dateFilm}</p>
      </div>
      `;

    openModal(content);
  } catch (error) {
    console.error("Erreur:", error);
  }
});

function closeModal() {
  modal.classList.add("hidden");
  modalBody.innerHTML = "";
}

// Fermer avec le bouton X

closeBtn.addEventListener("click", closeModal);

// Fermer en cliquant sur l'overlay

modal.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal-overlay")) {
    closeModal();
  }
});

// Fermer avec la touche Escape

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});


//fonction pour afficher les films les plus populaires avant toute recherches

function displayPopular() {

  

}
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTg2OWIzMzlkM2RkYzA5ODZlNDBmMTA5ZTUyY2Y0OSIsIm5iZiI6MTc2MTY0NzAwMS4yMzUwMDAxLCJzdWIiOiI2OTAwOTk5OTBkYjYzZGMzMjFmYjc1ZjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Br4o-wuxPsgrcI9RCIHKYYvLzAJDQ0v8HmuBe5YyQf8'
  }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&sort_by=popularity.desc', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));

  