import { onCardClick } from './js/onCardClick';
import { pagination } from './js/pagination';
import { refs } from './js/refs';
import { themoviedbApi } from './js/themoviedb-service';
import { renderMovies } from './js/renderMovies';
import { movieData } from './js/movieClass';
import { runNotification } from './js/runNotification';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const onSubmitSearchMoviesForm = async e => {
  e.preventDefault();
  refs.errorNotification.innerHTML = '';
  const searchQuery = e.target.searchedMovie.value.trim().toLowerCase();
  if (!searchQuery) {
    return;
  }

  Loading.standard({
    svgColor: '#ff001b',
  });
  Loading.remove(500);

  themoviedbApi.searchQuery = searchQuery;

  try {
    await Promise.all([
      themoviedbApi.getGenresOfMovies(),
      themoviedbApi.searchMovies(),
    ]).then(data => {
      const [genres, movies] = data;
      console.log(movies);
      runNotification(movies);

      movieData.genres = genres;
      movieData.movies = movies.results;

      renderMovieMarkup(movieData);
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

// Pagination;
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

// Modal
refs.movieContainer.addEventListener('click', onCardClick);

// <<<<<<<<<< FIREBASE >>>>>>>>>>

console.log('Firebase!');

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
import {
  getFirestore,
  addDoc,
  collection,
  setDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAQNEF1EZQq4hRQq21AEqmnTA4ysock-bY',
  authDomain: 'filmoteka-77997.firebaseapp.com',
  projectId: 'filmoteka-77997',
  storageBucket: 'filmoteka-77997.appspot.com',
  messagingSenderId: '555325927364',
  appId: '1:555325927364:web:5f447ca8d4265db75c3e91',
  measurementId: 'G-LZ05WYL8RJ',
});

// <<<<<<<<<< FIREBASE AUTHENTICATION >>>>>>>>>>

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

// Create new account using email/password and link it with FireSTORE
const createAccount = async () => {
  const email = txtEmail.value;
  const password = txtPassword.value;

  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);

    const userRef = doc(firestore, 'users', newUser.user.uid);
    const dbAddUser = async () => {
      try {
        await setDoc(userRef, { email: email });
        console.log('This user has been written to the Firestore');
      } catch {
        console.log(`I got an error! ${error}`);
      }
    };

    dbAddUser();

    console.log('This user has been written to the database');
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

      const docRef = doc(firestore, 'users', user.uid, 'watched', 'Avatar');
      // const colRef = collection(docRef, 'watched');

      const addWatchedFilm = async () => {
        try {
          await setDoc(docRef, {
            name: 'Avatar',
            rating: 8.9,
            genre: 'action',
          });
          console.log('This FILM has been written to the WATCHED');
        } catch {
          console.log(`I got an error! ${error}`);
        }
      };

      addWatchedFilm();

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

// <<<<<<<<<< FIRESTORE >>>>>>>>>>

// const db = getFirestore(firebaseApp);

// try {
//   const docRef = addDoc(collection(db, 'users'), {
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815,
//   });
//   console.log('Document written with ID: ', docRef.id);
// } catch (e) {
//   console.error('Error adding document: ', e);
// }
// const firestore = getFirestore(firebaseApp);

// const watchedFilms = doc(firestore, 'films/watched');
// const addWatchedFilm = async () => {
//   const filmData = {
//     name: 'Avatar',
//     rating: 6.9,
//     genre: 'action',
//   };
//   try {
//     await setDoc(watchedFilms, filmData, { merge: true });
//     console.log('This value has been written to the database');
//   } catch {
//     console.log(`I got an error! ${error}`);
//   }
// };

// addWatchedFilm();

const firestore = getFirestore(firebaseApp);
