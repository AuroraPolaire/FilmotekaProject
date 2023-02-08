import { movieData } from '../index';
import { initializeSlider, resetSlider } from './slider';

function renderTrendingMovies(data) {
  console.log(data.movies);
  return data.movies
    .map(({ title, poster_path, release_date, genre_ids }) => {
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
				${title} <br />
				<span class="movie-card__info">${data.getMovieGenresPreview(genre_ids)}</span>
			</p>
		</div>
	</li>`;
    })
    .join('');
}
export { renderTrendingMovies };

// export const movieGeneralMarkup = data => {
//   console.log(data);
//   return data.movies
//     .map(({ title, poster_path, release_date, genre_ids }) => {
//       return `<div>
//   <a href="">
//   <img src="https://image.tmdb.org/t/p/w300/${poster_path}" alt=""/>
//   <h2>${title}</h2>
//   <
//   <p>${data.getMovieGenresPreview(genre_ids)}${release_date}</p>
//   </a>
// </div>
// `;
//     })
//     .join('');
// };
