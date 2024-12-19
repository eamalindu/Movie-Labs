window.addEventListener('load',()=>{
    info.classList.add('d-none')
})

const getMovie = async () => {
    
    const movieName = txtMovieName.value;
    const response = await fetch ("http://www.omdbapi.com/?t="+movieName+"&apikey=64d6b64f");

    if(response.ok){
        movie = await response.json();
        console.log(movie);
        poster.src = movie.Poster;
        title.innerText = movie.Title;
        year.innerText = movie.Year;
        plot.innerText = movie.Plot
        imdb.innerText = movie.imdbRating
        genre.innerText = movie.Genre
        rated.innerText = movie.Rated

        info.classList.remove('d-none')
    }
}