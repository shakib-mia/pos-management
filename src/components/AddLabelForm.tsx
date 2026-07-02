import { useState } from "react";

const AddLabelForm = ({ onSuccess }: { onSuccess?: () => void }) => {
	const [form, setForm] = useState({
		name: "",
		color: "#3498db",
		status: "Active",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		setForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		console.log(form);

		onSuccess?.();
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div>
				<label className="mb-2 block text-sm font-medium">
					Label Name
				</label>

				<input
					name="name"
					value={form.name}
					onChange={handleChange}
					className="w-full rounded-lg border border-slate-300 px-4 py-2.5"
				/>
			</div>

			<div>
				<label className="mb-2 block text-sm font-medium">
					Label Color
				</label>

				<div className="flex items-center gap-4">
					<input
						type="color"
						name="color"
						value={form.color}
						onChange={handleChange}
						className="h-12 w-16 rounded border"
					/>

					<div
						className="rounded-full px-4 py-2 text-white font-medium"
						style={{
							background: form.color,
						}}
					>
						Preview
					</div>
				</div>
			</div>

			<div>
				<label className="mb-2 block text-sm font-medium">Status</label>

				<select
					name="status"
					value={form.status}
					onChange={handleChange}
					className="w-full rounded-lg border border-slate-300 px-4 py-2.5"
				>
					<option>Active</option>
					<option>Inactive</option>
				</select>
			</div>

			<div className="flex justify-end gap-3 border-t pt-5">
				<button
					type="button"
					onClick={onSuccess}
					className="rounded-lg border px-5 py-2"
				>
					Cancel
				</button>

				<button
					type="submit"
					className="rounded-lg bg-primary px-6 py-2 text-white"
				>
					Save Label
				</button>
			</div>
		</form>
	);
};

export default AddLabelForm;
