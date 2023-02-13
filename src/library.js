import './js/slider';
import '../node_modules/@fortawesome/fontawesome-free/js/solid.min';
import '../node_modules/@fortawesome/fontawesome-free/js/brands.min';
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome.min';
import './js/sliderGlide';
import './js/teamModal';
import './js/renderTeamModal';
import { checkTheme, changeThemeOnClick, checkThemeForLogIn } from './js/theme';

const themeSwitchButton = document.getElementById('theme-switch-button');
themeSwitchButton.addEventListener('click', changeThemeOnClick);
checkTheme();
checkThemeForLogIn();

import { btnLogin, btnSignup, btnLogout } from './js/auth-ui';

import {
  loginEmailPassword,
  logout,
  createAccount,
  monitorAuthState,
  monitorAuthStateLibrary,
  onWatchedBtnClick,
  onQueueBtnClick,
  auth,
  getAuth,
  signOut,
} from './js/firebase';

btnLogin.addEventListener('click', loginEmailPassword);
btnSignup.addEventListener('click', createAccount);
btnLogout.addEventListener('click', logout);

const watchedBtn = document.querySelector('.library__watched-btn');
const queueBtn = document.querySelector('.library__queue-btn');

watchedBtn.addEventListener('click', onWatchedBtnClick);
queueBtn.addEventListener('click', onQueueBtnClick);
monitorAuthStateLibrary();

const backdrop = document.querySelector('.login-backdrop');
const loginHeaderBtn = document.querySelector('.login-modal-btn');
const closeSvgButton = document.querySelector('.modal__close-button');
const closeSvgButtonLogIn = document.querySelector('.modal__close-buttonLogIn');

loginHeaderBtn.addEventListener('click', onLoginClick);
backdrop.addEventListener('click', onBackdropClick);
closeSvgButton.addEventListener('click', closeModal);
closeSvgButtonLogIn.addEventListener('click', closeModalLogIn);

function onLoginClick(e) {
  e.preventDefault();
  backdrop.classList.remove('is-hidden');
  document.addEventListener('keydown', onClickEscape);
}

export function onClickEscape(event) {
  if (event.key === 'Escape') {
    backdrop.classList.add('is-hidden');
    // refs.addBodyClass.classList.remove('modal-open');
    document.removeEventListener('keydown', onClickEscape);
  }
}

export function closeModalLogIn() {
  backdrop.classList.add('is-hidden');
  // refs.addBodyClass.classList.remove('modal-open');
  document.removeEventListener('keydown', onClickEscape);
}

function closeModal() {
  backdrop.classList.add('is-hidden');
  // refs.addBodyClass.classList.remove('modal-open');
  document.removeEventListener('keydown', onClickEscape);
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeModal();
  }
}
