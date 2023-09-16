import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import "./style.scss";
import { MovieContext } from "../../MovieContext";
import { useContext, useEffect, useState } from "react";
import SideBar from "../../components/side-bar/SideBar";
import MovieInfo from "../../components/movie-info/MovieInfo";
import MovieOptions from "../../components/movie-options/MovieOptions";

function MovieDetails() {
	const [movie, setMovie] = useState({});
	const [date, setDate] = useState("Fri, 28 Jul 2023 00:00:00 GMT");
	const { id } = useParams();

	useEffect(() => {
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGE0YjBkYWM2NDk5YTIxNWJjOGYxZjg1NDEzMTcyOCIsInN1YiI6IjY0ZmZkOGMwMGJiMDc2MDBjNGEwZjRjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sq27Ut2tg23Vw-mt4XgIhxQAS3K2Ok8mglG2wrZqo90",
			},
		};

		fetch(
			`https://api.themoviedb.org/3/movie/${id}?language=en-US`,
			options
		)
			.then((response) => response.json())
			.then((response) => {
				setMovie(response);
				const inputDate = new Date(response.release_date);
				const utcDate = new Date(
					Date.UTC(
						inputDate.getUTCFullYear(),
						inputDate.getUTCMonth(),
						inputDate.getUTCDate()
					)
				);
				setDate(utcDate.toUTCString());
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="movie__details">
			<SideBar />
			<div className="movie__showcase">
				<div className="trailer__container">
					<img
						src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
						alt={movie.backdrop_path}
						className="bg"
					/>
					<img
						src="/icons/play_btn.svg"
						alt="playbtn"
						className="play__btn"
					/>
					<p>Watch Trailer</p>
				</div>
				<div className="movie__info__container">

				<MovieInfo movie={movie} date={date} />
				<MovieOptions />
				</div>
			</div>
		</div>
	);
}
export default MovieDetails;
