import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { ToastContainer } from "react-toastify";
import { AppContext } from "./contexts/AppContexts";
import { useEffect, useState } from "react";
import axios from "axios";
import RootLayout from "./RootLayout.js";
import type { User } from "./interfaces/User.js";

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/forgot-password",
				element: <ForgotPassword />,
			},
			{
				path: "/reset-password",
				element: <ResetPassword />,
			},
		],
	},
]);

function App() {
	const [userData, setUserData] = useState<User | null>(null);
	// const token = localStorage.getItem("accessToken");
	const [token, setToken] = useState<string | null>(
		localStorage.getItem("accessToken"),
	);
	const store = {
		userData,
		setUserData,
		token,
		setToken,
	};

	useEffect(() => {
		const loadUser = async () => {
			if (!token) return;

			try {
				const { data } = await axios.get(
					import.meta.env.VITE_BACKEND_URL + "api/users/me",
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);

				setUserData(data.user);
				// console.log(data);
			} catch (error) {
				console.error(error);

				localStorage.removeItem("accessToken");
				setToken(null);
				setUserData(null);
			}
		};

		loadUser();
	}, [token]);

	return (
		<AppContext.Provider value={store}>
			<RouterProvider router={router} />
			<ToastContainer />
		</AppContext.Provider>
	);
}

export default App;
