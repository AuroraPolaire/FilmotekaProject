import { onCardClick } from './js/onCardClick';
import { pagination } from './js/pagination';
import { refs } from './js/refs';
import { themoviedbApi } from './js/themoviedb-service';
import { renderMovies } from './js/renderMovies';
import { movieData } from './js/movieClass';
import { runNotification } from './js/runNotification';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { runSpinner } from './js/runSpinner';
import { addFilmToWatched, addFilmToQueue } from './js/buttons';
import '../node_modules/@fortawesome/fontawesome-free/js/solid.min';
import '../node_modules/@fortawesome/fontawesome-free/js/brands.min';
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome.min';
import './js/sliderGlide';
import './js/teamModal';
import './js/renderTeamModal';
import { checkTheme, changeThemeOnClick } from './js/theme';
import { onloginModalBtnClick } from './js/onLoginBtnClick';
import { btnLogin, btnSignup, btnLogout } from './js/auth-ui';
import {
  loginEmailPassword,
  logout,
  createAccount,
  monitorAuthState,
} from './js/firebase';

checkTheme();
const themeSwitchButton = document.getElementById('theme-switch-button');
themeSwitchButton.addEventListener('click', changeThemeOnClick);

const page = pagination.getCurrentPage();

const renderTrendingMovies = () => {
  runSpinner();
  try {
    Promise.all([
      themoviedbApi.getGenresOfMovies(),
      themoviedbApi.getTrendingMovies(page),
    ]).then(data => {
      const [genres, movies] = data;
      pagination.reset(movies.total_results);
      // console.log(movies);

      movieData.genres = genres;
      movieData.movies = movies.results;
      refs.paginationBlock.classList.remove('is-hidden');
      // console.log(movies);
      renderMovieMarkup(movieData);
    });
  } catch (error) {
    console.log(error);
  }
};

pagination.on('afterMove', loadMoreTrendingPhotos);

function renderMovieMarkup(movieData) {
  refs.movieContainer.innerHTML = renderMovies(movieData);
}

renderTrendingMovies();

async function loadMoreTrendingPhotos(event) {
  const currentPage = event.page;
  runSpinner();
  window.scrollTo({
    top: 100,
    left: 100,
    behavior: 'smooth',
  });

  try {
    await themoviedbApi.getTrendingMovies(currentPage).then(data => {
      // console.log(data.results);

      movieData.movies = data.results;

      renderMovieMarkup(movieData);
    });
  } catch (error) {
    refs.paginationBlock.classList.add('is-hidden');
    console.log(error);
  }
}

const onSubmitSearchMoviesForm = async e => {
  e.preventDefault();
  pagination.off('afterMove', loadMoreTrendingPhotos);
  pagination.off('afterMove', loadMoreSearchPhotos);
  pagination.on('afterMove', loadMoreSearchPhotos);

  refs.paginationBlock.classList.add('is-hidden');
  refs.movieContainer.innerHTML = '';

  refs.errorNotification.innerHTML = '';

  const searchQuery = e.target.searchedMovie.value.trim().toLowerCase();
  if (!searchQuery) {
    Notify.failure('Please enter query');
    return;
  }
  runSpinner();

  themoviedbApi.searchQuery = searchQuery;
  refs.searchForm.reset();

  try {
    await themoviedbApi.searchMovies(page).then(data => {
      // console.log(data.results);
      runNotification(data);
      pagination.reset(data.total_results);
      movieData.movies = data.results;

      renderMovieMarkup(movieData);
      refs.paginationBlock.classList.remove('is-hidden');
    });
  } catch (error) {
    console.log(error);
  }
};

async function loadMoreSearchPhotos(event) {
  const currentPage = event.page;
  runSpinner();
  window.scrollTo({
    top: 100,
    left: 100,
    behavior: 'smooth',
  });

  try {
    await themoviedbApi.searchMovies(currentPage).then(data => {
      // console.log(data.results);

      movieData.movies = data.results;

      renderMovieMarkup(movieData);
    });
  } catch (error) {
    refs.paginationBlock.classList.add('is-hidden');
    console.log(error);
  }
}

refs.searchForm.addEventListener('submit', onSubmitSearchMoviesForm);

refs.movieContainer.addEventListener('click', onCardClick);

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

btnLogin.addEventListener('click', loginEmailPassword);
btnSignup.addEventListener('click', createAccount);
btnLogout.addEventListener('click', logout);

monitorAuthState();
// refs.loginModalBtn.addEventListener('click', onloginModalBtnClick);
