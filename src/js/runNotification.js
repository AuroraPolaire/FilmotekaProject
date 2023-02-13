import { refs } from './refs';
import { themoviedbApi } from '../js/themoviedb-service.js';

export function runNotification(moviesData) {
  const searchQuery = themoviedbApi.searchQuery.toUpperCase();

  if (!moviesData.total_results) {
    refs.paginationBlock.classList.add('is-hidden');
    refs.errorNotification.innerHTML =
      'Search result is not successful. Enter the correct movie name.';

    const alertCleaning = setTimeout(() => {
      refs.errorNotification.innerHTML = '';
    }, 5000);

    return;
  }
  if (moviesData.total_results === 1) {
    refs.submitNotification.innerHTML = `${moviesData.total_results} movie found on your request ${searchQuery}`;

    const alertCleaning = setTimeout(() => {
      refs.submitNotification.innerHTML = '';
    }, 6000);
  } else {
    refs.submitNotification.innerHTML = `${moviesData.total_results} movies found on your request ${searchQuery}`;

    const alertCleaning = setTimeout(() => {
      refs.submitNotification.innerHTML = '';
    }, 6000);
  }
}
