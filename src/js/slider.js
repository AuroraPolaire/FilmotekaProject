import { URL, API_KEY, poster_path, API_URL, POPULAR_URL } from './themoviedb-service';
import { refs } from './refs';

export function initializeSlider() {
  $('.slider').slick({
    arrows: false,
    centerMode: true,
    lazyLoad: 'progressive',
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 8,
    infinite: true,
    speed: 1000,
    adaptiveHeigt: true,
    cssEase: 'ease',
  });
}

export function resetSlider() {
  $('.slider').slick('unslick');
}