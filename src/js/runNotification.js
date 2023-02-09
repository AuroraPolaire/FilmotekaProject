import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function runNotification(moviesData) {
  if (!moviesData.total_results) {
    Notify.failure('No movies found');
    return;
  }
  if (moviesData.total_results === 1) {
    Notify.success('We found 1 movie');
  } else {
    Notify.success(`${moviesData.total_results} movies found`);
  }
}
