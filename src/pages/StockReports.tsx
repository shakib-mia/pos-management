import { Download, Search, TrendingUp } from "lucide-react";

const rows = [
	{
		id: "ST-501",
		sku: "SKU-1001",
		product: "Wireless Headphones",
		stock: 48,
		lowStock: false,
	},
	{
		id: "ST-502",
		sku: "SKU-1002",
		product: "Smart Watch",
		stock: 7,
		lowStock: true,
	},
	{
		id: "ST-503",
		sku: "SKU-1003",
		product: "Phone Case",
		stock: 122,
		lowStock: false,
	},
];

const StockReports = () => {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold text-slate-800">
					Stock Reports
				</h1>
				<p className="mt-1 text-slate-500">
					Monitor inventory levels, low-stock alerts, and stock
					movement.
				</p>
			</div>

			<div className="grid gap-4 md:grid-cols-3">
				<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-slate-500">Total Units</p>
					<h2 className="mt-2 text-2xl font-semibold text-slate-800">
						3,842
					</h2>
					<p className="mt-2 text-sm text-success">+4.6% this week</p>
				</div>
				<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-slate-500">Low Stock Items</p>
					<h2 className="mt-2 text-2xl font-semibold text-slate-800">
						12
					</h2>
					<p className="mt-2 text-sm text-warning">Needs attention</p>
				</div>
				<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-slate-500">Inventory Value</p>
					<h2 className="mt-2 text-2xl font-semibold text-slate-800">
						$84,260
					</h2>
					<p className="mt-2 flex items-center gap-1 text-sm text-success">
						<TrendingUp size={14} /> Healthy trend
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
							placeholder="Search stock report"
							className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 focus:border-primary focus:outline-none md:min-w-72"
						/>
					</div>
					<button className="flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
						<Download size={16} /> Export Stock
					</button>
				</div>
				<div className="overflow-x-auto">
					<table className="min-w-full">
						<thead className="bg-slate-50 text-left text-sm font-semibold text-slate-600">
							<tr>
								<th className="px-4 py-3">SKU</th>
								<th className="px-4 py-3">Product</th>
								<th className="px-4 py-3">Stock</th>
								<th className="px-4 py-3">Status</th>
							</tr>
						</thead>
						<tbody>
							{rows.map((row) => (
								<tr
									key={row.id}
									className="border-t border-slate-100 text-sm text-slate-600"
								>
									<td className="px-4 py-3">{row.sku}</td>
									<td className="px-4 py-3 font-medium text-slate-800">
										{row.product}
									</td>
									<td className="px-4 py-3">{row.stock}</td>
									<td className="px-4 py-3">
										<span
											className={`rounded-full px-3 py-1 text-xs font-semibold ${row.lowStock ? "bg-warning/10 text-warning" : "bg-success/10 text-success"}`}
										>
											{row.lowStock
												? "Low Stock"
												: "In Stock"}
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

export default StockReports;
