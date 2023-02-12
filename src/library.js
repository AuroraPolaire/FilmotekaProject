import './js/slider';
import '../node_modules/@fortawesome/fontawesome-free/js/solid.min';
import '../node_modules/@fortawesome/fontawesome-free/js/brands.min';
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome.min';
import './js/sliderGlide';
import './js/teamModal';
import './js/renderTeamModal';
import { checkTheme, changeThemeOnClick } from './js/theme';

const themeSwitchButton = document.getElementById('theme-switch-button');
themeSwitchButton.addEventListener('click', changeThemeOnClick);

import { btnLogin, btnSignup, btnLogout } from './js/auth-ui';

import {
  loginEmailPassword,
  logout,
  createAccount,
  monitorAuthState,
  onWatchedBtnClick,
  onQueueBtnClick,
  auth,
  signOut,
} from './js/firebase';

btnLogin.addEventListener('click', loginEmailPassword);
btnSignup.addEventListener('click', createAccount);
btnLogout.addEventListener('click', logout);

const watchedBtn = document.querySelector('.library__watched-btn');
const queueBtn = document.querySelector('.library__queue-btn');

watchedBtn.addEventListener('click', onWatchedBtnClick);
queueBtn.addEventListener('click', onQueueBtnClick);

monitorAuthState().then(() => {
  setTimeout(() => {
    // loginHeaderBtn.textContent = 'Log out';
    onWatchedBtnClick();
  }, 1000);
});

const backdrop = document.querySelector('.login-backdrop');
const loginHeaderBtn = document.querySelector('.login-modal-btn');

loginHeaderBtn.addEventListener('click', onLoginClick);
backdrop.addEventListener('click', onBackdropClick);

function onLoginClick(e) {
  e.preventDefault();
  backdrop.classList.remove('is-hidden');
  document.addEventListener('keydown', onClickEscape);
}

function onClickEscape(event) {
  if (event.key === 'Escape') {
    backdrop.classList.add('is-hidden');
    // refs.addBodyClass.classList.remove('modal-open');
    document.removeEventListener('keydown', onClickEscape);
  }
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

checkTheme();
