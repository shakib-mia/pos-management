import { useState, type ChangeEvent, type FormEvent } from "react";

interface AddBarcodeFormProps {
	onSuccess?: () => void;
}

const AddBarcodeForm = ({ onSuccess }: AddBarcodeFormProps) => {
	const [form, setForm] = useState({
		product: "",
		code: "",
		status: "Active",
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!form.product.trim() || !form.code.trim()) return;
		console.log({
			product: form.product.trim(),
			code: form.code.trim(),
			status: form.status,
		});
		onSuccess?.();
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div>
				<label className="mb-2 block text-sm font-medium text-slate-700">
					Product Name
				</label>
				<input
					type="text"
					name="product"
					value={form.product}
					onChange={handleChange}
					placeholder="Enter product name"
					className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
				/>
			</div>

			<div>
				<label className="mb-2 block text-sm font-medium text-slate-700">
					Barcode
				</label>
				<input
					type="text"
					name="code"
					value={form.code}
					onChange={handleChange}
					placeholder="Enter barcode"
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
					Save Barcode
				</button>
			</div>
		</form>
	);
};

export default AddBarcodeForm;
