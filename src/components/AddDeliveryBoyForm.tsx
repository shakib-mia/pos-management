import { useState } from "react";

interface AddDeliveryBoyFormProps {
	onSuccess?: () => void;
}

const AddDeliveryBoyForm = ({ onSuccess }: AddDeliveryBoyFormProps) => {
	const [form, setForm] = useState({
		fullName: "",
		email: "",
		phone: "",
		password: "",
		confirmPassword: "",
		address: "",
		vehicleType: "Bike",
		vehicleNumber: "",
		status: "Active",
	});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>,
	) => {
		setForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (form.password !== form.confirmPassword) {
			alert("Passwords do not match.");
			return;
		}

		console.log(form);

		// await axios.post(...)

		onSuccess?.();
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="grid gap-5 md:grid-cols-2">
				<div>
					<label className="mb-2 block text-sm font-medium">
						Full Name
					</label>

					<input
						name="fullName"
						value={form.fullName}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium">
						Email
					</label>

					<input
						type="email"
						name="email"
						value={form.email}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium">
						Phone
					</label>

					<input
						name="phone"
						value={form.phone}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium">
						Vehicle Type
					</label>

					<select
						name="vehicleType"
						value={form.vehicleType}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none"
					>
						<option>Bike</option>
						<option>Bicycle</option>
						<option>Car</option>
						<option>Van</option>
					</select>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium">
						Vehicle Number
					</label>

					<input
						name="vehicleNumber"
						value={form.vehicleNumber}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium">
						Status
					</label>

					<select
						name="status"
						value={form.status}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none"
					>
						<option>Active</option>
						<option>Inactive</option>
					</select>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium">
						Password
					</label>

					<input
						type="password"
						name="password"
						value={form.password}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium">
						Confirm Password
					</label>

					<input
						type="password"
						name="confirmPassword"
						value={form.confirmPassword}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none"
					/>
				</div>

				<div className="md:col-span-2">
					<label className="mb-2 block text-sm font-medium">
						Address
					</label>

					<textarea
						rows={4}
						name="address"
						value={form.address}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none"
					/>
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
					Add Delivery Boy
				</button>
			</div>
		</form>
	);
};

export default AddDeliveryBoyForm;
