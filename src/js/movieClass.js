class MovieData {
  #movies = [];
  #genres = null;

  getMovieGenresPreview(genreIdList) {
    const genresArray = genreIdList.map(id => this.#genres.get(id));
    console.log(this.#genres);
    if (genresArray.length <= 1) {
      console.log(genresArray);
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

  get genres() {
    return this.#movies;
  }

  set genres(newGenres) {
    this.#genres = newGenres;
  }
}

export const movieData = new MovieData();
