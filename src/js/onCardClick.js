import { themoviedbApi } from '../js/themoviedb-service';
import { movieData } from './movieClass';
import { createModalInfo } from '../js/renderModal';
import * as basicLightbox from 'basiclightbox';
import { addFilmToWatched, addFilmToQueue } from './buttons';
import { findTrailer } from './findTrailer';

const closeModal = (e, modal) => {
  if (e.code === 'Escape') {
    modal.close();
    return;
  }
};

const onCardClick = async e => {
  // console.log(e.target.dataset);
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const id = e.target.dataset.id;
  const targetMovie = movieData.getMovieById(id);
  let title;

  try {
    const trailerArr = await themoviedbApi
      .getMovieTrailer(targetMovie.id)
      .catch(err => {
        console.log(err);
      });
    const trailer = findTrailer(trailerArr.results);

    const modal = basicLightbox.create(createModalInfo(targetMovie), {
      onShow: modal => {
        toggleModalOpen();
        modal.element().querySelector('button[data-modal-close]').onclick =
          modal.close;
        document.addEventListener('keydown', e => closeModal(e, modal), {
          once: true,
        });
      },

      onClose: modal => {
        toggleModalOpen();
        document.removeEventListener('keydown', e => closeModal(e, modal));
      },
    });
    modal.show();

    const trailerBtn = document.querySelector('.modal__btn-trailer');
    if (trailer) {
      trailerBtn.classList.remove('visually-hidden');
      showTrailer(trailer);
    }

    title =
      targetMovie.name ||
      targetMovie.title ||
      targetMovie.original_name ||
      targetMovie.original_title;
  } catch (error) {
    console.log(error);
  }

  // <<<<<<<<BUTTONS HANDLERS>>>>>>>>>>>>>
  const addToWatchedBtn = document.querySelector('.modal__btn--watched');
  const addToQueueBtn = document.querySelector('.modal__btn--queue');

  console.log(id);
  console.log(title);

  const onAddToWatchedBtnClick = () => {
    addFilmToWatched(id, title);
    addToWatchedBtn.removeEventListener('click', onAddToWatchedBtnClick);
  };

  const onAddToQueueBtnClick = () => {
    addFilmToQueue(id, title);
    addToQueueBtn.removeEventListener('click', onAddToQueueBtnClick);
  };

  addToWatchedBtn.addEventListener('click', onAddToWatchedBtnClick);
  addToQueueBtn.addEventListener('click', onAddToQueueBtnClick);
};

// <<<<<<<<OTHER MODAL HANDLERS>>>>>>>>>>>>>>>
function toggleModalOpen() {
  document.body.classList.toggle('modal-open');
}

function showTrailer(trailer) {
  const mediaContainer = document.querySelector('.modal__media-container');
  mediaContainer.addEventListener('click', e => {
    mediaContainer.innerHTML = `<iframe class="modal__trailer" width="420" height="315"
  	src="https://www.youtube.com/embed/${trailer}"> frameborder="0" allowfullscreen
  	</iframe>`;
  });
}

export { onCardClick };
