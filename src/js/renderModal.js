const YOUTUBE_URL = 'https://www.youtube.com/embed/';

// Поки що винесла картинку, поки не вирішили як відображати
`<img
  class="modal__poster"
  src="https://image.tmdb.org/t/p/w500${poster_path}"
  alt="${title} movie poster"
/>;`;

function createModalInfo(
  {
    title,
    original_title,
    overview,
    popularity,
    poster_path,
    vote_average,
    vote_count,
    genres,
  },
  youtubeKey
) {
  const videoUrl = YOUTUBE_URL.concat(youtubeKey);
  console.log(videoUrl);
  const genresString = genres
    .map(el => {
      return el.name;
    })
    .join(', ');
  return `
    <div class="modal">
    
      <button data-modal-close type="button" class="modal__close-button">
        X
      </button>
          <iframe width="420" height="315"
src="${videoUrl}"> frameborder="0" allowfullscreen
</iframe>
      
      <div class="modal__info">
          <h1>${title}</h1>
          <div class="modal__info-container">
            <ul class="modal__info--keys">
              <li class="modal__info-item">Vote / Votes:</li>
              <li class="modal__info-item">Popularity:</li>
              <li class="modal__info-item">Original Title:</li>
              <li class="modal__info-item">Genre:</li>
            </ul>
            <ul class="modal__info--values">
              <li class="modal__info-item">
                <span class="modal__info-item--accent modal__rating">${vote_average}</span> /
                <span class="modal__info-item--accent modal__total-rates">${vote_count}</span>
              </li>
              <li class="modal__info-item">${popularity}</li>
              <li class="modal__info-item">${original_title}</li>
              <li class="modal__info-item">${genresString}</li>
            </ul>
          </div>
          <div class="modal__description">
            <h3>ABOUT</h3>
            <p>
              ${overview}
            </p>
          </div>
          <div class="modal__buttons">
            <button type="button" modal-button class="modal__btn--watched">
              ADD TO WATCHED
            </button>
            <button type="button" modal-button class="modal__btn--queue">
              ADD TO QUEUE
            </button>
          </div>
        </div>
      </div>`;
}

export { createModalInfo };
