import { useEffect, useState } from "react";
import "./style.scss";

function ModalCover({ display, handleClick, children }) {

    const setClick = (e) => e.target.classList.contains("modal__cover") ? handleClick() : null;

	return display ? (
		<div
			onClick={setClick}
			className="modal__cover"
		>
			{children}
		</div>
	) : null;
}
export default ModalCover;
