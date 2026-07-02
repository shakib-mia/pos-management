import { useState } from "react";

const AddStaffForm = () => {
	const [form, setForm] = useState({
		fullName: "",
		email: "",
		phone: "",
		role: "Staff",
		password: "",
		confirmPassword: "",
		address: "",
		status: "Active",
	});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>,
	) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
			<div className="mb-8">
				<h2 className="text-2xl font-semibold text-slate-800">
					Add Staff
				</h2>
				<p className="mt-1 text-slate-500">
					Add a new staff member to your store.
				</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				{/* Full Name */}
				<div>
					<label className="mb-2 block text-sm font-medium">
						Full Name
					</label>

					<input
						type="text"
						name="fullName"
						value={form.fullName}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
					/>
				</div>

				{/* Email */}
				<div>
					<label className="mb-2 block text-sm font-medium">
						Email Address
					</label>

					<input
						type="email"
						name="email"
						value={form.email}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
					/>
				</div>

				{/* Phone */}
				<div>
					<label className="mb-2 block text-sm font-medium">
						Phone Number
					</label>

					<input
						type="text"
						name="phone"
						value={form.phone}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
					/>
				</div>

				{/* Role */}
				<div>
					<label className="mb-2 block text-sm font-medium">
						Role
					</label>

					<select
						name="role"
						value={form.role}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none"
					>
						<option>Admin</option>
						<option>Manager</option>
						<option>Cashier</option>
						<option>Staff</option>
						<option>Delivery Boy</option>
					</select>
				</div>

				{/* Password */}
				<div>
					<label className="mb-2 block text-sm font-medium">
						Password
					</label>

					<input
						type="password"
						name="password"
						value={form.password}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
					/>
				</div>

				{/* Confirm Password */}
				<div>
					<label className="mb-2 block text-sm font-medium">
						Confirm Password
					</label>

					<input
						type="password"
						name="confirmPassword"
						value={form.confirmPassword}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
					/>
				</div>

				{/* Status */}
				<div>
					<label className="mb-2 block text-sm font-medium">
						Account Status
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

				{/* Address */}
				<div className="md:col-span-2">
					<label className="mb-2 block text-sm font-medium">
						Address
					</label>

					<textarea
						rows={4}
						name="address"
						value={form.address}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
					/>
				</div>
			</div>

			<div className="mt-8 flex justify-end gap-3">
				<button
					type="button"
					className="rounded-lg border border-slate-300 px-5 py-2.5 hover:bg-slate-100"
				>
					Cancel
				</button>

				<button
					type="submit"
					className="rounded-lg bg-primary px-6 py-2.5 text-white hover:bg-primary-dark"
				>
					Add Staff
				</button>
			</div>
		</div>
	);
};

export default AddStaffForm;
