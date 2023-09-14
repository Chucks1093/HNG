import "./style.scss";
import Header from "../header/Header";

function Hero() {
	return (
		<div className="hero">
			<Header home />
			<img
				className="banner"
				src="https://image.tmdb.org/t/p/original/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg"
				alt="banner"
			/>
			<div className="hero__details">
				<h1>Indiana Jones and the Dial of Destiny</h1>
				<div>
					<img
						className="imob"
						src="/icons/imob.svg"
						alt="imob"
					/>
					<span className="imob__rate">86.0/100</span>
					<img
						className="tomatoes"
						src="/icons/tomatoes.svg"
						alt="tomatoes"
					/>
					<span className="tomato__rate">97%</span>
				</div>
				<p>
				Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.
				</p>
				<button>
					<img
						src="/icons/play.svg"
						alt="play"
					/>
					<span>Watch trailer</span>
				</button>
			</div>
		</div>
	);
}

export default Hero;
