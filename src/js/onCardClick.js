import { themoviedbApi } from '../js/themoviedb-service';
import { createModalInfo } from '../js/renderModal';
import * as basicLightbox from 'basiclightbox';

const closeModal = (e, modal) => {
  if (e.code === 'Escape') {
    modal.close();
    return;
  }
};

const onCardClick = async e => {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const id = e.target.dataset.id;

  try {
    const movie = await Promise.all([
      themoviedbApi.getMovieById(id),
      themoviedbApi.getMovieTrailer(id),
    ]);

    const modal = basicLightbox.create(
      createModalInfo(movie[0]),
      {
        onShow: modal => {
          toggleModalOpen();
          modal.element().querySelector('button[data-modal-close]').onclick =
            modal.close;
          document.addEventListener(
            'keydown',
            e => closeModal(e, modal),
            {
              once: true,
            }
          );
        },

        onClose: modal => {
          toggleModalOpen();
          document.removeEventListener('keydown', e =>
            closeModal(e, modal)
          );
        },
      }
    );
    modal.show();

    showTrailer(movie);

  } catch (error) {
    console.log(error);
  }
};

function toggleModalOpen () {
  document.body.classList.toggle("modal-open");
}

function showTrailer(movie) {
  if (movie[1].results.length > 0) {
      const trailerUrl = movie[1].results[0].key;
      const mediaContainer = document.querySelector(".modal__media-container");
      
      mediaContainer.addEventListener('click', e => {
      mediaContainer.innerHTML = `<iframe class="modal__trailer" width="420" height="315"
        src="https://www.youtube.com/embed/${trailerUrl}"> frameborder="0" allowfullscreen
        </iframe>`;
    })
    }
}

export { onCardClick };