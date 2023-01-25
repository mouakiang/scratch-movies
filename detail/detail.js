import { getMovie } from '../fetch-utils.js';
import { renderMovieDetails } from '../render-utils.js';

const movieDetailsList = document.getElementById('movie-details-list');

let movieData = [];

window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);

    const id = data.get('id');

    const response = await getMovie(id);

    movieData = response;

    const movieRender = renderMovieDetails(movieData);

    movieDetailsList.append(movieRender);
});
