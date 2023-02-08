import { onCardClick } from "./js/onCardClick";
import { pagination } from "./js/pagination";
import { refs } from './js/refs';
import { themoviedbApi } from './js/themoviedb-service';
import { renderTrendingMovies } from './js/renderTrendingMovies';


const onSubmitSearchMoviesForm = async e => {
  e.preventDefault();
  const searchQuery = e.target.searchedMovie.value.trim().toLowerCase();
  themoviedbApi.searchQuery = searchQuery;
  try {
    const moeviesData = await themoviedbApi.searchMovies();
    console.log('searchMovies', moeviesData);
    //   console.log(await themoviedbApi.getMovieById(18239));
    // console.log(await themoviedbApi.getMovieTrailer(18239));
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
    renderTrendingMovies();
  } catch (error) {
    console.log(error);
  }
};
refs.searchForm.addEventListener('submit', onSubmitSearchMoviesForm);




// Pagination 
const page = pagination.getCurrentPage()
pagination.on('afterMove', async event => {
    const currentPage = event.page;
    try {
        const { data } = await themoviedbApi.getTrendingMovies(currentPage); 
        // mark up function should be added here
    }
    catch (error) {
        console.log(error);
    }
});
