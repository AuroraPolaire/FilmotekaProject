// import { movieData } from './movieClass';

export function renderMovies(data) {
  return data.movies
    .map(
      ({
        title,
        poster_path,
        release_date,
        genre_ids,
        name,
        first_air_date,
      }) => {
        console.log();
        if (!title) {
          return `
	<li class="trending-movie__card">
		<img
			class="trending-movie__img"
			src="https://image.tmdb.org/t/p/w500${poster_path}"
			alt="${name}"
			loading="lazy"
		/>
		<div class="movie-card__wrp">
			<p class="movie-card__title">
				${name.toUpperCase()} <br />
				<span class="movie-card__info">${data.getMovieGenresPreview(
          genre_ids
        )} | ${parseFloat(first_air_date)}</span>
			</p>
		</div>
	</li>`;
        }
        return `
	<li class="trending-movie__card">
		<img
			class="trending-movie__img"
			src="https://image.tmdb.org/t/p/w500${poster_path}"
			alt="${title}"
			loading="lazy"
		/>
		<div class="movie-card__wrp">
			<p class="movie-card__title">
				${title.toUpperCase()} <br />
				<span class="movie-card__info">${data.getMovieGenresPreview(
          genre_ids
        )} | ${parseFloat(release_date)}</span>
			</p>
		</div>
	</li>`;
      }
    )
    .join('');
}
