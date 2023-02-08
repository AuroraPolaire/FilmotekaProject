import Axios from 'axios';

class ThemoviedbApi {
  static API_KEY = '2b316c342fe13f9049052886494c29f1';
  static URL = 'https://api.themoviedb.org/';

  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async searchMovies() {
    const { data } = await Axios.get(
      `${ThemoviedbApi.URL}3/search/movie?api_key=${ThemoviedbApi.API_KEY}&query=${this.searchQuery}&page=${this.page}`
    );
    return data;
  }

  async getTrendingMovies() {
    const { data } = await Axios.get(
      `${ThemoviedbApi.URL}3/trending/all/day?api_key=${ThemoviedbApi.API_KEY}`
    );
    return data;
  }

  async getGenresOfMovies() {
    const url = `${ThemoviedbApi.URL}/3/genre/movie/list?api_key=${ThemoviedbApi.API_KEY}&language=en-US`;
    const response = await Axios.get(url);
    console.log(response);
    return new Map(response.data.genres.map(el => [el.id, el.name]));
  }

  async getMovieById(movie_id) {
    const { data } = await Axios.get(
      `${ThemoviedbApi.URL}3/movie/${movie_id}?api_key=${ThemoviedbApi.API_KEY}`
    );
    return data;
  }

  async getMovieTrailer(movie_id) {
    const { data } = await Axios.get(
      `${ThemoviedbApi.URL}3/movie/${movie_id}/videos?api_key=${ThemoviedbApi.API_KEY}`
    );
    return data;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

export const themoviedbApi = new ThemoviedbApi();