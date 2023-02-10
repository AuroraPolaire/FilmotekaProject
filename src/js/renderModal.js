import * as url from '../images/No-Image-Placeholder.svg';
import * as svg from '../images/symbol-defs.svg';

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
  original_name
}) {
  return `
    <div class="modal">
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
                <td class="modal__info--value modal__info-item--title">${original_title ? original_title : original_name}</td>
              </tr>
              <tr class="modal__info-item">
                <td class="modal__info--key">Genre:</td>
                <td class="modal__info--value">${genre_ids}</td>
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
      </div>`;
}

export { createModalInfo };