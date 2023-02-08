import { onCardClick } from './js/onCardClick';
import { pagination } from './js/pagination';
import { refs } from './js/refs';
import { themoviedbApi } from './js/themoviedb-service';
import { renderTrendingMovies } from './js/renderTrendingMovies';
import { movieData } from './js/movieClass';

const onSubmitSearchMoviesForm = async e => {
  e.preventDefault();
  const searchQuery = e.target.searchedMovie.value.trim().toLowerCase();
  themoviedbApi.searchQuery = searchQuery;
  try {
    Promise.all([
      themoviedbApi.getGenresOfMovies(),
      themoviedbApi.searchMovies(),
    ]).then(data => {
      const [genres, movies] = data;

      movieData.genres = genres;
      movieData.movies = movies.results;

      renderMovieMarkup(movieData);
    });
    const moviesData = await themoviedbApi.searchMovies();
    console.log('searchMovies', moviesData);
  } catch (error) {
    console.log(error);
  }
};

refs.searchForm.addEventListener('submit', onSubmitSearchMoviesForm);

function initData() {
  Promise.all([
    themoviedbApi.getGenresOfMovies(),
    themoviedbApi.getTrendingMovies(),
  ])
    .then(data => {
      const [genres, movies] = data;

      movieData.genres = genres;
      movieData.movies = movies.results;

      renderMovieMarkup(movieData);
    })
    .catch(error => console.log(error).finally());
}

function renderMovieMarkup(movieData) {
  refs.movieContainer.innerHTML = renderTrendingMovies(movieData);
}

initData();

// Pagination
const page = pagination.getCurrentPage();
pagination.on('afterMove', async event => {
  const currentPage = event.page;
  try {
    const { data } = await themoviedbApi.getTrendingMovies(currentPage);
    // mark up function should be added here
  } catch (error) {
    console.log(error);
  }
});

// функция для рендера популярных фильмов
// const getTrendingMovies = async () => {
//   try {
//     const moeviesData = await themoviedbApi.getTrendingMovies();
//     console.log('TrendingMovies', moeviesData);
//     // сюда добавить функцию рендера
//     renderTrendingMovies();
//   } catch (error) {
//     console.log(error);
//   }
// };
// getTrendingMovies();
