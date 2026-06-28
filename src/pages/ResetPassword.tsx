import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { toast } from "react-toastify";
import Button from "../components/Button";
import Input from "../components/Input";

const ResetPassword = () => {
	const [searchParams] = useSearchParams();
	const email = searchParams.get("email") || "";
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const navigate = useNavigate();

	const isPasswordsMatch = password === confirmPassword;
	const isFormValid =
		password.length >= 8 && isPasswordsMatch && confirmPassword.length > 0;

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password.length < 8) {
			toast.error("Password must be at least 8 characters long.", {
				position: "bottom-center",
			});
			return;
		}

		if (password !== confirmPassword) {
			toast.error("Passwords do not match. Please try again.");
			return;
		}

		console.log("Reset password for", email || "user", { password });
		toast.success(
			"Your password has been updated successfully. You can now sign in.",
			{
				position: "bottom-center",
			},
		);
		navigate("/login");
	};

	return (
		<div className="w-screen h-screen flex items-center justify-center bg-success/20 px-4">
			<form
				className="w-full max-w-md bg-white/90 shadow-lg rounded-xl p-8 border border-slate-200"
				onSubmit={handleSubmit}
			>
				<h1 className="text-2xl font-semibold mb-6 text-slate-900">
					Reset Password
				</h1>

				<p className="mb-4 text-sm text-slate-600">
					{email
						? `Resetting password for ${email}.`
						: "Enter a new password to update your account."}
				</p>

				<Input
					label="New password"
					type="password"
					value={password}
					onChange={(event) => setPassword(event.target.value)}
					required
					placeholder="Create a new password"
					containerClassName="mb-4"
				/>

				<Input
					label="Confirm password"
					type="password"
					value={confirmPassword}
					onChange={(event) => setConfirmPassword(event.target.value)}
					required
					placeholder="Re-enter your new password"
					containerClassName="mb-6"
				/>

				<Button variant="success" type="submit" disabled={!isFormValid}>
					Reset Password
				</Button>

				<div className="mt-5 text-center text-sm text-slate-600">
					Remember your password?{" "}
					<Link to="/login" className="text-primary font-semibold">
						Sign in
					</Link>
				</div>
			</form>
		</div>
	);
};

export default ResetPassword;
