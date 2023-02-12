import {
  hideLoginError,
  showLoginState,
  showLoginForm,
  showApp,
  showLoginError,
} from './auth-ui';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
import { themoviedbApi } from './themoviedb-service';
import { renderMovies } from './renderMovies';
import { movieData } from './movieClass';
import { onCardClick } from './onCardClick';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAQNEF1EZQq4hRQq21AEqmnTA4ysock-bY',
  authDomain: 'filmoteka-77997.firebaseapp.com',
  projectId: 'filmoteka-77997',
  storageBucket: 'filmoteka-77997.appspot.com',
  messagingSenderId: '555325927364',
  appId: '1:555325927364:web:5f447ca8d4265db75c3e91',
  measurementId: 'G-LZ05WYL8RJ',
});

export const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export const loginEmailPassword = async () => {
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
export const createAccount = async () => {
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

const loginHeaderBtn = document.querySelector('.login-modal-btn');

// / Monitor auth state
export const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      // console.log(user);
      loginHeaderBtn.textContent = 'Log out';

      showApp();
      showLoginState(user);

      hideLoginError();
      // hideLinkError();
    } else {
      loginHeaderBtn.textContent = 'Log in';
      showLoginForm();

      lblAuthState.innerHTML = `You're not logged in.`;
    }
  });
};

export const logout = async () => {
  await signOut(auth);
};

const libraryList = document.querySelector('.trending-movies__list');

async function fetchMovies(ids) {
  const arrayOfPromises = ids.map(async id => {
    return await themoviedbApi.getMovieById(id);
  });

  const movies = await Promise.all(arrayOfPromises);
  return movies;
}

const watchedListFromDb = async () => {
  let arr = [];

  const user = auth.currentUser;
  if (user !== null) {
    console.log('Generating watched list');

    const docRef = collection(firestore, 'users', user.uid, 'watched');

    const getMovies = async () => {
      try {
        const moviesIdFromDb = await getDocs(docRef);
        moviesIdFromDb.forEach(doc => {
          arr.push(doc.id);
        });
        return arr;
      } catch {
        console.log(`I got an error! ${error}`);
      }
    };
    return getMovies();
  } else {
    Notify.failure(`You're not logged in.`);
  }
};

const queueListFromDb = async () => {
  const user = auth.currentUser;
  if (!user) {
    Notify.failure(`You're not logged in.`);
    return;
  }

  const docRef = collection(firestore, 'users', user.uid, 'queue');
  try {
    const arr = [];
    const moviesIdFromDb = await getDocs(docRef);
    moviesIdFromDb.forEach(doc => {
      arr.push(doc.id);
    });
    return arr;
  } catch {
    console.error(`I got an error! ${error}`);
  }
};

export function onWatchedBtnClick() {
  watchedListFromDb()
    .then(ids => fetchMovies(ids))
    .then(movies => {
      console.log('!!!!movies!!!!', movies);
      movieData.movies = movies;
      libraryList.innerHTML = renderMovies({ movies });
      libraryList.addEventListener('click', onCardClick);
    })
    .catch(error => console.error(error.message));
}

export function onQueueBtnClick() {
  queueListFromDb()
    .then(ids => fetchMovies(ids))
    .then(movies => {
      console.log('!!!!movies!!!!', movies);
      movieData.movies = movies;
      libraryList.innerHTML = renderMovies({ movies });
      libraryList.addEventListener('click', onCardClick);
    })
    .catch(error => console.error(error.message));
}
