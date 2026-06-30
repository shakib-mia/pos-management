import { ExternalLink } from "lucide-react";

const urls = [
	{
		url: "/",
		title: "Home",
		visitors: 1248,
		views: 3124,
	},
	{
		url: "/products",
		title: "Products",
		visitors: 986,
		views: 2410,
	},
	{
		url: "/categories/fruits",
		title: "Fruits Category",
		visitors: 742,
		views: 1896,
	},
	{
		url: "/checkout",
		title: "Checkout",
		visitors: 486,
		views: 1182,
	},
	{
		url: "/login",
		title: "Login",
		visitors: 298,
		views: 654,
	},
];

const TopUrlsTable = () => {
	return (
		<div className="bg-white rounded-xl border border-slate-200 shadow-sm">
			<div className="flex items-center justify-between p-6 border-b border-slate-200">
				<div>
					<h2 className="text-lg font-semibold text-slate-900">
						Top URLs
					</h2>

					<p className="text-sm text-slate-500">Most visited pages</p>
				</div>

				<button className="text-primary text-sm font-medium hover:underline">
					View All
				</button>
			</div>

			<div className="overflow-x-auto">
				<table className="w-full">
					<thead className="bg-slate-50">
						<tr>
							<th className="text-left px-6 py-3 text-xs uppercase tracking-wide text-slate-500">
								Page
							</th>

							<th className="text-right px-6 py-3 text-xs uppercase tracking-wide text-slate-500">
								Visitors
							</th>

							<th className="text-right px-6 py-3 text-xs uppercase tracking-wide text-slate-500">
								Page Views
							</th>
						</tr>
					</thead>

					<tbody>
						{urls.map((item) => (
							<tr
								key={item.url}
								className="border-t border-slate-100 hover:bg-slate-50 transition"
							>
								<td className="px-6 py-4">
									<div className="flex items-center gap-3">
										<div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
											<ExternalLink
												size={16}
												className="text-primary"
											/>
										</div>

										<div>
											<p className="font-medium text-slate-800">
												{item.title}
											</p>

											<p className="text-sm text-slate-500">
												{item.url}
											</p>
										</div>
									</div>
								</td>

								<td className="px-6 py-4 text-right font-medium text-slate-700">
									{item.visitors.toLocaleString()}
								</td>

								<td className="px-6 py-4 text-right font-medium text-slate-700">
									{item.views.toLocaleString()}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TopUrlsTable;
