import { Fragment, useEffect, useState } from "react";
import "./style.scss";

function MovieInfo({ movie, date }) {
	
    
    
	return (
		<div className="movie__info">
			<span data-testid="movie-title">{movie.original_title} •</span>
			<span
				data-testid="movie-release-date"
				className="movie__time"
			>{`${date} •`}</span>
			<span>PG-5 •</span>
			<span data-testid="movie-runtime">{`${movie.runtime}m`}</span>

			<p
				data-testid="movie-overview"
				className="overview"
			>
				{movie.overview}
			</p>

			<div className="movie__workers">
				<p>
					Director : <span>Joseph Kosinski</span>
				</p>
				<p>
					Writers : <span>Jim Cash, Jack Epps Jr, Peter Craig</span>
				</p>
				<p>
					Stars :
					<span>Tom Cruise, Jennifer Connelly, Miles Teller</span>
				</p>
			</div>

			<div className="movie__awards">
				<button>Top rated movie #65</button>
				<p>Awards 9 nominations</p>
				<img
					src="/icons/arrow-down.svg"
					alt="arrow"
				/>
			</div>
		</div>
	);
}
export default MovieInfo;
