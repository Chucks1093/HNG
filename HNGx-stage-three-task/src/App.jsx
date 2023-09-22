import { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./pages/Auth/Auth";
import "./App.scss";
import Register from "./pages/register/register";
import Login from "./pages/Login/Login";
import Gallery from "./pages/gallery/Gallery";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<AuthLayout />}
				>
					<Route
						index
						element={<Login />}
					/>
					<Route
						path="/register"
						element={<Register />}
					/>
				</Route>
				<Route
					path="/gallery"
					element={<Gallery />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
