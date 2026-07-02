import { Download, Search, TrendingUp } from "lucide-react";

const rows = [
	{
		id: "S-101",
		date: "2026-06-20",
		orders: 24,
		revenue: "$8,420",
		tax: "$642",
	},
	{
		id: "S-102",
		date: "2026-06-21",
		orders: 19,
		revenue: "$6,780",
		tax: "$512",
	},
	{
		id: "S-103",
		date: "2026-06-22",
		orders: 28,
		revenue: "$9,150",
		tax: "$698",
	},
];

const SalesReports = () => {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold text-slate-800">
					Sales Reports
				</h1>
				<p className="mt-1 text-slate-500">
					Track gross sales, refunds, and daily revenue trends.
				</p>
			</div>

			<div className="grid gap-4 md:grid-cols-3">
				<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-slate-500">Total Revenue</p>
					<h2 className="mt-2 text-2xl font-semibold text-slate-800">
						$48,280
					</h2>
					<p className="mt-2 text-sm text-success">
						+12.4% vs last week
					</p>
				</div>
				<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-slate-500">Orders Count</p>
					<h2 className="mt-2 text-2xl font-semibold text-slate-800">
						184
					</h2>
					<p className="mt-2 text-sm text-slate-500">
						Average 7.7 per day
					</p>
				</div>
				<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-slate-500">Refund Rate</p>
					<h2 className="mt-2 text-2xl font-semibold text-slate-800">
						1.8%
					</h2>
					<p className="mt-2 flex items-center gap-1 text-sm text-success">
						<TrendingUp size={14} /> Stable performance
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
							placeholder="Search sales data"
							className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 focus:border-primary focus:outline-none md:min-w-72"
						/>
					</div>
					<button className="flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
						<Download size={16} /> Export Excel
					</button>
				</div>
				<div className="overflow-x-auto">
					<table className="min-w-full">
						<thead className="bg-slate-50 text-left text-sm font-semibold text-slate-600">
							<tr>
								<th className="px-4 py-3">Date</th>
								<th className="px-4 py-3">Orders</th>
								<th className="px-4 py-3">Revenue</th>
								<th className="px-4 py-3">Tax</th>
							</tr>
						</thead>
						<tbody>
							{rows.map((row) => (
								<tr
									key={row.id}
									className="border-t border-slate-100 text-sm text-slate-600"
								>
									<td className="px-4 py-3">{row.date}</td>
									<td className="px-4 py-3">{row.orders}</td>
									<td className="px-4 py-3 font-medium text-slate-800">
										{row.revenue}
									</td>
									<td className="px-4 py-3">{row.tax}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default SalesReports;
