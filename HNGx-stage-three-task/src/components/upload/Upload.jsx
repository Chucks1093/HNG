import { Fragment, useState } from "react";
import "./style.scss";
import UploadModal from "../upload-modal/UploadModal";
import ModalCover from "../modal-cover/ModalCover";
import UploadBtn from "../upload-btn/UploadBtn";

function Upload() {
	const [display, setDisplay] = useState(false);
	const handleClick = () =>  setDisplay(!display);
	return (
		<Fragment>
			<UploadBtn handleClick={handleClick} />
			<ModalCover handleClick={handleClick} display={display}>
				<UploadModal  />
			</ModalCover>
		</Fragment>
	);
}
export default Upload;
