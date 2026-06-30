import React, { useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import Button from "../components/Button";
import Input from "../components/Input";
import type { User } from "../interfaces/User";
import axios from "axios";

const Register = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [subdomain, setSubdomain] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			toast.error("Passwords do not match. Please try again.", {
				position: "bottom-center",
			});
			return;
		}

		if (!/^[a-z0-9-]+$/.test(subdomain)) {
			toast.error(
				"Subdomain can only contain lowercase letters, numbers, and hyphens.",
				{
					position: "bottom-center",
				},
			);
			return;
		}

		const user: User = {
			fullName,
			email,
			subdomain,
			password,
			createdAt: Date.now(),
			updatedAt: Date.now(),
		};

		try {
			const { data } = await axios.post(
				import.meta.env.VITE_BACKEND_URL + "api/users",
				user,
			);

			toast.success(data.message, {
				position: "bottom-center",
				autoClose: 3000,
			});

			// Optional: Reset form
			setFullName("");
			setEmail("");
			setSubdomain("");
			setPassword("");
			setConfirmPassword("");
		} catch (error: any) {
			toast.error(
				error.response?.data?.message || "Something went wrong.",
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
					Register
				</h1>

				<Input
					label="Full Name"
					type="text"
					value={fullName}
					onChange={(event) => setFullName(event.target.value)}
					required
					placeholder="John Smith"
					containerClassName="mb-4"
				/>

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
					label="Subdomain"
					type="text"
					value={subdomain}
					onChange={(event) =>
						setSubdomain(event.target.value.toLowerCase())
					}
					required
					placeholder="acme-store"
					containerClassName="mb-4"
				/>
				<p className="-mt-2 mb-4 text-xs text-slate-500">
					Your workspace will be available at{" "}
					{subdomain || "your-subdomain"}.example.com.
				</p>

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

				{/* <div className="mb-6 flex justify-center">
					<ReCAPTCHA
						sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
						onChange={(token: string | null) =>
							setRecaptchaToken(token)
						}
					/>
				</div> */}

				<Button type="submit">Create account</Button>

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
