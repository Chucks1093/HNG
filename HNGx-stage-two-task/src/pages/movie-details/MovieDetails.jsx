import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import "./style.scss";
import { MovieContext } from "../../MovieContext";
import { useContext, useEffect, useState } from "react";

function MovieDetails() {
	const { movies } = useContext(MovieContext);
	const [movie, setMovie] = useState({});
	const [date, setDate] = useState("Fri, 28 Jul 2023 00:00:00 GMT");
	const { id } = useParams();

	useEffect(() => {
		const item = movies.filter((item) => item.id == id);
        const firstItem = item.shift();
		const inputDate = new Date(firstItem.release_date);
		const utcDate = new Date(
			Date.UTC(
				inputDate.getUTCFullYear(),
				inputDate.getUTCMonth(),    
				inputDate.getUTCDate()
			)
		);

		setDate(utcDate.toUTCString());
		setMovie(firstItem);
	}, []);

	return (
		<div className="movie__details">
			<Header />
			<div className="movie__showcase">
				<img
					src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
					alt={movie.backdrop_path}
					className="bg"
				/>
				<img
					src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
					alt=""
					className="movie__poster"
				/>
				<div>
					<h1 className="movie__title">{movie.original_title}</h1>
					<div>
						<img
							src="/icons/imob.svg"
							alt=""
						/>
						<span className="movie__time">{`${date} • 23m`}</span>
					</div>
					<h3>Overview</h3>
					<p className="overview">{movie.overview}</p>
				</div>
			</div>
		</div>
	);
}
export default MovieDetails;
