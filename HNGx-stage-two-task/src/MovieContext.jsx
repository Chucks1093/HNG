import { useState, createContext, useEffect } from "react";


const MovieContext = createContext();

function MovieProvider({ children }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGE0YjBkYWM2NDk5YTIxNWJjOGYxZjg1NDEzMTcyOCIsInN1YiI6IjY0ZmZkOGMwMGJiMDc2MDBjNGEwZjRjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sq27Ut2tg23Vw-mt4XgIhxQAS3K2Ok8mglG2wrZqo90'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=5', options)
            .then(response => response.json())
            .then(response => setMovies(response.results))
            .catch(err => console.error(err));
	}, []);

	return (
		<MovieContext.Provider value={{ movies }}>
			{children}
		</MovieContext.Provider>
	);
}

export { MovieProvider, MovieContext };
