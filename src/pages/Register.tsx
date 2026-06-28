import React, { useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../components/Button";
import Input from "../components/Input";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
	const isPasswordsMatch = password === confirmPassword;
	const isFormValid =
		email &&
		password &&
		confirmPassword &&
		isPasswordsMatch &&
		recaptchaToken;
	console.log(recaptchaToken);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			toast.error("Passwords do not match. Please try again.", {
				position: "bottom-center",
			});
			return;
		}
		if (!recaptchaToken) {
			toast.error("Please verify the reCAPTCHA", {
				position: "bottom-center",
			});
			return;
		}
		console.log("Registering user", { email, password, recaptchaToken });
		toast.success(`Registered with email: ${email}`, {
			position: "bottom-center",
			autoClose: 3000,
		});
	};

	return (
		<div className="w-screen h-screen flex items-center justify-center bg-success/20 px-4">
			<form
				className="w-full max-w-md bg-white/90 shadow-lg rounded-xl p-8 border border-slate-200"
				onSubmit={handleSubmit}
			>
				<h1 className="text-2xl font-semibold mb-6 text-slate-900">
					Register
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
					placeholder="Create a password"
					containerClassName="mb-4"
				/>

				<Input
					label="Confirm password"
					type="password"
					value={confirmPassword}
					onChange={(event) => setConfirmPassword(event.target.value)}
					required
					placeholder="Re-enter your password"
					containerClassName="mb-4"
				/>

				<div className="mb-6 flex justify-center">
					<ReCAPTCHA
						sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
						onChange={(token: string | null) =>
							setRecaptchaToken(token)
						}
					/>
				</div>

				<Button type="submit" disabled={!isFormValid}>
					Create account
				</Button>

				<div className="mt-5 text-center text-sm text-slate-600 space-y-3">
					<div>
						Already have an account?{" "}
						<Link
							to="/login"
							className="text-primary font-semibold"
						>
							Sign in
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

export default Register;
