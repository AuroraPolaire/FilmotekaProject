const themeSwitchButton = document.getElementById('theme-switch-button');
const body = document.body;
const iconEl = document.querySelector('.theme-icon');
const logInForm = document.querySelector('.login-form');
const appForm = document.querySelector('.app-form');

export function changeThemeOnClick() {
  if (localStorage.getItem('theme') === 'dark') {
    iconEl.classList.toggle('dark-theme');
    body.classList.toggle('dark-theme');
    localStorage.removeItem('theme');
  } else {
    iconEl.classList.toggle('dark-theme');
    localStorage.setItem('theme', 'dark');
    body.classList.toggle('dark-theme');
  }
}

export function checkTheme() {
  if (localStorage.getItem('theme') == 'dark') {
    iconEl.classList.toggle('dark-theme');
    body.classList.toggle('dark-theme');
  }
}

export function checkThemeForLogIn() {
  if (localStorage.getItem('theme') == 'dark') {
    logInForm.classList.toggle('dark-theme');
    appForm.classList.toggle('dark-theme');
  }
}
