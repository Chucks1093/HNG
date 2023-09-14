import "./style.scss";

function SearchBar() {
	return (
		<div className="search__bar">
			<input
				type="search"
				name="search"
				id="search"
			/>
			<img
				src="search.svg"
				alt="search_img"
				className="search__icon"
			/>
		</div>
	);
}
export default SearchBar;
