import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
	containerClassName?: string;
};

const Input = ({
	label,
	containerClassName = "",
	className = "",
	type = "text",
	...props
}: InputProps) => {
	const [showPassword, setShowPassword] = useState(false);
	const isPasswordType = type === "password";
	const inputType = isPasswordType && showPassword ? "text" : type;

	return (
		<label className={`block ${containerClassName}`.trim()}>
			{label ? (
				<span className="text-sm font-medium text-slate-700">
					{label}
				</span>
			) : null}
			<div className="relative mt-2">
				<input
					{...props}
					type={inputType}
					className={`block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/70 ${isPasswordType ? "pr-12" : ""} ${className}`.trim()}
				/>
				{isPasswordType ? (
					<button
						type="button"
						onClick={() => setShowPassword((prev) => !prev)}
						className="absolute inset-y-0 right-0 flex items-center px-3 text-slate-500 hover:text-slate-700"
						aria-label={
							showPassword ? "Hide password" : "Show password"
						}
					>
						{showPassword ? (
							<FiEyeOff size={18} />
						) : (
							<FiEye size={18} />
						)}
					</button>
				) : null}
			</div>
		</label>
	);
};

export default Input;
