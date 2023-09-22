

import "./form-input.scss";
import EyeIcon from "../eye-icon/EyeIcon";
import { useState } from "react";


function FormInput({ handleChange, label, eyeicon, ...otherProps }) {
	const [visibility, setVisibility] = useState(false);
	const tooglePassword = () => {
		setVisibility(!visibility);
		console.log(visibility)

	};
	const setHandleChange =(e)=> {
		console.log(e.target.value)
		handleChange((value) => {
			return {
				...value,
				[label] : e.target.value
				
			}
		})
	}
	return (
		<div className="form__input">
			<label htmlFor={label}>{label}</label>
			<input onChange={setHandleChange} {...otherProps}  />
			{eyeicon ? (
				<EyeIcon
					visibility={visibility}
					handleClick={tooglePassword}
				/>
			) : null}
		</div>
	);
}
export default FormInput;
