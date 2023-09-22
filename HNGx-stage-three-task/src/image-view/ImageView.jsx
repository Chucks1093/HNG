import "./style.scss";
import { useState } from "react";

function ImageView() {
	const [viewer, setViewer] = useState(false);
	const handleclick = () => setViewer(!viewer);
	return viewer ? (
		<Fragment>
			<img
				onClick={handleclick}
				src="/icons/cancel.svg"
				alt="cancel"
				className="cancel"
			/>
			<img
				src="/photos/photo-0.jpg"
				alt="photos"
				className="view"
			/>
		</Fragment>
	) : null;
}
export default ImageView;
