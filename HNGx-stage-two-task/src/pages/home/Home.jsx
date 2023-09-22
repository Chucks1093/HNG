import Hero from "../../components/hero/Hero";
import FeaturedMovies from "../../components/featured-movies/FeaturedMovies";
import Footer from "../../components/footer/Footer";
import { Fragment } from "react";


function Home() {
	return (
		<Fragment>
			<Hero />
			<FeaturedMovies />
			<Footer />

		</Fragment>
	);
}
export default Home;
