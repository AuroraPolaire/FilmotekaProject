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
