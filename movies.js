

async function idvalue(event){
    
    event.preventDefault();
     const searchInput = document.getElementById("search").value;
     console.log(searchInput)
    callAPI(searchInput)
    
    
    
 }


 async function callAPI (searchInput) {
  
  const loading = document.querySelector('.result__list')
  loading.classList += ' loading'
  const data = await fetch (`https://www.omdbapi.com/?s=${searchInput}&apikey=19d18a42`)
  
  const movieData = await data.json();
  loading.classList.remove += '.loading'

  console.log(movieData.Search)

  const resultEl = document.querySelector('.result__list');
  resultEl.innerHTML = movieData.Search.map((movie)=>resultHTML(movie)).join('');

  const resultspage = document.querySelector('.outcome');
  resultspage.classList += ' results'
  const resultSection = document.querySelector('.outcome')
  resultSection.scrollIntoView({behavior:"smooth"});


}




function movieinfo() {
  localStorage.setItem('id', movie.imdbID)
  

 }


 function resultHTML(movie) {
    return `
   <div class='result__card' onclick="movieinfo(${movie.imdbID})">
    <div class="result__container">
      <figure class='result__image' ><img src="${movie.Poster}"class="result__img"></figure>
      <div class="result__info">
      <h3 class="result__title"><span> ${movie.Title}</span></h3>
      <h4 class="result__year">Year: <span> ${movie.Year} </span></h4>
      <h4 class="result__imdbid"> IMDb ID: <span>${movie.imdbID}</span> </h4>
      <h4 class="result__type"> Type: <span> ${movie.Type} </span></h4>
    </div>
    </div>
    </div>`
 }


 






