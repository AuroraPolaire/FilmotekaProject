import './js/slider';

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

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

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
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log('Generating watched list');

      const docRef = collection(firestore, 'users', user.uid, 'watched');

      const getMovies = async () => {
        try {
          const moviesIdFromDb = await getDocs(docRef);
          moviesIdFromDb.forEach(doc => {
            console.log(doc.id);
            arr.push(Number(doc.id));
          });

          console.log(arr);
          return arr;
        } catch {
          console.log(`I got an error! ${error}`);
        }
      };

      getMovies();
    } else {
      showLoginForm();
      lblAuthState.innerHTML = `You're not logged in.`;
    }
  });
};

const queueListFromDb = async () => {
  let arr = [];
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log('Generating queue list');

      const docRef = collection(firestore, 'users', user.uid, 'queue');

      const getMovies = async () => {
        try {
          const moviesIdFromDb = await getDocs(docRef);
          moviesIdFromDb.forEach(doc => {
            console.log(doc.id);
            arr.push(doc.id);
          });

          console.log(arr);
          return arr;
        } catch {
          console.log(`I got an error! ${error}`);
        }
      };

      getMovies();
    } else {
      showLoginForm();
      lblAuthState.innerHTML = `You're not logged in.`;
    }
  });
};

const watchedBtn = document.querySelector('.library__watched-btn');
const queueBtn = document.querySelector('.library__queue-btn');

const onWatchedBtnClick = () => {
  watchedListFromDb();
};

const onQueueBtnClick = () => {
  queueListFromDb();
};

watchedBtn.addEventListener('click', onWatchedBtnClick);
queueBtn.addEventListener('click', onQueueBtnClick);
