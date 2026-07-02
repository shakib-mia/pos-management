import React from "react";

const Toggle = ({
	name,
	label,
	description,
	checked,
	handleChange,
}: {
	name: string;
	label: string;
	description: string;
	checked: boolean;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
	<div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
		<div>
			<h3 className="font-medium text-slate-800">{label}</h3>

			<p className="mt-1 text-sm text-slate-500">{description}</p>
		</div>

		<label className="relative inline-flex cursor-pointer items-center">
			<input
				type="checkbox"
				name={name}
				checked={checked}
				onChange={handleChange}
				className="peer sr-only"
			/>

			<div className="h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-success after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5" />
		</label>
	</div>
);

export default Toggle;
