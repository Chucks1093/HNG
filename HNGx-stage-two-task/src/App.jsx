import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import "./style.scss";
import MovieDetails from "./pages/movie-details/MovieDetails";
import { MovieProvider } from "./MovieContext";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "movies/:id",
		element: <MovieDetails />,
	},
]);

const App = () => (
	<MovieProvider>
		<RouterProvider router={router} />
	</MovieProvider>
);

export default App;
