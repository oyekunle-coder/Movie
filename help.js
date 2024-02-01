const hero = document.getElementById("extra");
const keyy2 = document.getElementById("extra2");

const apiKey = "be88216829176ea28b4c9c235da1b6b1";

let favorites = [  ];

    let isPending =false

document.addEventListener("DOMContentLoaded", function () {
    isPending = true;
    if (isPending === true) {
      document.getElementById("extra").innerHTML = `
      <div class="d-flex justify-content-center mt-5 pt-5 text-light mb-5">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
`
        ; }

    setTimeout(() => {

      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // isPending = false

          const film = data.results;

          if (film.length > 0) {
            const movie = film[18];
            const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

            const showinner = `
        <div class="film-div d-flex w-100 px-0 my-4">

            <div class="onee bg-dark p-4 text-justify text-light">
                <h1 class="title ps-3 pt-4">${movie.original_title}</h1>
                <div class="overview" style="font-size:15px;" >${movie.overview.slice(
              0,
              400
            )}...</div>
                <div class="language"><img src="https://images.unsplash.com/photo-1628510118714-d2124aea4b8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzYSUyMGZsYWd8ZW58MHx8MHx8fDA%3D" alt="" style="width:5%; height:5%;">${movie.original_language
              }glish</div>
                <div class="date">Release on: ${movie.release_date}</div>

                <span id="sp">
                
                    <div>
                        <button id="watch">
                            Watch
                        </button>
                    </div>

                    <div id="wat">
                        <div id="wat0"></div>
                        <div id="wat1"></div>
                        <div id="wat2"></div>
                    </div>
                </span>
            </div>

            <div class="movie-img">
                <img src="${image}" alt="${movie.original_title
              }" height="400" width="100%">
            </div>

        </div>
        
        `;

            hero.innerHTML = showinner;
          } else {
            hero.innerHTML = "no movie found.";
          }
        })
        .catch((error) => {
          console.error("error"), error;
        });
    }, 1000);
  

});

// SECTION 2

const image2 = document.getElementById("extra2");

fetch(
  `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&&api_key=3b559e0bc42676586bae4a8920208baa`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results)

    allfilm = data.results;
    displayFilm(data.results);
  });




function displayFilm(film) {
  let tv = "";

  film.map((value) => {
    tv += `
      <div class=" container">
        <div class="product">
          <img src=https://image.tmdb.org/t/p/original${
            value.poster_path
          }  alt="${value.title}">
          
          <div class="original text-light"><h4>${
            value.original_title
          }</h4></div>
          <div class="second-film-disc">${value.overview.slice(0, 40)}...</div>
          <div class="fav">
            <button onclick="addToFavorites(${JSON.stringify(value)})">
              Add To Favourite <i class="fas fa-heart" tabindex="0"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  });

  image2.innerHTML = tv;
}