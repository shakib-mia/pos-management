import { Edit, Eye, Trash2 } from "lucide-react";

const sales = [
	{
		id: 1,
		name: "Summer Sale",
		discount: "20%",
		products: 35,
		start: "01 Jul 2026",
		end: "10 Jul 2026",
		status: "Active",
	},
	{
		id: 2,
		name: "Eid Special",
		discount: "35%",
		products: 82,
		start: "20 Mar 2026",
		end: "30 Mar 2026",
		status: "Completed",
	},
];

const FlashSaleTable = () => {
	return (
		<div className="overflow-hidden rounded-xl border bg-white shadow-sm">
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-slate-50">
						<tr>
							<th className="px-6 py-4 text-left">Campaign</th>
							<th className="px-6 py-4 text-left">Discount</th>
							<th className="px-6 py-4 text-left">Products</th>
							<th className="px-6 py-4 text-left">Duration</th>
							<th className="px-6 py-4 text-left">Status</th>
							<th className="px-6 py-4 text-right">Actions</th>
						</tr>
					</thead>

					<tbody>
						{sales.map((sale) => (
							<tr key={sale.id} className="border-t">
								<td className="px-6 py-4">
									<div>
										<h4 className="font-semibold">
											{sale.name}
										</h4>

										<p className="text-sm text-slate-500">
											Flash Sale
										</p>
									</div>
								</td>

								<td className="px-6 py-4 font-semibold text-danger">
									{sale.discount}
								</td>

								<td className="px-6 py-4">{sale.products}</td>

								<td className="px-6 py-4 text-sm">
									<div>{sale.start}</div>
									<div className="text-slate-500">
										to {sale.end}
									</div>
								</td>

								<td className="px-6 py-4">
									<span
										className={`rounded-full px-3 py-1 text-xs font-semibold ${
											sale.status === "Active"
												? "bg-success/10 text-success"
												: "bg-slate-100 text-slate-600"
										}`}
									>
										{sale.status}
									</span>
								</td>

								<td className="px-6 py-4">
									<div className="flex justify-end gap-2">
										<button className="p-2 hover:bg-slate-100 rounded-lg">
											<Eye size={18} />
										</button>

										<button className="p-2 text-primary hover:bg-primary/10 rounded-lg">
											<Edit size={18} />
										</button>

										<button className="p-2 text-danger hover:bg-danger/10 rounded-lg">
											<Trash2 size={18} />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default FlashSaleTable;
