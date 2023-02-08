import { onCardClick } from './js/onCardClick';
import { pagination } from './js/pagination';
import { refs } from './js/refs';
import { themoviedbApi } from './js/themoviedb-service';
import { renderMovies } from './js/renderMovies';
import { movieData } from './js/movieClass';

const onSubmitSearchMoviesForm = async e => {
  e.preventDefault();
  const searchQuery = e.target.searchedMovie.value.trim().toLowerCase();
  themoviedbApi.searchQuery = searchQuery;
  try {
    await Promise.all([
      themoviedbApi.getGenresOfMovies(),
      themoviedbApi.searchMovies(),
    ]).then(data => {
      const [genres, movies] = data;

      movieData.genres = genres;
      movieData.movies = movies.results;

      renderMovieMarkup(movieData);
    });
    const moviesData = await themoviedbApi.searchMovies();
    console.log('searchMovies', moviesData);
  } catch (error) {
    console.log(error);
  }
};

refs.searchForm.addEventListener('submit', onSubmitSearchMoviesForm);

function initData() {
  Promise.all([
    themoviedbApi.getGenresOfMovies(),
    themoviedbApi.getTrendingMovies(),
  ])
    .then(data => {
      const [genres, movies] = data;

      movieData.genres = genres;
      movieData.movies = movies.results;

      renderMovieMarkup(movieData);
    })
    .catch(error => console.log(error).finally());
}

function renderMovieMarkup(movieData) {
  refs.movieContainer.innerHTML = renderMovies(movieData);
}

initData();

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

// функция для рендера популярных фильмов
// const getTrendingMovies = async () => {
//   try {
//     const moeviesData = await themoviedbApi.getTrendingMovies();
//     console.log('TrendingMovies', moeviesData);
//     // сюда добавить функцию рендера
//     renderMovies();
//   } catch (error) {
//     console.log(error);
//   }
// };
// getTrendingMovies();

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
  apiKey: 'AIzaSyD1xylb_F18gKoy1gObRYrXfBcnuEgIC10',
  authDomain: 'test-2dcef.firebaseapp.com',
  projectId: 'test-2dcef',
  storageBucket: 'test-2dcef.appspot.com',
  messagingSenderId: '799698967399',
  appId: '1:799698967399:web:c0ff7b8ffa60909025adc2',
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
