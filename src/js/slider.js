import {
  URL,
  IMG_URL,
  API_KEY,
  poster_path,
  movie_id,
  genre_ids,
  name,
} from './themoviedb-service';
import { refs } from './refs';

renderTrendingFilms();

function initializeSlider() {
  $('.slider').slick({
    arrows: false,
    centerMode: true,
    lazyLoad: 'progressive',
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 6,
    infinite: true,
    speed: 1000,
    adaptiveHeigt: true,
    cssEase: 'ease',
  });
}

function renderTrendingFilms() {
  const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=2b316c342fe13f9049052886494c29f1`;
  return fetch(trendingUrl)
    .then(response => response.json())
    .then(({ results }) => {
      return results;
    })
    .then(renderSliderFilms)
    .catch(error => console.log(error));
}

function filmCardSlider(films) {
  return films
    .map(({ original_title, poster_path, vote_average, movie_id, name }) => {
      return `<div class="slider__item"><img class="slider-image" src=${IMG_URL}${poster_path} alt="${original_title}${name}" data-id="${movie_id}" onerror="this.onerror=null;this.src="https://i.postimg.cc/6pzyh7Wc/pngwing-com.png";" /></div>`;
    })
    .join('');
}

function renderSliderFilms(articles) {
  refs.slickSlider.innerHTML = filmCardSlider(articles);
  initializeSlider();
}
