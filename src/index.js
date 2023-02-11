import { onCardClick } from './js/onCardClick';
import { pagination } from './js/pagination';
import { refs } from './js/refs';
import { themoviedbApi } from './js/themoviedb-service';
import { renderMovies } from './js/renderMovies';
import { movieData } from './js/movieClass';
import { runNotification } from './js/runNotification';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { runSpinner } from './js/runSpinner';
import '../node_modules/@fortawesome/fontawesome-free/js/solid.min';
import '../node_modules/@fortawesome/fontawesome-free/js/brands.min';
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome.min';
import './js/sliderGlide';
import './js/teamModal';
import './js/renderTeamModal';
import './js/theme';

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

// Pagination;

// pagination.on('afterMove', async event => {
//   const currentPage = event.page;
//   try {
//     const { data } = await themoviedbApi.getTrendingMovies(currentPage);
//     // mark up function should be added here
//   } catch (error) {
//     console.log(error);
//   }
// });

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
  getDocs,
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

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

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
      // console.log(user);
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

// Add Film To WATCHED

export const addFilmToWatched = async (filmID, filmTitle) => {
  onAuthStateChanged(auth, user => {
    if (user) {
      const docRef = doc(firestore, 'users', user.uid, 'watched', filmID);

      const addFilm = async () => {
        try {
          await setDoc(docRef, {
            title: filmTitle,
          });
          console.log(
            `Film "${filmTitle}" with id "${filmID}" has been added to the WATCHED`
          );
        } catch {
          console.log(`I got an error! ${error}`);
        }
      };

      addFilm();
    } else {
      showLoginForm();
      lblAuthState.innerHTML = `You're not logged in.`;
      console.log(`You're not logged in.`);
    }
  });
};

// Add Film To QUEUE

export const addFilmToQueue = async (filmID, filmTitle) => {
  onAuthStateChanged(auth, user => {
    if (user) {
      const docRef = doc(firestore, 'users', user.uid, 'queue', filmID);

      const addFilm = async () => {
        try {
          await setDoc(docRef, {
            title: filmTitle,
          });
          console.log(
            `Film "${filmTitle}" with id "${filmID}" has been added to the QUEUE`
          );
        } catch {
          console.log(`I got an error! ${error}`);
        }
      };

      addFilm();
    } else {
      showLoginForm();
      lblAuthState.innerHTML = `You're not logged in.`;
      console.log(`You're not logged in.`);
    }
  });
};

// const watchedListFromDb = async () => {
//   onAuthStateChanged(auth, user => {
//     if (user) {
//       console.log('Generating watched list');

//       const docRef = collection(firestore, 'users', user.uid, 'watched');

//       const getMovies = async () => {
//         try {
//           const moviesIdFromDb = await getDocs(docRef);
//           arr = [];
//           moviesIdFromDb.forEach(doc => {
//             console.log(doc.id);
//             arr.push(doc.id);
//           });

//           console.log(arr);
//           return arr;
//         } catch {
//           console.log(`I got an error! ${error}`);
//         }
//       };

//       getMovies();
//     } else {
//       showLoginForm();
//       lblAuthState.innerHTML = `You're not logged in.`;
//     }
//   });
// };

// watchedListFromDb();

// Log out
const logout = async () => {
  await signOut(auth);
};

btnLogin.addEventListener('click', loginEmailPassword);
btnSignup.addEventListener('click', createAccount);
btnLogout.addEventListener('click', logout);

monitorAuthState();
