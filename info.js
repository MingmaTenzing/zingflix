
const movieId = localStorage.getItem('id')

async function showMovieInfo() {
    const data = await fetch (`http://www.omdbapi.com/?i=${movieId}&apikey=19d18a42`);
    const moviedetails = await data.json();
    console.log(Object.values(moviedetails))
}

showMovieInfo()



function renderHTML (detail) {
    return `  
    <div class="image__placeholder">
      <figure class="result__img">
        <img
          src="${detail.Poster}"
          class="result__image"
        />
      </figure>
    </div>

    <div class="movie__info--section">
      <h1 class="movie__title padding">${detail.Title}</h1>
      <h4 class="movie__released padding">
        Release Date: <span>${detail.Released}</span>
      </h4>
      
      <h4 class="movie__imdbrating padding">IMDb Rating: <span class="data">${detail.imdbRating}</span></h4>
      <h4 class="movie__imdbvotes padding">IMDb Votes: <span class="data"> ${detail.imdbVotes}</span></h4>
      <h4 class="movie__metascore padding">Metascore: <span class="data">${detail.Metascore}</span></h4>
      <h4 class="movie__boxoffice padding">BoxOffice: <span class="data">${detail.BoxOffice}</span></h4>
      <h4 class="movie__genre padding">Genre: <span class="data"><${detail.Genre}></span></h4>
      <h4 class="movie__director padding">Director: <span class="data">${detail.Director}</span></h4>
      <h4 class="movie__writer padding">Writer: <span class="data">${detail.Writer}</span></h4>
      <h4 class="movie__actors padding">Actors: <span class="data"> ${detail.Actors}</span></h4>
      <p class="movie__plot padding">
        Plot: <span class="data">${detail.Plot}</span>
      </p>
      <h4 class="movie__language padding">Language: <span class="data">${detail.Language}</span></h4>
      <h4 class="movie__awards padding">Awards: <span class="data"> ${detail.Awards}</span> </h4>



    </div>
  </div>`
}