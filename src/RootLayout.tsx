import { Outlet, useLocation, useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { AppContext } from "./contexts/AppContexts";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const publicRoutes = [
	"/login",
	"/register",
	"/forgot-password",
	"/reset-password",
];

const RootLayout = () => {
	const { token } = useContext(AppContext);

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (!token && !publicRoutes.includes(location.pathname)) {
			navigate("/login", { replace: true });
		}
	}, [token, location.pathname, navigate]);

	const hideNavbar = publicRoutes.includes(location.pathname);

	return (
		<>
			<div className="flex h-full">
				{hideNavbar || <Sidebar />}
				<div className={hideNavbar ? "" : "w-full"}>
					{hideNavbar || <Navbar />}
					<div className={hideNavbar ? "" : "p-4"}>
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default RootLayout;
