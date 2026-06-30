import React, { useContext, useEffect } from "react";
import Button from "./Button.js";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { FcGoogle } from "react-icons/fc";
import { AppContext } from "../contexts/AppContexts.js";
import { useNavigate } from "react-router";
import axios from "axios";
// import { AppContext } from "../contexts/AppContexts.js";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const SignInWithGoogle = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	const { setToken } = useContext(AppContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user?.user?.accessToken) return;

		const signInWithGoogle = async () => {
			try {
				const { data } = await axios.post(
					import.meta.env.VITE_BACKEND_URL +
						"api/login/signin-with-google",
					{
						token: user.user.accessToken,
					},
				);

				localStorage.setItem("accessToken", data.token);

				toast.success(data.message, {
					position: "bottom-center",
				});
				setToken(data.token);

				navigate("/");
			} catch (error: any) {
				// Firebase user-কে sign out করে দে, কারণ DB-তে account নেই
				await signOut(auth);

				toast.error(
					error.response?.data?.message ||
						"No account found for this Google account.",
					{
						position: "bottom-center",
					},
				);
			}
		};

		signInWithGoogle();
	}, [user, navigate]);

	return (
		<Button
			className="flex gap-2 items-center justify-center"
			// variant="white"
			type="button"
			disabled={loading}
			onClick={() => signInWithGoogle()}
		>
			{loading ? (
				"Loading..."
			) : (
				<>
					<FcGoogle /> Sign In with Google
				</>
			)}
		</Button>
	);
};

export default SignInWithGoogle;
