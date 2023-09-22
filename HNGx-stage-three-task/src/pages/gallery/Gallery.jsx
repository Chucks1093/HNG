import { useEffect, useState } from "react";
import "./style.scss";
import Photo from "../../components/photo/Photo";
import Modal from "../../image-view/ImageView";
import Upload from "../../components/upload/Upload";
import { Reorder } from "framer-motion";

function Gallery() {
	const [photosArr, setPhotosArr] = useState([]);
	useEffect(() => {
		const value = [];
		for (let i = 0; i < 100; i++) {
			value.push(i);
		}
		setPhotosArr(value);
	}, []);

	return (
		<div className="gallery">
			<h1>My Gallery</h1>
			<Reorder.Group axis="x" values={photosArr} onReorder={setPhotosArr} className="photos">
				{photosArr.map((item, i) => (
					<Photo key={i} index={i} />
				))}
			</Reorder.Group>
			<Modal />
			<Upload />
		</div>
	);
}
export default Gallery;
