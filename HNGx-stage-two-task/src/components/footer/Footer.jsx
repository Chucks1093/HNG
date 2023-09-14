import "./style.scss";

function Footer() {
	return (
		<footer>
			<div className="social__icons">
				<img
					src="/icons/facebook.svg"
					alt="facebook"
				/>
                    <img
                        src="/icons/youtube.svg"
                        alt="youtube"
                    />
				<img
					src="/icons/twitter.svg"
					alt="twitter"
				/>
				<img
					src="/icons/instagram.svg"
					alt="instagram"
				/>
			</div>
			<div className="terms">
				<p>Conditions of Use</p>
				<p>Privace and Policy</p>
				<p>Press Use</p>
			</div>
			<p>© 2021 MovieBox by Adriana Eka Prayudha </p>
		</footer>
	);
}
export default Footer;
