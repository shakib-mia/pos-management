import { Download, Search, TrendingUp } from "lucide-react";

const rows = [
	{
		id: "D-401",
		name: "Daily Sales Summary",
		format: "CSV",
		generated: "2026-06-22",
	},
	{
		id: "D-402",
		name: "Top Selling Products",
		format: "PDF",
		generated: "2026-06-21",
	},
	{
		id: "D-403",
		name: "Category Revenue Report",
		format: "Excel",
		generated: "2026-06-20",
	},
];

const SalesDownloadableReports = () => {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold text-slate-800">
					Sales Downloadable Reports
				</h1>
				<p className="mt-1 text-slate-500">
					Download ready-to-share sales reports in your preferred
					format.
				</p>
			</div>

			<div className="grid gap-4 md:grid-cols-3">
				<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-slate-500">
						Available Templates
					</p>
					<h2 className="mt-2 text-2xl font-semibold text-slate-800">
						6
					</h2>
					<p className="mt-2 text-sm text-success">Updated weekly</p>
				</div>
				<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-slate-500">Last Download</p>
					<h2 className="mt-2 text-2xl font-semibold text-slate-800">
						2 hrs ago
					</h2>
					<p className="mt-2 text-sm text-slate-500">
						Daily sales summary
					</p>
				</div>
				<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-slate-500">Export Speed</p>
					<h2 className="mt-2 text-2xl font-semibold text-slate-800">
						Instant
					</h2>
					<p className="mt-2 flex items-center gap-1 text-sm text-success">
						<TrendingUp size={14} /> Ready for download
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
							placeholder="Search downloadable reports"
							className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 focus:border-primary focus:outline-none md:min-w-72"
						/>
					</div>
				</div>
				<div className="overflow-x-auto">
					<table className="min-w-full">
						<thead className="bg-slate-50 text-left text-sm font-semibold text-slate-600">
							<tr>
								<th className="px-4 py-3">Report</th>
								<th className="px-4 py-3">Format</th>
								<th className="px-4 py-3">Generated</th>
								<th className="px-4 py-3">Action</th>
							</tr>
						</thead>
						<tbody>
							{rows.map((row) => (
								<tr
									key={row.id}
									className="border-t border-slate-100 text-sm text-slate-600"
								>
									<td className="px-4 py-3 font-medium text-slate-800">
										{row.name}
									</td>
									<td className="px-4 py-3">{row.format}</td>
									<td className="px-4 py-3">
										{row.generated}
									</td>
									<td className="px-4 py-3">
										<button className="flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
											<Download size={14} /> Download
										</button>
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

export default SalesDownloadableReports;
