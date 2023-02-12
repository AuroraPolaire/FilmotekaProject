import * as basicLightbox from 'basiclightbox';
import { createLoginMarkup } from './renderLoginModal';
import { closeModal, toggleModalOpen } from './onCardClick';
import * as basicLightbox from 'basiclightbox';

const onloginModalBtnClick = async e => {
  e.preventDefault();
  const modal = basicLightbox.create(createLoginMarkup(), {
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
};

export { onloginModalBtnClick };
