import { openModal } from './renderTeamModal';

const refs = {
  footerModal: document.querySelector('.team-modal'),
  openModalLink: document.querySelector('[data-footer-open]'),
  modal: document.querySelector('[data-modal-footer]'),
  backdrop: document.querySelector('.js-backdrop'),
  addBodyClass: document.querySelector('body'),
};

refs.openModalLink.addEventListener('click', openModal);
refs.backdrop.addEventListener('click', onBackdropClick);

export function onClickEscape(event) {
  if (event.key === 'Escape') {
    refs.modal.classList.add('is-hidden');
    refs.addBodyClass.classList.remove('modal-open');
    document.removeEventListener('keydown', onClickEscape);
  }
}

export function closeModal() {
  refs.modal.classList.add('is-hidden');
  refs.addBodyClass.classList.remove('modal-open');
  document.removeEventListener('keydown', onClickEscape);
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeModal();
  }
}
