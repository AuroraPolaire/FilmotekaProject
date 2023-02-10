import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';

export function runNotification(moviesData) {
  if (!moviesData.total_results) {
    refs.errorNotification.innerHTML =
      'Search result is not successful. Enter the correct movie name.';

    const alertCleaning = setTimeout(() => {
      refs.errorNotification.innerHTML = '';
    }, 5000);

    return;
  }
  if (moviesData.total_results === 1) {
    Notify.success('We found 1 movie', {
      position: 'center-top',
      borderRadius: '2px',
      success: {
        background: '#ffffff',
        textColor: '#000',
      },
    });
  } else {
    Notify.success(`${moviesData.total_results} movies found`, {
      position: 'center-top',
      borderRadius: '2px',
      success: {
        background: '#ffffff',
        textColor: '#000',
      },
    });
  }
}
