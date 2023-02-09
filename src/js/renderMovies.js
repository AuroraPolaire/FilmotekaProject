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
      }) => {
        return `
	<li class="trending-movie__card">
		<img
			class="trending-movie__img"
			src="${poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : url}"
			alt="${title ? title : name}"
			loading="lazy"
		/>
		<div class="movie-card__wrp">
			<p class="movie-card__title">
				${title ? title.toUpperCase() : name.toUpperCase()} <br />
				<span class="movie-card__info">${data.getMovieGenresPreview(genre_ids)} | ${
          release_date
            ? parseFloat(release_date) || ''
            : parseFloat(first_air_date) || ''
        }</span>
			</p>
		</div>
	</li>`;
      }
    )
    .join('');
}
