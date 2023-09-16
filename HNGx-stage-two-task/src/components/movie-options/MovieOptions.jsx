import "./style.scss";

function MovieOptions() {
	return (
		<div className="movie__options">
			<div className="ratings">
				<img
					src="/icons/star.svg"
					alt="star"
				/>
				<span>8.5 | 350k</span>
			</div>
			<div className="options time">
				<img
					src="/icons/tickets.svg"
					alt=""
				/>
				<p>See Showtimes</p>
			</div>
			<div className="options">
				<img
					src="/icons/list-b.svg"
					alt=""
				/>
				<p>More watch options</p>
			</div>
			<div className="best__movies__container">
				<img
					src="https://image.tmdb.org/t/p/w500/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg"
					alt="similar_movies"
				/>
				<img
					src="https://image.tmdb.org/t/p/w500/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg"
					alt="similar_movies"
				/>
				<img
					src="https://image.tmdb.org/t/p/w500/mfnkSeeVOBVheuyn2lo4tfmOPQb.jpg"
					alt="similar_movies"
				/>
				<div className="best__movies__title">
					<img
						src="/icons/list.svg"
						alt="list"
					/>
					<p>The Best Movies and Shows in September</p>
				</div>
			</div>
		</div>
	);
}
export default MovieOptions;
