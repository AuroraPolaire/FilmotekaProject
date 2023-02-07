import { refs } from './components/refs';
import { themoviedbApi } from './components/themoviedb-service';

const onSubmitSearchMoviesForm = async e => {
  e.preventDefault();
  const searchQuery = e.target.searchedMovie.value.trim().toLowerCase();
  themoviedbApi.searchQuery = searchQuery;
  try {
    const moeviesData = await themoviedbApi.searchMovies();
    console.log('searchMovies', moeviesData);
  } catch (error) {
    console.log(error);
  }
};

// функция для рендера популярных фильмов
const getTrendingMovies = async () => {
  try {
    const moeviesData = await themoviedbApi.getTrendingMovies();
    console.log('TrendingMovies', moeviesData);
    // сюда добавить функцию рендера
  } catch (error) {
    console.log(error);
  }
};
refs.searchForm.addEventListener('submit', onSubmitSearchMoviesForm);
