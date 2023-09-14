import { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Card(props) {
	const [like, setLike] = useState(false);
	const handleClick = () => {
		setLike(!like);
	};
	return (
		
		<div
			data-testid="movie-card"
			className="card"
		>
			<div className="img__container">
				<img
					onClick={handleClick}
					className="love__icon"
					src={`/icons/${like ? "like" : "unlike"}.svg`}
					alt="love"
				/>
				<Link to={`/movies/${props.id}`}>
				<img
					src={`https://image.tmdb.org/t/p/w500/${props.image}`}
					alt=""
					data-testid="movie-poster"
					className="movie__img"
				/>
				</Link>
		
			</div>
			<h2 data-testid="movie-title">
				{props.title}
			</h2>
			<div className="date__container">
				<img
					src="/icons/imob.svg"
					alt="imob"
				/>
				<span data-testid="movie-release-date">{props.date}</span>
			</div>
		</div>
	);
}
export default Card;
