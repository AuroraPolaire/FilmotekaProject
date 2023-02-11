const themeSwitchButton = document.getElementById("theme-switch-button");
const body = document.body;
const iconEl = document.querySelector('.theme-icon');
const modalElement = document.querySelector('.modal-open');

themeSwitchButton.addEventListener("click", function () {
    body.classList.toggle("dark-theme");
    iconEl.classList.toggle("dark-theme");
    modalElement.classList.toggle('dark-theme');
});