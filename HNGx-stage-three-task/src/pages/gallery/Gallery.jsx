import { useEffect, useState } from "react";
import "./style.scss";
import Photo from "../../components/photo/Photo";
import Modal from "../../image-view/ImageView";
import Upload from "../../components/upload/Upload";
import { Reorder } from "framer-motion";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

function Gallery() {
	const [photosArr, setPhotosArr] = useState([]);
	useEffect(() => {
		const value = [];
		for (let i = 0; i < 100; i++) {
			value.push(i);
		}
		setPhotosArr(value);
	}, []);

	const dragEnd = e => {
		console.log(e.target)
	}

	return (
		<div className="gallery">
			<h1>My Gallery</h1>
			<div className="photos">

			<DndContext onDragEnd={dragEnd}>
				<SortableContext items={photosArr}>
				{photosArr.map((item, i) => (
					<Photo key={i} index={i} />
				))}
				</SortableContext>
			</DndContext>
			</div>
			<Modal />
			<Upload />
		</div>
	);
}
export default Gallery;
