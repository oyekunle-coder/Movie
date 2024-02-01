/*const form = document.querySelector('.search-btn');
const movieCon = document.querySelector('.movieContainer');
const input = form.querySelector('input');
const searchResults = document.querySelector('.search-result');
const searchResultContainer = document.querySelector('.searchResultContainer');


form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = input.value;
  const apiKey = 'be88216829176ea28b4c9c235da1b6b1'; 
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const movies = data.results;

    searchResults.innerHTML = '';
    movieCon.innerHTML = '';


    movies.forEach((movie) => {
      const { poster_path, title, release_date, vote_average } = movie;

      const movieContainer = document.createElement('div');
      movieContainer.classList.add('movieCard');

      const posterUrl = poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+poster';

      movieContainer.innerHTML = `
        <img src="${posterUrl}" alt="${title}" class="moviePoster">
        <div class="movieTitle">${title}</div>
        <div class="rating">
          <span class="rate">${vote_average}</span>
          <span class="year">${release_date ? release_date.slice(0, 4) : ''}</span>
        </div>
      `;

      searchResults.appendChild(movieContainer);
    });

    const header = searchResultContainer.querySelector('header');
    if (!header) {
      const header = document.createElement('header');
      header.innerHTML = `<h1>Search Results: ${query}</h1>`;
      searchResultContainer.insertBefore(header, searchResults);
    } else {
      header.innerHTML = `<h1>Search Results: ${query}</h1>`;
    }
  } catch (error) {
    console.error(error);
  }

});*/



// const descimage = document.getElementsByClassName('extra2');

// const apiKey = 'be88216829176ea28b4c9c235da1b6b1';

// document.addEventListener("DOMContentLoaded", function () {
  

// // document.getElementsByClassName("extra").innerHTML = 

// fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
//   .then((response) => response.json())
//   .then((data) =>{
//     console.log(data);
//     const cinema = data.results;

//     if(cinema.length > 0){
//       const moviebox = cinema[18];
//       const image = `https://image.tmdb.org/t/p/w500${moviebox.poster_path}`;

//       const showMovie = `
//       <div>
//       <h1>${moviebox.original_title}</h1>
//       <p>${moviebox.overview}</p>
//       <p>${moviebox.release_date}</p>

//       <div>
//           <img src='${image}' alt='${moviebox.original_title}' >

//       </div>
//       </div>
      
//       `;

//       desc.innerHTML = showMovie;
//     }

//     else{
//       desc.innerHTML = 'no movie found'
//     }

// })

//    .catch((error)=>{
//     console.error('error'), error;
//    })



// })



// New section


const movieBox = document.getElementById('extra');

const apiKey= 'be88216829176ea28b4c9c235da1b6b1';

//function movieBackground(){

  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
  .then((res)=> res.json())
  .then((data)=>{
    // console.log(data)
    const film = data.results;

    if(film.length > 0){
      const movie = film[13];
      const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      const showMovie =`
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
      movieBox.innerHTML = showMovie;
    }
    else{
      movieBox.innerHTML = 'no movie found'
    }
  })
  .catch((error)=>{
    console.error('error'), error;
  });

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




// SECTION 2

const image2 = document.getElementById("key2");

fetch(
`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&&api_key=3b559e0bc42676586bae4a8920208baa`
)
.then((response) => response.json())
.then((data) => {
  console.log(data.results)

  allfilm = data.results;
  displayFilm(data.results);
});



//movieBackground()



fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // console.log(data)
    const movies = data.results;
    const movieContainer = document.querySelector('.movieContainer');

    movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movieCard');

      const moviePoster = document.createElement('img');
      moviePoster.classList.add('moviePoster');
      moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      moviePoster.alt = movie.title;

      const movieTitle = document.createElement('div');
      movieTitle.classList.add('movieTitle');
      movieTitle.innerText = movie.title;

      const rating = document.createElement('div');
      rating.classList.add('rating');

      const rate = document.createElement('span');
      rate.classList.add('rate');
      rate.innerText = `${movie.vote_average}`;

      const year = document.createElement('span');
      year.classList.add('year');
      year.innerText = movie.release_date.split('-')[0];

      

      rating.appendChild(rate);
      rating.appendChild(year);
      


      movieCard.appendChild(moviePoster);
      movieCard.appendChild(movieTitle);
      movieCard.appendChild(rating);

      movieContainer.appendChild(movieCard);
    });
  })
  .catch(error => {
    console.error('Error fetching movies:', error);
  });
