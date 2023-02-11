// const themeSwitchButton = document.getElementById("theme-switch-button");
// const body = document.body;
// const text = document.getElementById("text");

// themeSwitchButton.addEventListener("click", function () {
//   if (body.classList.contains("dark-theme")) {
//     body.classList.remove("dark-theme");
//   } else {
//     body.classList.add("dark-theme");
//   }
// });

// const themeSwitchButton = document.getElementById("theme-switch-button");
// const body = document.body;
// const themeIcon = themeSwitchButton.querySelector(".theme-icon");

// themeSwitchButton.addEventListener("click", function () {
//   if (body.classList.contains("dark-theme")) {
//     body.classList.remove("dark-theme");
//     themeIcon.innerHTML = '<use href="./images/symbol-defs.svg#sun"></use>';
//   } else {
//     body.classList.add("dark-theme");
//     themeIcon.innerHTML = '<use href="./images/symbol-defs.svg#moon"></use>';
//   }
// });

const themeSwitchButton = document.getElementById("theme-switch-button");
const body = document.body;
const iconEl = document.querySelector('.theme-icon')

themeSwitchButton.addEventListener("click", function () {
    body.classList.toggle("dark-theme");
    iconEl.classList.toggle("dark-theme");
});