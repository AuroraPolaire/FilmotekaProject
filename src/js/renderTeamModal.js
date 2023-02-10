import { students } from './students';
import Glide from '@glidejs/glide';
import { glideFooter, options } from './sliderGlide';
import { onClickEscape, closeModal } from './teamModal';

const refs = {
  teamModal: document.querySelector('.team-modal'),
  openModalLink: document.querySelector('[data-footer-open]'),
  modal: document.querySelector('[data-modal-footer]'),
  backdrop: document.querySelector('.js-backdrop'),
  addBodyClass: document.querySelector('body'),
};

export function openModal(e) {
  e.preventDefault();

  refs.modal.classList.remove('is-hidden');
  refs.addBodyClass.classList.add('modal-open');
  document.addEventListener('keydown', onClickEscape);
  refs.teamModal.innerHTML = '';

  const markup = `
  <div class="glide_footer">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides--footer"></ul>
      </div>
      <div class="glide__arrows" data-glide-el="controls">
            <button style="padding: 10px;
      box-shadow: none;
      border: none; left: 10px" class="glide__arrow glide__arrow--left arrow__footer" data-glide-dir="<">&#5130;</button>
            <button style="padding: 10px;
      box-shadow: none;
      border: none; right: 10px" class="glide__arrow glide__arrow--right arrow__footer" data-glide-dir=">">&#5125;</button>
        </div>
        <button class="footermodalbtn-close" data-footer-close>	
&#9587;</button>
    </div>
    `;

  refs.teamModal.insertAdjacentHTML('beforeend', markup);

  const slide = document.querySelector('.glide__slides--footer');
  const closeModalBtn = document.querySelector('[data-footer-close]');

  const studentTmlMarkup = students
    .map(({ img, name, role, gitHabLink, FB_Link, LN_Link, description }) => {
      return `<li class='glide__slide--elem footer-modal__card'>
    <div class='border__outside'>
      <div class='border__inside'>
        <img class='student-foto' src="${img}" alt="${name}" />
      </div>
    </div>
    <div class='student__card'>
      <h3 class='student__name'>${name}</h3>
      <p class='student__role'>${role}</p>
      <ul class='footer__social'>
        <li class='footer__sociallink'>
          <a class='student__link' href="${gitHabLink}" target='_blank'>
            <i class='fa-brands fa-github fa-xl'></i>
          </a>
        </li>
        <li class='footer__sociallink'>
          <a class='student__linc' href="${FB_Link}" target='_blank'>
            <i class='fa-brands fa-facebook fa-xl'></i>
          </a>
        </li>
        <li class='footer__sociallink'>
          <a class='student__link' href="${LN_Link}" target='_blank'>
            <i class='fa-brands fa-linkedin fa-xl'></i>
          </a>
        </li>
      </ul>

      <p class='student__about'>
        ${description}
      </p>
    </div>
  </li>`;
    })
    .join('');

  slide.insertAdjacentHTML('beforeend', studentTmlMarkup);

  glideFooter.destroy();
  let glidFooter = new Glide('.glide_footer', options);
  glidFooter.mount();

  closeModalBtn.addEventListener('click', closeModal);
}
