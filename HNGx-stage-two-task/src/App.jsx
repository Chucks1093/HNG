import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import "./style.scss";
import MovieDetails from "./pages/movie-details/MovieDetails";
import { MovieProvider } from "./MovieContext";
import Error from "./pages/error/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <Error />

	},
	{
		path: "movies/:id",
		element: <MovieDetails />,
		errorElement: <Error />
	},
]);

const App = () => (
	<MovieProvider>
		<RouterProvider router={router} />
	</MovieProvider>
);

export default App;
