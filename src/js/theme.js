const themeSwitchButton = document.getElementById('theme-switch-button');
console.log(themeSwitchButton);
const body = document.body;
const iconEl = document.querySelector('.theme-icon');

themeSwitchButton.addEventListener('click', function () {
  // body.classList.toggle('dark-theme');
  iconEl.classList.toggle('dark-theme');

  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
    return;
  } else {
    localStorage.setItem('theme', 'dark');
    body.classList.toggle('dark-theme');
    iconEl.classList.toggle('dark-theme');
  }
});
