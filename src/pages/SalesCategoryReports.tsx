import { Download, Search, TrendingUp } from "lucide-react";

const rows = [
	{ id: "C-301", category: "Electronics", sales: "$24,800", orders: 88 },
	{ id: "C-302", category: "Accessories", sales: "$10,450", orders: 54 },
	{ id: "C-303", category: "Home Essentials", sales: "$8,120", orders: 41 },
];

const SalesCategoryReports = () => {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold text-slate-800">
					Sales Category Reports
				</h1>
				<p className="mt-1 text-slate-500">
					Compare revenue by category to guide merchandising and stock
					planning.
				</p>
			</div>

			<div className="grid gap-4 md:grid-cols-3">
				<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-slate-500">Best Category</p>
					<h2 className="mt-2 text-2xl font-semibold text-slate-800">
						Electronics
					</h2>
					<p className="mt-2 text-sm text-success">+15% growth</p>
				</div>
				<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-slate-500">Total Orders</p>
					<h2 className="mt-2 text-2xl font-semibold text-slate-800">
						183
					</h2>
					<p className="mt-2 text-sm text-slate-500">
						Across all categories
					</p>
				</div>
				<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-slate-500">Revenue Growth</p>
					<h2 className="mt-2 text-2xl font-semibold text-slate-800">
						9.8%
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
							placeholder="Search categories"
							className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 focus:border-primary focus:outline-none md:min-w-72"
						/>
					</div>
					<button className="flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
						<Download size={16} /> Export Report
					</button>
				</div>
				<div className="overflow-x-auto">
					<table className="min-w-full">
						<thead className="bg-slate-50 text-left text-sm font-semibold text-slate-600">
							<tr>
								<th className="px-4 py-3">Category</th>
								<th className="px-4 py-3">Orders</th>
								<th className="px-4 py-3">Sales</th>
							</tr>
						</thead>
						<tbody>
							{rows.map((row) => (
								<tr
									key={row.id}
									className="border-t border-slate-100 text-sm text-slate-600"
								>
									<td className="px-4 py-3 font-medium text-slate-800">
										{row.category}
									</td>
									<td className="px-4 py-3">{row.orders}</td>
									<td className="px-4 py-3">{row.sales}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default SalesCategoryReports;
