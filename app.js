/* Imports */
import {getMovies}
/* Get DOM Elements */
const movieContainer = document.getElementById('movie-container');
/* State */
let movieList = [];
/* Events */
window.addEventListener('load', async () => {
    const allMovies = await getMovies();

    movieList = allMovies;

    for (let movie of movieList) {
        const movieEl = renderMovieImg();

        movieContainer.append(movieEl);
    }
});
