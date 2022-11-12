
const movieId = localStorage.getItem('id')

async function showMovieInfo() {
  
    const data = await fetch (`http://www.omdbapi.com/?i=${movieId}&apikey=19d18a42`);
    const moviedetails = await data.json();
    console.log(moviedetails.Genre)
   
   const infoEl = document.querySelector('.movie__container');
   infoEl.innerHTML = renderHTML(moviedetails)
}

showMovieInfo()



function renderHTML(moviedetails) {
    return `  
    <div class="image__placeholder">
      <figure class="result__img">
        <img
          src="${moviedetails.Poster}"
          class="result__image"
        />
      </figure>
    </div>

    <div class="movie__info--section">
      <h1 class="movie__title padding">${moviedetails.Title}</h1>
      <h4 class="movie__released padding">
        Release Date: <span>${moviedetails.Released}</span>
      </h4>
      
      <h4 class="movie__imdbrating padding">IMDb Rating: <span class="data">${moviedetails.imdbRating}</span></h4>
      <h4 class="movie__imdbvotes padding">IMDb Votes: <span class="data"> ${moviedetails.imdbVotes}</span></h4>
      <h4 class="movie__metascore padding">Metascore: <span class="data">${moviedetails.Metascore}</span></h4>
      <h4 class="movie__boxoffice padding">BoxOffice: <span class="data">${moviedetails.BoxOffice}</span></h4>
      
      <h4 class="movie__genre padding">Genre: <span class="data"><${moviedetails.Genre}></span></h4>
      <h4 class="movie__director padding">Director: <span class="data">${moviedetails.Director}</span></h4>
      <h4 class="movie__writer padding">Writer: <span class="data">${moviedetails.Writer}</span></h4>
      <h4 class="movie__actors padding">Actors: <span class="data"> ${moviedetails.Actors}</span></h4>
      <p class="movie__plot padding">
        Plot: <span class="data">${moviedetails.Plot}</span>
      </p>
      <h4 class="movie__language padding">Language: <span class="data">${moviedetails.Language}</span></h4>
      <h4 class="movie__awards padding">Awards: <span class="data"> ${moviedetails.Awards}</span> </h4>



    </div>
  </div>`
}