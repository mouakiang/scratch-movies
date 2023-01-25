export function renderMovieImg(movie) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('movie-img');

    p.textContent = movie.name;

    img.src = `./assets/${movie.name}.jpg`;
    a.href = `./detail/?id=${movie.id}`;

    div.append(p, img);

    a.append(div);

    return a;
}

export function renderMovieDetails(movie) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const descriptionEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const categoryEl = document.createElement('p');
    const directorEl = document.createElement('p');
    const releaseDateEl = document.createElement('p');
    const ratingEl = document.createElement('p');

    img.src = `../assets/${movie.name}.jpg`;
    descriptionEl.textContent = movie.description;
    nameEl.textContent = movie.name;
    categoryEl.textContent = movie.category;
    directorEl.textContent = movie.director;
    releaseDateEl.textContent = movie.release;
    ratingEl.textContent = movie.rating;

    div.classList.add('movie-detail');
    img.classList.add('img');
    descriptionEl.classList.add('description');
    nameEl.classList.add('name');
    categoryEl.classList.add('category');
    directorEl.classList.add('director');
    releaseDateEl.classList.add('release-date');
    ratingEl.classList.add('rating');

    div.append(img, descriptionEl, nameEl, categoryEl, directorEl, releaseDateEl, ratingEl);

    return div;
}
