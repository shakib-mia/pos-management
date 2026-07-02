import { useMemo, useState } from "react";
import { Search } from "lucide-react";

const customers = [
	{
		id: 1,
		name: "Nadia Rahman",
		email: "nadia@example.com",
		phone: "+8801712345678",
		status: "Active",
	},
	{
		id: 2,
		name: "Rafi Ahmed",
		email: "rafi@example.com",
		phone: "+8801812345678",
		status: "Active",
	},
	{
		id: 3,
		name: "Mina Akter",
		email: "mina@example.com",
		phone: "+8801912345678",
		status: "Inactive",
	},
	{
		id: 4,
		name: "Sajid Hasan",
		email: "sajid@example.com",
		phone: "+8801612345678",
		status: "Active",
	},
];

const Customers = () => {
	const [query, setQuery] = useState("");

	const filteredCustomers = useMemo(() => {
		const search = query.trim().toLowerCase();

		if (!search) return customers;

		return customers.filter((customer) =>
			[customer.name, customer.email, customer.phone, customer.status]
				.join(" ")
				.toLowerCase()
				.includes(search),
		);
	}, [query]);

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold text-slate-800">Customers</h1>
				<p className="mt-1 text-slate-500">
					Manage customer accounts and contact details.
				</p>
			</div>

			<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
				<div className="relative">
					<Search
						size={18}
						className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
					/>
					<input
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Search customers by name, email, phone or status..."
						className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 focus:border-primary focus:outline-none"
					/>
				</div>
			</div>

			<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
				<div className="overflow-x-auto">
					<table className="min-w-full">
						<thead className="bg-slate-50">
							<tr className="text-left text-sm font-semibold text-slate-600">
								<th className="px-6 py-4">Customer</th>
								<th className="px-6 py-4">Email</th>
								<th className="px-6 py-4">Phone</th>
								<th className="px-6 py-4">Status</th>
							</tr>
						</thead>
						<tbody>
							{filteredCustomers.map((customer) => (
								<tr
									key={customer.id}
									className="border-t border-slate-100 hover:bg-slate-50"
								>
									<td className="px-6 py-4 font-semibold text-slate-800">
										{customer.name}
									</td>
									<td className="px-6 py-4 text-slate-600">
										{customer.email}
									</td>
									<td className="px-6 py-4 text-slate-600">
										{customer.phone}
									</td>
									<td className="px-6 py-4">
										<span
											className={`rounded-full px-3 py-1 text-xs font-semibold ${customer.status === "Active" ? "bg-success/10 text-success" : "bg-danger/10 text-danger"}`}
										>
											{customer.status}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Customers;
