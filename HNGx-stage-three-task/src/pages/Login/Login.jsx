import { useState, Fragment } from "react";
import FormInput from "../../components/form-input/FormInput";
import AuthButtons from "../../components/auth-buttons/AuthButtons";
import { Link } from "react-router-dom";
import app from "../../utils/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
	const navigate = useNavigate();
	
	const [inputValue, setInputValue] = useState({
		email : "",
		password: ""
	});

	const signInUser = (e) => {
		e.preventDefault();
		const email = inputValue.email;
		const password = inputValue.password;
		const auth = getAuth(app);
		console.log(email, password)
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				navigate("/gallery")
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	return (
		<Fragment>
			<div className="auth__form__content  ">
				<h1>Login</h1>
				<form onSubmit={signInUser}>
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
					<AuthButtons >Login</AuthButtons>
					<label className="auth__label">
						Don't have an account ?
						<Link to="/register">Sign Up</Link>
					</label>
				</form>
			</div>
		</Fragment>
	);
}

export default Login;
