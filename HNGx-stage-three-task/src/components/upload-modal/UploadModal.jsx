import "./style.scss";
import months from "../../utils/months";
import { Fragment } from "react";
import ModalCover from "../modal-cover/ModalCover";

function UploadModal() {
	return  (
		<div className="upload__modal">
			<h1>Upload An Image</h1>
			<div className="selector">
				<label htmlFor="months">Category :</label>
				<select
					name="months"
					id="months"
				>
					{months.map((month, i) => (
						<option key={i} value={month}>{month}</option>
					))}
				</select>
			</div>
            <input type="file" name="image" accept=".jpg, .jpeg, .png"/>
			{/* <p>
				Click the <a className="upload__link">link</a> to upload and
				image
			</p> */}
		</div>
	);
}
export default UploadModal;
