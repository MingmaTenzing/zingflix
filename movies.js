let isloading;
let ismodalopen = false;

function openmodal() {
  if (ismodalopen) {
    ismodalopen = false;
    return document.body.classList.remove('modal__open')
  }
  ismodalopen = true;
  document.body.classList += (' modal__open')
}


function closebutton() {
  
  document.body.classList.remove('modal__open')
  ismodalopen = false;
}

async function idvalue(event){
    
    event.preventDefault();
     const searchInput = document.getElementById("search").value;
     console.log(searchInput)
    callAPI(searchInput)
    
    
    
 }


 async function callAPI (searchInput) {
  

  if (!isloading) {
    const loading = document.querySelector('.loading__stage')
    loading.classList += ' loading__line'
    
   

  }




  const data = await fetch (`https://www.omdbapi.com/?s=${searchInput}&apikey=19d18a42`)
  
  const movieData = await data.json();
 

  console.log(movieData.Search)

  const resultEl = document.querySelector('.result__list');
  resultEl.innerHTML = movieData.Search.map((movie)=>resultHTML(movie)).join('');
  const loading = document.querySelector('.loading__stage')
  loading.classList.remove('loading__line')

  const resultspage = document.querySelector('.outcome');
  resultspage.classList += ' results'
  const resultSection = document.querySelector('.outcome')
  resultSection.scrollIntoView({behavior:"smooth"});


}




function movieinfo(imdbID) {
  localStorage.setItem('id', imdbID);
  window.location.href = `${window.location.origin}/info.html`
  console.log(imdbID)
  

 }


 function resultHTML(movie) {
    return `
   <div class='result__card'onclick="movieinfo('${movie.imdbID}')">
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


 






