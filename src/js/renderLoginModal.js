import * as svg from '../images/symbol-defs.svg';

export function createLoginMarkup() {
  const theme = localStorage.getItem('theme');
  return `
  <div class="modal-box ">
    <div class="modal ${theme === 'dark' ? 'dark-theme' : 'light'} form-modal">
      <button data-modal-close type="button" class="modal__close-button">
        <svg
            class="modal__close-icon"
            width="16"
            height="16"
            aria-label="close"
            lang="en"
          >
            <use href="${svg}#close-icon"></use>
          </svg>
      </button>
    
  <div id="login">
  <div class="headerAuth">
    <h1>Please Log in or Sign up</h1>
  </div>
  <form class="form">
    <div class="group">
      <input id="txtEmail" type="email" class="input" placeholder=" " />
      <label class="label">Email</label>
      <div class="line"></div>
    </div>
    <div class="group">
      <input id="txtPassword" type="password" class="input" placeholder=" " />
      <label class="label">Password</label>
      <div class="line"></div>
    </div>
    <div id="divLoginError" class="group">
      <div id="lblLoginErrorMessage" class="errorlabel">Error message</div>
    </div>
    <button id="btnLogin" type="button" class="buttonFire buttonBlue">
      Log in
    </button>
    <button id="btnSignup" type="button" class="buttonFire buttonBlue">
      Sign up
    </button>
  </form>
</div>
</div>
  `;
}
