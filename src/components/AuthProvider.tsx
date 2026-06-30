// AuthProvider.tsx
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { AppContext } from "../contexts/AppContexts";

const PUBLIC_ROUTES = [
	"/login",
	"/register",
	"/forgot-password",
	"/reset-password",
];

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const { token } = useContext(AppContext);

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (!token && !PUBLIC_ROUTES.includes(location.pathname)) {
			navigate("/login", { replace: true });
		}
	}, [token, location.pathname, navigate]);

	return <>{children}</>;
};

export default AuthProvider;
