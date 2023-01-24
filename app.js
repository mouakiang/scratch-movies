/* Imports */
import { getMovies } from './fetch-utils.js';
import { renderMovieImg } from './render-utils.js';
/* Get DOM Elements */
const movieContainer = document.getElementById('movie-container');
/* State */
let movieList = [];
/* Events */
window.addEventListener('load', async () => {
    const allMovies = await getMovies();

    movieList = allMovies;

    for (let movie of movieList) {
        const movieEl = renderMovieImg(movie);

        movieContainer.append(movieEl);
    }
});
