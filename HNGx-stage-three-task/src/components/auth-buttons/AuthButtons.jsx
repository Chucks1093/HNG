import "./auth-buttons.scss";


function AuthButtons({ children, goggleAuth }) {
	return (
		<div className="auth__buttons">
			<button
				type="submit"
				style={{ width: !goggleAuth ? "100%" : "80%" }}
				className="auth__submit__btn"
			>
				{children}
			</button>
			{goggleAuth ? (
				<button
					type="button"
					className="auth__goggle__btn"
				>
					<img
						src="/icons/google.svg"
						alt="google"
					/>
				</button>
			) : null}
		</div>
	);
}

export default AuthButtons;
