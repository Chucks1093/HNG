import { Fragment, useEffect, useState } from "react";
import "./style.scss";
import months from "../../utils/months";
import { motion, useMotionValue, Reorder, transform } from "framer-motion";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable } from "@dnd-kit/core";


function Photo({ index }) {
	const {attributes, listeners, setNodeRef, transition} = useSortable({id : index});
	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
	}
	return (
		<Fragment>
			{index % 20 == 0 ? (
				<p className="divider">{months[index / 20]}</p>
			) : null}
				<img 
				ref={setNodeRef} {...attributes} {...listeners}
					className="photo"
					src={`/photo/photo-${index}.jpg`}
					alt={index}
					style={style}
				/>
		</Fragment>
	);
}
export default Photo;
