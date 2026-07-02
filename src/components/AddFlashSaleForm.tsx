import { useState } from "react";

interface Props {
	onSuccess?: () => void;
}

const AddFlashSaleForm = ({ onSuccess }: Props) => {
	const [form, setForm] = useState({
		name: "",
		discountType: "Percentage",
		discount: "",
		startDate: "",
		endDate: "",
		status: "Active",
		products: "",
		banner: null as File | null,
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		console.log(form);

		onSuccess?.();
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div className="grid gap-5 md:grid-cols-2">
				<div>
					<label>Campaign Name</label>

					<input
						name="name"
						value={form.name}
						onChange={handleChange}
						className="mt-2 w-full rounded-lg border px-4 py-2.5"
					/>
				</div>

				<div>
					<label>Discount Type</label>

					<select
						name="discountType"
						value={form.discountType}
						onChange={handleChange}
						className="mt-2 w-full rounded-lg border px-4 py-2.5"
					>
						<option>Percentage</option>
						<option>Fixed</option>
					</select>
				</div>

				<div>
					<label>Discount</label>

					<input
						type="number"
						name="discount"
						value={form.discount}
						onChange={handleChange}
						className="mt-2 w-full rounded-lg border px-4 py-2.5"
					/>
				</div>

				<div>
					<label>Products</label>

					<input
						name="products"
						value={form.products}
						onChange={handleChange}
						placeholder="Search products..."
						className="mt-2 w-full rounded-lg border px-4 py-2.5"
					/>
				</div>

				<div>
					<label>Start Date</label>

					<input
						type="datetime-local"
						name="startDate"
						value={form.startDate}
						onChange={handleChange}
						className="mt-2 w-full rounded-lg border px-4 py-2.5"
					/>
				</div>

				<div>
					<label>End Date</label>

					<input
						type="datetime-local"
						name="endDate"
						value={form.endDate}
						onChange={handleChange}
						className="mt-2 w-full rounded-lg border px-4 py-2.5"
					/>
				</div>

				<div>
					<label>Banner</label>

					<input type="file" className="mt-2 w-full" />
				</div>

				<div>
					<label>Status</label>

					<select
						name="status"
						value={form.status}
						onChange={handleChange}
						className="mt-2 w-full rounded-lg border px-4 py-2.5"
					>
						<option>Active</option>
						<option>Inactive</option>
					</select>
				</div>
			</div>

			<div className="flex justify-end gap-3 border-t pt-5">
				<button
					type="button"
					onClick={onSuccess}
					className="rounded-lg border px-5 py-2.5"
				>
					Cancel
				</button>

				<button
					type="submit"
					className="rounded-lg bg-primary px-6 py-2.5 text-white hover:bg-primary-dark"
				>
					Save Flash Sale
				</button>
			</div>
		</form>
	);
};

export default AddFlashSaleForm;
