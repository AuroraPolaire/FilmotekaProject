import { themoviedbApi } from '../components/themoviedb-service';
import { createModalInfo } from '../js/renderModal';
import * as basicLightbox from 'basiclightbox';

function onCardClick(event) {
  // const id = event.target.id;
  themoviedbApi.getMovieById(10147).then(result => {
    const modal = basicLightbox.create(createModalInfo(result), {
      onShow: modal => {
        modal.element().querySelector('button[data-modal-close]').onclick =
          modal.close;
        document.addEventListener('keydown', closeModal);
      },

      onClose: modal => {
        document.removeEventListener('keydown', closeModal);
      },
    });

    modal.show();

    function closeModal(event) {
      if (event.code === 'Escape') {
        modal.close();
        return;
      }
    }
  });
}

onCardClick();

// Поки що на модалку можна подивитись, якщо розкоментувати onCardClick();

export { onCardClick };
