class MovieData {
  #movies = [];
  #genres = null;

  getMovieGenresPreview(genreIdList) {
    const genresArray = genreIdList.map(id => this.#genres.get(id));
    if (genresArray.length === 0) {
      return 'Unknown genre';
    }

    if (genresArray.length <= 1) {
      return genresArray;
    }

    if (genresArray.length === 2) {
      return genresArray.join(', ');
    }
    return [...genresArray.slice(0, 2), 'other'].join(', ');
  }

  // getMovieGenres(genreIdList) {
  //   return genreIdList.map(id => this.#genres.get(id)).join(', ');
  // }

  // getMovieById(id) {
  //   return this.movies.find(el => el.id === parseInt(id));
  // }

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
