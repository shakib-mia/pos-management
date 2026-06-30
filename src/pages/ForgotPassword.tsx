import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	const isFormValid = email && email.length > 0;

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const { data } = await axios.post(
				`${import.meta.env.VITE_BACKEND_URL}api/reset-password`,
				{
					email,
				},
			);

			toast.success(data.message, {
				position: "bottom-center",
				autoClose: 3000,
			});

			// Login page-এ ফিরিয়ে দে
			navigate("/login");
		} catch (error: any) {
			toast.error(
				error?.response?.data?.message || "Failed to send reset link.",
				{
					position: "bottom-center",
				},
			);
		}
	};
	return (
		<div className="w-screen h-screen flex items-center justify-center bg-success/20 px-4">
			<form
				className="w-full max-w-md bg-white/90 shadow-lg rounded-xl p-8 border border-slate-200"
				onSubmit={handleSubmit}
			>
				<h1 className="text-2xl font-semibold mb-6 text-slate-900">
					Forgot Password
				</h1>

				<p className="mb-6 text-sm text-slate-600">
					Enter your email address and we&apos;ll send you
					instructions to reset your password.
				</p>

				<Input
					label="Email address"
					type="email"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					required
					placeholder="you@example.com"
					containerClassName="mb-6"
				/>

				<Button variant="primary" type="submit" disabled={!isFormValid}>
					Send reset link
				</Button>

				<div className="mt-5 text-center text-sm text-slate-600">
					Remembered your password?{" "}
					<Link to="/login" className="text-primary font-semibold">
						Sign in
					</Link>
				</div>
			</form>
		</div>
	);
};

export default ForgotPassword;
