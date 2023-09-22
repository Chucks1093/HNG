import { Fragment, useEffect, useState } from "react";
import "./style.scss";
import months from "../../utils/months";
import { motion, useMotionValue, Reorder } from "framer-motion";

function Photo({ index }) {
	const y = useMotionValue(0);
	return (
		<Fragment>
			{index % 20 == 0 ? (
				<p className="divider">{months[index / 20]}</p>
			) : null}
			<Reorder.Item
				id={index}
				value={index}
				style={{ y }}
				drag

			>
				<motion.img
					className="photo"
					src={`/photo/photo-${index}.jpg`}
					alt={index}
					drag
				/>
			</Reorder.Item>
		</Fragment>
	);
}
export default Photo;
