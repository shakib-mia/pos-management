import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "success" | "danger";
	fullWidth?: boolean;
	children: React.ReactNode;
};

const Button = ({
	variant = "primary",
	fullWidth = true,
	className = "",
	disabled = false,
	children,
	...props
}: ButtonProps) => {
	const baseClasses = "rounded-lg px-4 py-3 font-semibold transition-colors";
	const variantClasses =
		variant === "primary"
			? "bg-primary text-white hover:bg-primary-dark"
			: variant === "success"
				? "bg-success text-white hover:bg-green-600"
				: "bg-danger text-white hover:bg-red-600";
	const disabledClasses = disabled
		? "opacity-50 cursor-not-allowed hover:bg-opacity-100"
		: "cursor-pointer";
	const widthClass = fullWidth ? "w-full" : "";

	return (
		<button
			{...props}
			disabled={disabled}
			className={`${baseClasses} ${variantClasses} ${disabledClasses} ${widthClass} ${className}`.trim()}
		>
			{children}
		</button>
	);
};

export default Button;
