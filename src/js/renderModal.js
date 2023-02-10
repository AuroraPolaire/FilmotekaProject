// const YOUTUBE_URL = 'https://www.youtube.com/embed/';

{
  /* <iframe class="modal__trailer" width="420" height="315"
        src="${videoUrl}"> frameborder="0" allowfullscreen
        </iframe> */
}
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
  genres,
  name,
}) {
  // youtubeKey
  // const videoUrl = YOUTUBE_URL.concat(youtubeKey);
  const genresString = genres
    .map(el => {
      return el.name;
    })
    .join(', ');
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
            <div class="modal__info-short">
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
                <li class="modal__info-item modal__info-item--title">${original_title}</li>
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

{
  /* <ul class="modal__info--keys">
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
              </ul> */
}

// <ul class="modal__info--keys">
//   <ul class="modal__info-item">
//       <li class="modal__info-item--key">Vote / Votes:</li>
//       <li><span class="modal__info-item--accent modal__rating">${vote_average}</span> /
//           <span class="modal__info-item--accent modal__total-rates">${vote_count}</span></p>
//       </li>
//   </ul>
//   <ul class="modal__info-item">
//     <li class="modal__info-item--key">Popularity:</li>
//     <li>${popularity}</li>
//   </ul>
//   <ul class="modal__info-item">
//   <li class="modal__info-item--key">Original Title:</li>
//     <li>${original_title}</li>
//   </ul>
//   <ul class="modal__info-item">
//   <li class="modal__info-item--key">Genre:</li>
//     <li>${genresString}</li>
//   </ul>
// </ul>
