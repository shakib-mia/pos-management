import { useState, type ChangeEvent, type FormEvent } from "react";

interface AddShelfFormProps {
	onSuccess?: () => void;
}

const AddShelfForm = ({ onSuccess }: AddShelfFormProps) => {
	const [form, setForm] = useState({
		name: "",
		capacity: "",
		status: "Active",
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.name.trim() || !form.capacity) return;

		console.log({
			name: form.name.trim(),
			capacity: Number(form.capacity),
			status: form.status,
		});
		onSuccess?.();
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div>
				<label className="mb-2 block text-sm font-medium text-slate-700">
					Shelf Name
				</label>
				<input
					type="text"
					name="name"
					value={form.name}
					onChange={handleChange}
					placeholder="Enter shelf name"
					className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
				/>
			</div>

			<div>
				<label className="mb-2 block text-sm font-medium text-slate-700">
					Capacity
				</label>
				<input
					type="number"
					name="capacity"
					value={form.capacity}
					onChange={handleChange}
					min="1"
					placeholder="Enter capacity"
					className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
				/>
			</div>

			<div>
				<label className="mb-2 block text-sm font-medium text-slate-700">
					Status
				</label>
				<select
					name="status"
					value={form.status}
					onChange={handleChange}
					className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
				>
					<option value="Active">Active</option>
					<option value="Inactive">Inactive</option>
				</select>
			</div>

			<div className="flex justify-end gap-3 border-t border-slate-200 pt-5">
				<button
					type="button"
					onClick={onSuccess}
					className="rounded-lg border border-slate-300 px-5 py-2.5 transition hover:bg-slate-100"
				>
					Cancel
				</button>
				<button
					type="submit"
					className="rounded-lg bg-primary px-6 py-2.5 font-medium text-white transition hover:bg-primary-dark"
				>
					Save Shelf
				</button>
			</div>
		</form>
	);
};

export default AddShelfForm;
