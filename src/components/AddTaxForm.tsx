import { useState, type ChangeEvent, type FormEvent } from "react";

interface AddTaxFormProps {
	onSuccess?: () => void;
}

const AddTaxForm = ({ onSuccess }: AddTaxFormProps) => {
	const [form, setForm] = useState({
		name: "",
		rate: "",
		type: "Percent",
		status: "Active",
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		setForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.name.trim() || !form.rate) return;

		const payload = {
			name: form.name.trim(),
			rate: Number(form.rate),
			type: form.type,
			status: form.status,
		};

		console.log(payload);
		onSuccess?.();
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div>
				<label className="mb-2 block text-sm font-medium text-slate-700">
					Tax Name <span className="text-danger">*</span>
				</label>

				<input
					type="text"
					name="name"
					value={form.name}
					onChange={handleChange}
					placeholder="Enter tax name"
					className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
				/>
			</div>

			<div>
				<label className="mb-2 block text-sm font-medium text-slate-700">
					Tax Rate <span className="text-danger">*</span>
				</label>

				<div className="flex items-center gap-3">
					<input
						type="number"
						name="rate"
						value={form.rate}
						onChange={handleChange}
						placeholder="0"
						min="0"
						step="0.01"
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
					/>

					<select
						name="type"
						value={form.type}
						onChange={handleChange}
						className="rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
					>
						<option value="Percent">Percent</option>
						<option value="Fixed">Fixed</option>
					</select>
				</div>
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
					Save Tax
				</button>
			</div>
		</form>
	);
};

export default AddTaxForm;
