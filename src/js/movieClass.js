class MovieData {
  #movies = [];
  #genres = new Map();

  formatGenresString(data) {
    if (data.length <= 1) {
      return data.toString();
    }

    if (data.length === 2) {
      return data.join(', ');
    }
    return [...data.slice(0, 2), 'other'].join(', ');
  }

  getMovieGenresPreview(genreIdList) {
    const genresArray = genreIdList.map(id => this.#genres.get(id));
    return this.formatGenresString(genresArray);
  }

  createGenreString(genres) {
    const genresArray = genres.map(el => el.name);
    return this.formatGenresString(genresArray);
  }

  getMovieGenres(genreIdList) {
    return genreIdList.map(id => this.#genres.get(id)).join(', ');
  }

  getMovieById(id) {
    return this.movies.find(el => el.id === parseInt(id));
  }

  get movies() {
    return this.#movies;
  }

  set movies(moviesData) {
    this.#movies = moviesData;
  }

  get genres() {
    return this.#movies;
  }

  set genres(newGenres) {
    this.#genres = newGenres;
  }
}

export const movieData = new MovieData();
