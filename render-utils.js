export function renderMovieImg(movie) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('movie-img');

    p.textContent = movie.name;

    img.src = `./assets/${movie.name}.jpg`;

    div.append(p, img);

    a.append(div);

    return a;
}
