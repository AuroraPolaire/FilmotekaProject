import './js/slider';

import '../node_modules/@fortawesome/fontawesome-free/js/solid.min';
import '../node_modules/@fortawesome/fontawesome-free/js/brands.min';
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome.min';
import './js/sliderGlide';
import './js/teamModal';
import './js/renderTeamModal';

// <<<<<<<<<< FIREBASE >>>>>>>>>>

console.log('Firebase!');

// console.log(movieContainer);

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

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

// ------------------------------------------------------------
import { themoviedbApi } from './js/themoviedb-service';
import { renderMovies } from './js/renderMovies';
import { movieData } from './js/movieClass';

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const watchedBtn = document.querySelector('.library__watched-btn');
const queueBtn = document.querySelector('.library__queue-btn');
const libraryList = document.querySelector('.trending-movies__list');

async function fetchMovies(ids) {
  const arrayOfPromises = ids.map(async id => {
    const response = await themoviedbApi.getMovieById(id);
    return response;
  });

  const movies = await Promise.all(arrayOfPromises);
  return movies;
}

function renderUserListItems(movies) {
  console.log(movies);
  const markup = movies
    .map(
      ({
        title,
        poster_path,
        release_date,
        genre_ids,
        gender,
        name,
        first_air_date,
        vote_average,
        popularity,
        id,
      }) => {
        // const genreCode = `
        //    <div class="movie-card__genre genre card-info">
        //     ${movieData.getMovieGenresPreview(genre_ids ? genre_ids : [gender])}
        //   </div>`;
        const noGenreCode = ``;
        const ratingPresent = `
        <div class="movie-card__rating-wrp">
        <div class="movie-card__rating">${
          vote_average ? vote_average.toFixed(1) : popularity.toFixed(1)
        }</div>
        </div>
        `;
        const ratingAbsent = ``;
        return `
	<li class="trending-movie__card">
		<img
			class="trending-movie__img"
			src="${poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : url}"
			alt="${title ? title : name}"
			loading="lazy"
      data-id="${id}"
		/>
		<div class="wrapper">
			<p class="movie-card__title">
				${title ? title.toUpperCase() : name.toUpperCase()} </p>
				<div class="movie-card__wrp">
				<div class="movie-card__genre-wrp">
				${genre_ids ? genreCode : noGenreCode}
				</div>
				<div class="movie-card__year card-info">${
          release_date
            ? parseFloat(release_date) || ''
            : parseFloat(first_air_date) || ''
        } </div>
				<div class="rating-wrapper">
				${vote_average > 0 ? ratingPresent : ratingAbsent}</div>
				</div>
		</div>
	</li>`;
      }
    )
    .join('');
  libraryList.innerHTML = markup;
}

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

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
      //   console.log(user);
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

monitorAuthState();

const watchedListFromDb = async () => {
  let arr = [];

  const user = auth.currentUser;
  if (user !== null) {
    // console.log(user.email);

    console.log('Generating watched list');

    const docRef = collection(firestore, 'users', user.uid, 'watched');

    const getMovies = async () => {
      try {
        const moviesIdFromDb = await getDocs(docRef);
        moviesIdFromDb.forEach(doc => {
          // console.log(doc.id);
          arr.push(doc.id);
        });
        return arr;
      } catch {
        console.log(`I got an error! ${error}`);
      }
    };
    return getMovies();
  } else {
    console.log(`You're not logged in.`);
  }
};

const queueListFromDb = async () => {
  let arr = [];

  const user = auth.currentUser;
  if (user !== null) {
    // console.log(user.email);

    console.log('Generating queue list');

    const docRef = collection(firestore, 'users', user.uid, 'queue');

    const getMovies = async () => {
      try {
        const moviesIdFromDb = await getDocs(docRef);
        moviesIdFromDb.forEach(doc => {
          // console.log(doc.id);
          arr.push(doc.id);
        });
        return arr;
      } catch {
        console.log(`I got an error! ${error}`);
      }
    };
    return getMovies();
  } else {
    console.log(`You're not logged in.`);
  }
};

const onWatchedBtnClick = async () => {
  const ids = await watchedListFromDb();
  try {
    const movies = await fetchMovies(ids);
    renderUserListItems(movies);
  } catch (error) {
    console.log(error.message);
  }
};

const onQueueBtnClick = async () => {
  const ids = await queueListFromDb();
  // console.log(ids);
  try {
    const movies = await fetchMovies(ids);
    renderUserListItems(movies);
  } catch (error) {
    console.log(error.message);
  }
};

watchedBtn.addEventListener('click', onWatchedBtnClick);
queueBtn.addEventListener('click', onQueueBtnClick);
