import { useState } from "react";

interface AddBrandFormProps {
	onSuccess?: () => void;
}

const AddBrandForm = ({ onSuccess }: AddBrandFormProps) => {
	const [form, setForm] = useState({
		name: "",
		status: "Active",
		logo: null as File | null,
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		setForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0] || null;

		setForm((prev) => ({
			...prev,
			logo: file,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.name.trim()) return;

		const formData = new FormData();

		formData.append("name", form.name);
		formData.append("status", form.status);

		if (form.logo) {
			formData.append("logo", form.logo);
		}

		// await axios.post(...)

		console.log(formData);

		onSuccess?.();
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div>
				<label className="mb-2 block text-sm font-medium text-slate-700">
					Brand Name
				</label>

				<input
					type="text"
					name="name"
					value={form.name}
					onChange={handleInputChange}
					placeholder="Enter brand name"
					className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
				/>
			</div>

			<div>
				<label className="mb-2 block text-sm font-medium text-slate-700">
					Brand Logo
				</label>

				<input
					type="file"
					accept="image/*"
					onChange={handleFileChange}
					className="block w-full rounded-lg border border-slate-300 file:mr-4 file:border-0 file:bg-primary file:px-4 file:py-2.5 file:text-white hover:file:bg-primary-dark"
				/>

				{form.logo && (
					<p className="mt-2 text-sm text-slate-500">
						Selected: {form.logo.name}
					</p>
				)}
			</div>

			<div>
				<label className="mb-2 block text-sm font-medium text-slate-700">
					Status
				</label>

				<select
					name="status"
					value={form.status}
					onChange={handleInputChange}
					className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-primary"
				>
					<option>Active</option>
					<option>Inactive</option>
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
					Save Brand
				</button>
			</div>
		</form>
	);
};

export default AddBrandForm;
