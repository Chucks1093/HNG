import "./style.scss";

function SideBar() {
	return (
		<nav className="side__bar">
			<div className="bar__top">
				<img
					src="/logo.svg"
					alt="logo"
					className="logo"
				/>
				<span>MovieBox</span>
			</div>
			<div className="nav__options">
				<div className="nav__option">
					<img
						src="/icons/home.svg"
						alt="home"
					/>
					<p>Home</p>
				</div>
				<div className="nav__option active">
					<img
						src="/icons/projector.svg"
						alt="home"
					/>
					<p>Movies</p>
				</div>
				<div className="nav__option">
					<img
						src="/icons/tv.svg"
						alt="home"
					/>
					<p>TV Series</p>
				</div>
				<div className="nav__option">
					<img
						src="/icons/calendar.svg"
						alt="home"
					/>
					<p>Calendar</p>
				</div>
				<div className="tickets">
					<h5>Play movie quizes and earn free tickets</h5>
					<p>50k people are playing now</p>
					<button>Start playing</button>
				</div>
				<div className="nav__option log__out">
					<img
						src="/icons/logout.svg"
						alt="home"
					/>
					<p>Log out</p>
				</div>
			</div>
		</nav>
	);
}
export default SideBar;
