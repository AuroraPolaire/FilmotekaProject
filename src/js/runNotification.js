import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function runNotification(moviesData) {
  if (!moviesData.total_results) {
    Notify.failure(
      'Search result is not successful. Enter the correct movie name '
    );
    return;
  }
  if (moviesData.total_results === 1) {
    Notify.success('We found 1 movie');
  } else {
    Notify.success(`${moviesData.total_results} movies found`);
  }
}
