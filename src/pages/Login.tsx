import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
// import ReCAPTCHA from "react-google-recaptcha";
import Button from "../components/Button";
import Input from "../components/Input";
import SignInWithGoogle from "../components/SignInWithGoogle";
import axios from "axios";
import { AppContext } from "../contexts/AppContexts";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
	const { setToken } = useContext(AppContext);
	const navigate = useNavigate();

	const isFormValid = email && password;

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const { data } = await axios.post(
				import.meta.env.VITE_BACKEND_URL + "api/login",
				{
					email,
					password,
				},
			);
			setToken(data.token);
			localStorage.setItem("accessToken", data.token);

			toast.success(data.message, {
				position: "bottom-center",
				autoClose: 3000,
			});

			navigate("/");
		} catch (error: any) {
			toast.error(error.response?.data?.message || "Login failed.", {
				position: "bottom-center",
			});
		}
	};

	// if(user)
	// console.log(user);

	return (
		<div className="w-screen h-screen flex items-center justify-center bg-success/20 px-4">
			<form
				className="w-full max-w-md bg-white/90 shadow-lg rounded-xl p-8 border border-slate-200"
				onSubmit={handleSubmit}
			>
				<h1 className="text-2xl font-semibold mb-6 text-slate-900">
					Login
				</h1>

				<Input
					label="Email address"
					type="email"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					required
					placeholder="you@example.com"
					containerClassName="mb-4"
				/>

				<Input
					label="Password"
					type="password"
					value={password}
					onChange={(event) => setPassword(event.target.value)}
					required
					autoComplete=""
					placeholder="Enter your password"
					containerClassName="mb-4"
				/>

				{/* <div className="mb-6 flex justify-center">
					<ReCAPTCHA
						sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
						onChange={(token: string | null) =>
							setRecaptchaToken(token)
						}
					/>
				</div> */}

				<Button type="submit" variant="primary" disabled={!isFormValid}>
					Sign in
				</Button>

				<div className="flex items-center gap-4 my-5">
					<div className="w-full h-px bg-black/40"></div>
					<p>OR</p>
					<div className="w-full h-px bg-black/40"></div>
				</div>

				<SignInWithGoogle />

				<div className="mt-5 text-center text-sm text-slate-600 space-y-3">
					<div>
						Don&apos;t have an account?{" "}
						<Link
							to="/register"
							className="text-primary font-semibold"
						>
							Register
						</Link>
					</div>
					<div>
						<Link
							to="/forgot-password"
							className="text-primary font-semibold"
						>
							Forgot password?
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
