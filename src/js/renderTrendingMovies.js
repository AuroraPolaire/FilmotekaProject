function renderTrendingMovies({
  poster_path,
  title,
  // original_title,
  // overview,
  // popularity,
  genres,
}) {
  const getGenres = genres
    .map(el => {
      return el.name;
    })
    .join(', ');

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
				<span class="movie-card__info">${getGenres}</span>
			</p>
		</div>
	</li>`;
}
export { renderTrendingMovies };
