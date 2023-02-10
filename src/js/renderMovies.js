// import { movieData } from './movieClass';
import * as url from '../images/No-Image-Placeholder.svg';

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
        vote_average,
        id,
      }) => {
        return `
	<li class="trending-movie__card">
		<img
			class="trending-movie__img"
			src="${poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : url}"
			alt="${title ? title : name}"
			loading="lazy"
      data-id="${id}"
		/>
		<div class="wrapper">
			<p class="movie-card__title">
				${title ? title.toUpperCase() : name.toUpperCase()} </p>
				<div class="movie-card__wrp">
				<div class="movie-card__genre-wrp">
				<div class="movie-card__genre card-info">${data.getMovieGenresPreview(
          genre_ids
        )}</div>
				</div>
				<div class="movie-card__year card-info">${
          release_date
            ? parseFloat(release_date) || ''
            : parseFloat(first_air_date) || ''
        } </div>
				<div class="movie-card__rating-wrp">
				<div class="movie-card__rating">${vote_average.toFixed(1)}</div>
				</div>
		</div>
		</div>
	</li>`;
      }
    )
    .join('');
}