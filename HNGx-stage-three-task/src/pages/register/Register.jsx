import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/form-input/FormInput";
import AuthButtons from "../../components/auth-buttons/AuthButtons";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../../utils/firebase";


function Register() {
	const navigate = useNavigate();

	const [inputValue, setInputValue] = useState({
		email : "",
		password: ""
	});

	const signUserUp = (e) => {
		e.preventDefault();
		const email = inputValue.email;
		const password = inputValue.password;
		const auth = getAuth(app);
		console.log(email, password)

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				navigate("/gallery");
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage)
				// ..
			});
	};
	return (
		<Fragment>
			<div className="auth__form__content">
				<h1>Sign up.</h1>
				<form onSubmit={signUserUp}>
				<FormInput
						name="email"
						type="email"
						label="email"
						id="email"
						handleChange={setInputValue}
						value={inputValue.email}
						required
					/>
					<FormInput
						name="password"
						type="password"
						label="password"
						id="password"
						handleChange={setInputValue}
						value={inputValue.password}
						required
					/>
					<AuthButtons >Register</AuthButtons>
					<label className="auth__label">
						Already have an account ?{" "}
						<Link to="/">Log in</Link>{" "}
					</label>
				</form>
			</div>
		</Fragment>
	);
}

export default Register;
