import "./style.scss";

function UploadBtn({handleClick}) {
	return (
		<img
			src="/icons/plus.svg"
			alt="plus"
			className="upload__btn"
            onClick={handleClick}
		/>
	);
}
export default UploadBtn;
