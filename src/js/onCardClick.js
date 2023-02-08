import { themoviedbApi } from '../js/themoviedb-service';
import { createModalInfo } from '../js/renderModal';
import * as basicLightbox from 'basiclightbox';

// function onCardClick(event) {

//   // const id = event.target.id;
//   themoviedbApi.getMovieById(10147).then(result => {
//     const modal = basicLightbox.create(createModalInfo(result), {
//       onShow: modal => {
//         modal.element().querySelector('button[data-modal-close]').onclick =
//           modal.close;
//         document.addEventListener('keydown', closeModal);
//       },

//       onClose: modal => {
//         document.removeEventListener('keydown', closeModal);
//       },
//     });

//     modal.show();

//     function closeModal(event) {
//       if (event.code === 'Escape') {
//         modal.close();
//         return;
//       }
//     }
//   });
// }

// onCardClick();

closeModalByKhrystyna = (e, modal) => {
  if (e.code === 'Escape') {
    modal.close();
    return;
  }
};

const onCardClickByKhrystyna = async e => {
  // e.preventDefault();
  try {
    const moevie = await Promise.all([
      themoviedbApi.getMovieById(18239),
      themoviedbApi.getMovieTrailer(18239),
    ]);

    const modal = basicLightbox.create(
      createModalInfo(moevie[0], moevie[1].results[0].key),
      {
        onShow: modal => {
          modal.element().querySelector('button[data-modal-close]').onclick =
            modal.close;
          document.addEventListener(
            'keydown',
            e => closeModalByKhrystyna(e, modal),
            {
              once: true,
            }
          );
        },

        onClose: modal => {
          document.removeEventListener('keydown', e =>
            closeModalByKhrystyna(e, modal)
          );
        },
      }
    );
    modal.show();
  } catch (error) {
    console.log(error);
  }
};

onCardClickByKhrystyna();
// Поки що на модалку можна подивитись, якщо розкоментувати onCardClick();

export { onCardClick };
