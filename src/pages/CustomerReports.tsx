import { Download, Search, TrendingUp } from "lucide-react";

const rows = [
	{
		id: "CR-1001",
		customer: "Nadia Rahman",
		orders: 4,
		total: "$842.00",
		status: "Completed",
	},
	{
		id: "CR-1002",
		customer: "Rafi Ahmed",
		orders: 2,
		total: "$365.50",
		status: "Pending",
	},
	{
		id: "CR-1003",
		customer: "Mina Akter",
		orders: 6,
		total: "$1,120.00",
		status: "Completed",
	},
];

const CustomerReports = () => {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold text-slate-800">
					Customer Reports
				</h1>
				<p className="mt-1 text-slate-500">
					Review customer activity, order counts, and lifetime spend.
				</p>
			</div>

			<div className="grid gap-4 md:grid-cols-3">
				<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-slate-500">Active Customers</p>
					<h2 className="mt-2 text-2xl font-semibold text-slate-800">
						1,248
					</h2>
					<p className="mt-2 text-sm text-success">
						+8.2% this month
					</p>
				</div>
				<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-slate-500">Repeat Buyers</p>
					<h2 className="mt-2 text-2xl font-semibold text-slate-800">
						312
					</h2>
					<p className="mt-2 text-sm text-slate-500">26% of total</p>
				</div>
				<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-slate-500">Average Spend</p>
					<h2 className="mt-2 text-2xl font-semibold text-slate-800">
						$124.80
					</h2>
					<p className="mt-2 flex items-center gap-1 text-sm text-success">
						<TrendingUp size={14} /> Up from last month
					</p>
				</div>
			</div>

			<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
				<div className="mb-4 flex flex-wrap items-center justify-between gap-3">
					<div className="relative">
						<Search
							size={18}
							className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
						/>
						<input
							type="text"
							placeholder="Search customer reports"
							className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 focus:border-primary focus:outline-none md:min-w-72"
						/>
					</div>
					<button className="flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
						<Download size={16} /> Export CSV
					</button>
				</div>
				<div className="overflow-x-auto">
					<table className="min-w-full">
						<thead className="bg-slate-50 text-left text-sm font-semibold text-slate-600">
							<tr>
								<th className="px-4 py-3">ID</th>
								<th className="px-4 py-3">Customer</th>
								<th className="px-4 py-3">Orders</th>
								<th className="px-4 py-3">Total Spend</th>
								<th className="px-4 py-3">Status</th>
							</tr>
						</thead>
						<tbody>
							{rows.map((row) => (
								<tr
									key={row.id}
									className="border-t border-slate-100 text-sm text-slate-600"
								>
									<td className="px-4 py-3">{row.id}</td>
									<td className="px-4 py-3 font-medium text-slate-800">
										{row.customer}
									</td>
									<td className="px-4 py-3">{row.orders}</td>
									<td className="px-4 py-3">{row.total}</td>
									<td className="px-4 py-3">
										<span
											className={`rounded-full px-3 py-1 text-xs font-semibold ${row.status === "Completed" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}
										>
											{row.status}
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

export default CustomerReports;
