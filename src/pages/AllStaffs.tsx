import { Link } from "react-router";
import { Edit, Plus, Search, Trash2 } from "lucide-react";
import { RxAvatar } from "react-icons/rx";

const staffs = [
	{
		id: 1,
		fullName: "Demo Admin",
		email: "admin@example.com",
		phone: "+8801712345678",
		role: "Admin",
		status: "Active",
		createdAt: "25 Mar 2025",
		photoURL: "",
	},
	{
		id: 2,
		fullName: "John Doe",
		email: "john@example.com",
		phone: "+8801811111111",
		role: "Manager",
		status: "Active",
		createdAt: "12 Apr 2025",
		photoURL: "",
	},
	{
		id: 3,
		fullName: "Jane Smith",
		email: "jane@example.com",
		phone: "+8801911111111",
		role: "Cashier",
		status: "Inactive",
		createdAt: "05 May 2025",
		photoURL: "",
	},
	{
		id: 4,
		fullName: "Alex Brown",
		email: "alex@example.com",
		phone: "+8801611111111",
		role: "Staff",
		status: "Active",
		createdAt: "20 May 2025",
		photoURL: "",
	},
];

const AllStaffs = () => {
	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold text-slate-800">
						All Staffs
					</h1>
					<p className="mt-1 text-slate-500">
						Manage all staff members of your store.
					</p>
				</div>

				<Link
					to="/staffs/add"
					className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-medium text-white transition hover:bg-primary-dark"
				>
					<Plus size={18} />
					Add Staff
				</Link>
			</div>

			{/* Filters */}
			<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
				<div className="grid gap-4 lg:grid-cols-4">
					<div className="relative lg:col-span-2">
						<Search
							size={18}
							className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
						/>

						<input
							type="text"
							placeholder="Search staff..."
							className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 focus:border-primary focus:outline-none"
						/>
					</div>

					<select className="rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none">
						<option>All Roles</option>
						<option>Admin</option>
						<option>Manager</option>
						<option>Cashier</option>
						<option>Staff</option>
						<option>Delivery Boy</option>
					</select>

					<select className="rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none">
						<option>All Status</option>
						<option>Active</option>
						<option>Inactive</option>
					</select>
				</div>
			</div>

			{/* Table */}
			<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
				<div className="overflow-x-auto">
					<table className="min-w-full">
						<thead className="bg-slate-50">
							<tr className="text-left text-sm font-semibold text-slate-600">
								<th className="px-6 py-4">Staff</th>
								<th className="px-6 py-4">Phone</th>
								<th className="px-6 py-4">Role</th>
								<th className="px-6 py-4">Status</th>
								<th className="px-6 py-4">Created</th>
								<th className="px-6 py-4 text-right">
									Actions
								</th>
							</tr>
						</thead>

						<tbody>
							{staffs.map((staff) => (
								<tr
									key={staff.id}
									className="border-t border-slate-100 hover:bg-slate-50"
								>
									<td className="px-6 py-4">
										<div className="flex items-center gap-3">
											{staff.photoURL ? (
												<img
													src={staff.photoURL}
													alt={staff.fullName}
													className="h-11 w-11 rounded-full object-cover"
												/>
											) : (
												<RxAvatar className="text-4xl text-slate-400" />
											)}

											<div>
												<p className="font-medium text-slate-800">
													{staff.fullName}
												</p>

												<p className="text-sm text-slate-500">
													{staff.email}
												</p>
											</div>
										</div>
									</td>

									<td className="px-6 py-4 text-slate-600">
										{staff.phone}
									</td>

									<td className="px-6 py-4">
										<span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
											{staff.role}
										</span>
									</td>

									<td className="px-6 py-4">
										<span
											className={`rounded-full px-3 py-1 text-xs font-semibold ${
												staff.status === "Active"
													? "bg-success/10 text-success"
													: "bg-danger/10 text-danger"
											}`}
										>
											{staff.status}
										</span>
									</td>

									<td className="px-6 py-4 text-slate-500">
										{staff.createdAt}
									</td>

									<td className="px-6 py-4">
										<div className="flex justify-end gap-2">
											<button className="rounded-lg p-2 text-primary transition hover:bg-primary/10">
												<Edit size={18} />
											</button>

											<button className="rounded-lg p-2 text-danger transition hover:bg-danger/10">
												<Trash2 size={18} />
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Footer */}
				<div className="flex items-center justify-between border-t border-slate-200 px-6 py-4">
					<p className="text-sm text-slate-500">
						Showing 1 - {staffs.length} of {staffs.length} staffs
					</p>

					<div className="flex gap-2">
						<button className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-100">
							Previous
						</button>

						<button className="rounded-lg bg-primary px-4 py-2 text-sm text-white">
							1
						</button>

						<button className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-100">
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllStaffs;
