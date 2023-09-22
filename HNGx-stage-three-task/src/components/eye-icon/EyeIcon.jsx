import "./eye-icon.scss";

function EyeIcon({tooglePassword, visibility}) {
	
	function checkVisibility  ()  {
		return `/icons/${visibility ?"eye-opened" : "eye-closed"}.svg`;
	}
	// console.log(checkVisibility)
	return (
		<img
            onClick={tooglePassword}
            src={`/icons/eye-opened.svg`}
            alt={"con"}
            className="eye__icon"
		/>  
	);
}
export default EyeIcon;
