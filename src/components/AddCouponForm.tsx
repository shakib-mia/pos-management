import { useState } from "react";

interface AddCouponFormProps {
	onSuccess?: () => void;
}

const AddCouponForm = ({ onSuccess }: AddCouponFormProps) => {
	const [form, setForm] = useState({
		code: "",
		type: "Percentage",
		value: "",
		minimumOrder: "",
		maximumDiscount: "",
		usageLimit: "",
		startDate: "",
		expiryDate: "",
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

		// axios.post(...)

		onSuccess?.();
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div className="grid gap-5 md:grid-cols-2">
				<div>
					<label className="mb-2 block text-sm font-medium">
						Coupon Code
					</label>

					<input
						name="code"
						value={form.code}
						onChange={handleChange}
						placeholder="WELCOME10"
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium">
						Discount Type
					</label>

					<select
						name="type"
						value={form.type}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5"
					>
						<option>Percentage</option>
						<option>Fixed</option>
					</select>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium">
						Discount Value
					</label>

					<input
						type="number"
						name="value"
						value={form.value}
						onChange={handleChange}
						placeholder="10"
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium">
						Minimum Order
					</label>

					<input
						type="number"
						name="minimumOrder"
						value={form.minimumOrder}
						onChange={handleChange}
						placeholder="100"
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium">
						Maximum Discount
					</label>

					<input
						type="number"
						name="maximumDiscount"
						value={form.maximumDiscount}
						onChange={handleChange}
						placeholder="100"
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium">
						Usage Limit
					</label>

					<input
						type="number"
						name="usageLimit"
						value={form.usageLimit}
						onChange={handleChange}
						placeholder="50"
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium">
						Start Date
					</label>

					<input
						type="date"
						name="startDate"
						value={form.startDate}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium">
						Expiry Date
					</label>

					<input
						type="date"
						name="expiryDate"
						value={form.expiryDate}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5"
					/>
				</div>

				<div className="md:col-span-2">
					<label className="mb-2 block text-sm font-medium">
						Status
					</label>

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
			</div>

			<div className="flex justify-end gap-3 border-t border-slate-200 pt-5">
				<button
					type="button"
					onClick={onSuccess}
					className="rounded-lg border border-slate-300 px-5 py-2.5 hover:bg-slate-100"
				>
					Cancel
				</button>

				<button
					type="submit"
					className="rounded-lg bg-primary px-6 py-2.5 text-white hover:bg-primary-dark"
				>
					Save Coupon
				</button>
			</div>
		</form>
	);
};

export default AddCouponForm;
