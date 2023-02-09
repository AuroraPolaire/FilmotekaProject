import { onCardClick } from './js/onCardClick';
import { pagination } from './js/pagination';
import { refs } from './js/refs';
import { themoviedbApi } from './js/themoviedb-service';
import './js/slider';
import { renderMovies } from './js/renderMovies';
import { movieData } from './js/movieClass';
import { runNotification } from './js/runNotification';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const onSubmitSearchMoviesForm = async e => {
  e.preventDefault();
  Loading.standard({
    svgColor: '#ff001b',
  });
  const searchQuery = e.target.searchedMovie.value.trim().toLowerCase();
  themoviedbApi.searchQuery = searchQuery;
  try {
    await Promise.all([
      themoviedbApi.getGenresOfMovies(),
      themoviedbApi.searchMovies(),
    ]).then(data => {
      const [genres, movies] = data;

      runNotification(movies);

      movieData.genres = genres;
      movieData.movies = movies.results;

      renderMovieMarkup(movieData);
      Loading.remove(500);
    });
    const moviesData = await themoviedbApi.searchMovies();
  } catch (error) {
    console.log(error);
  }
};

refs.searchForm.addEventListener('submit', onSubmitSearchMoviesForm);

const renderTrendingMovies = () => {
  try {
    Promise.all([
      themoviedbApi.getGenresOfMovies(),
      themoviedbApi.getTrendingMovies(),
    ]).then(data => {
      const [genres, movies] = data;

      movieData.genres = genres;
      movieData.movies = movies.results;

      renderMovieMarkup(movieData);
    });
  } catch (error) {
    console.log(error);
  }
};

function renderMovieMarkup(movieData) {
  refs.movieContainer.innerHTML = renderMovies(movieData);
}

renderTrendingMovies();

// Pagination
const page = pagination.getCurrentPage();
pagination.on('afterMove', async event => {
  const currentPage = event.page;
  try {
    const { data } = await themoviedbApi.getTrendingMovies(currentPage);
    // mark up function should be added here
  } catch (error) {
    console.log(error);
  }
});

// <<<<<<<<<< FIREBASE AUTHENTICATION >>>>>>>>>>

import {
  hideLoginError,
  showLoginState,
  showLoginForm,
  showApp,
  showLoginError,
  btnLogin,
  btnSignup,
  btnLogout,
} from './js/auth-ui';

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAQNEF1EZQq4hRQq21AEqmnTA4ysock-bY',
  authDomain: 'filmoteka-77997.firebaseapp.com',
  projectId: 'filmoteka-77997',
  storageBucket: 'filmoteka-77997.appspot.com',
  messagingSenderId: '555325927364',
  appId: '1:555325927364:web:5f447ca8d4265db75c3e91',
  measurementId: 'G-LZ05WYL8RJ',
});

// Login using email/password
const loginEmailPassword = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  try {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  } catch (error) {
    console.log(`There was an error: ${error}`);
    showLoginError(error);
  }
};

// Create new account using email/password
const createAccount = async () => {
  const email = txtEmail.value;
  const password = txtPassword.value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(`There was an error: ${error}`);
    showLoginError(error);
  }
};

// Monitor auth state
const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      showApp();
      showLoginState(user);

      hideLoginError();
      // hideLinkError();
    } else {
      showLoginForm();
      lblAuthState.innerHTML = `You're not logged in.`;
    }
  });
};

// Log out
const logout = async () => {
  await signOut(auth);
};

btnLogin.addEventListener('click', loginEmailPassword);
btnSignup.addEventListener('click', createAccount);
btnLogout.addEventListener('click', logout);

const auth = getAuth(firebaseApp);

monitorAuthState();
