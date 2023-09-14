import { Fragment } from "react";
import SearchBar from "../search-bar/SearchBar";
import "./style.scss";

function Header(props) {
	return (
		<div className="header">
			<div className="logo__container">
				<img
					src="/logo.svg"
					alt="logo"
					className="logo"
				/>
				<span className="logo__name">MovieBox</span>
			</div>
			{props.home ? (
				<Fragment>
					<SearchBar />
					<div className="logo__container">
						<span className="logo__name">Sign In</span>
						<img
							src="menu.svg"
							alt="menu"
							className="menu"
						/>
					</div>
				</Fragment>
			) : null}
		</div>
	);
}
export default Header;
