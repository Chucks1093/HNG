import { useEffect, useState, useContext } from "react";
import Card from "../card/Card";
import "./style.scss";
import { MovieContext } from "../../MovieContext";

function FeaturedMovies() {
	const { movies } = useContext(MovieContext);

	return (
		<section className="featured__movies">
			<div className="section__header">
				<h1>Featured Movies</h1>
				<div>
					<span>See more</span>
					<img
						src="/icons/right.svg"
						alt="right"
					/>
				</div>
			</div>
			<div className="movie__container">
				{movies.map((movie, i) =>
					i <= 10 ? (
						<Card
							image={movie.poster_path}
							title={movie.title}
							date={movie.release_date}
							id={movie.id}
						/>
					) : null
				)}
			</div>
		</section>
	);
}
export default FeaturedMovies;
