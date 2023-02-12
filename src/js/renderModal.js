import * as url from '../images/No-Image-Placeholder.svg';
import * as svg from '../images/symbol-defs.svg';
import { movieData } from './movieClass';

function createModalInfo({
  title,
  original_title,
  overview,
  popularity,
  poster_path,
  vote_average,
  vote_count,
  genre_ids,
  name,
  original_name,
  genres,
}) {
  const theme = localStorage.getItem('theme');

  const genresString = genres
    ? genres.map(el => el.name).join(', ')
    : movieData.getMovieGenres(genre_ids);
  return `
  <div class="modal-box ">
    <div class="modal ${theme === 'dark' ? 'dark-theme' : 'light'}">
      <button data-modal-close type="button" class="modal__close-button">
        <svg
            class="modal__close-icon"
            width="16"
            height="16"
            aria-label="close"
            lang="en"
          >
            <use href="${svg}#close-icon"></use>
          </svg>
      </button>

      <div class="modal__media-container">
        <img
          class="modal__poster"
          src="${
            poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : url
          }"
          alt="${title ? title : name} movie poster"
        />
				<button class="modal__btn-trailer visually-hidden" type="button" aria-label="play movie trailer">
				<svg class="modal__btn-trailer-svg" width="68" height="48" viewBox="0 0 68 48">
        <path class='btn-trailer__path' d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z'
          fill='#212121'></path>
        <path d='M 45,24 27,14 27,34' fill='#fff'></path>
				</svg>
				</button>
      </div>

      <div class="modal__info">
          <h1>${title ? title : name}</h1>
          <table class="modal__info-short">
              <tr class="modal__info-item">
                <td class="modal__info--key">Vote / Votes:</td>
                <td class="modal__info--value">
                  <span class="modal__info-item--accent modal__rating"
                    >${vote_average}</span
                  >
                  /
                  <span class="modal__info-item--accent modal__total-rates"
                    >${vote_count}</span
                  >
                </td>
              </tr>
              <tr class="modal__info-item">
                <td class="modal__info--key">Popularity:</td>
                <td class="modal__info--value">${popularity}</td>
              </tr>
              <tr class="modal__info-item">
                <td class="modal__info--key">Original Title:</td>
                <td class="modal__info--value modal__info-item--title">${
                  original_title ? original_title : original_name
                }</td>
              </tr>
              <tr class="modal__info-item">
                <td class="modal__info--key">Genre:</td>
                <td class="modal__info--value">${genresString}</td>
              </tr>
            </table>
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
      </div>
      </div>`;
}

export { createModalInfo };
