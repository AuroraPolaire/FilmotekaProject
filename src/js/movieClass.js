class MovieData {
  #movies = [];
  #genres = null;

  getMovieGenresPreview(genreIdList) {
    const genresArray = genreIdList.map(id => this.genres.get(id));
    if (genresArray.length <= 1) {
      return genresArray.toString;
    }

    if (genresArray.length === 2) {
      return genresArray.join(', ');
    }
    return [...genresArray.slice(0, 2), 'other'].join(', ');
  }

  get movies() {
    return this.#movies;
  }

  set movies(moviesData) {
    this.#movies = moviesData;
  }
}

export const movieData = new MovieData();
