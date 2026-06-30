import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "success" | "danger";
	fullWidth?: boolean;
	children: React.ReactNode;
};

const Button = ({
	variant,
	fullWidth = true,
	className = "",
	disabled = false,
	children,
	...props
}: ButtonProps) => {
	const baseClasses = "rounded-lg px-4 py-3 font-semibold transition-colors";
	const variantClasses =
		variant === "primary"
			? "bg-primary border border-primary text-white hover:bg-primary-dark hover:border-primary-dark"
			: variant === "success"
				? "bg-success border border-success text-white hover:bg-success-dark hover:border-success-dark"
				: variant === "danger"
					? "bg-danger border border-danger text-white hover:bg-danger-dark hover:border-danger-dark"
					: "bg-white border border-primary text-primary hover:bg-primary hover:text-white";
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
