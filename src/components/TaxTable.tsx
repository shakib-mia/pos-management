import { Edit, Eye, Trash2 } from "lucide-react";

const taxes = [
	{
		id: 1,
		name: "VAT",
		rate: "15%",
		type: "Percent",
		status: "Active",
		products: 132,
		createdAt: "10 Jun 2026",
	},
	{
		id: 2,
		name: "Service Charge",
		rate: "$2.00",
		type: "Fixed",
		status: "Active",
		products: 48,
		createdAt: "14 Jun 2026",
	},
	{
		id: 3,
		name: "Import Duty",
		rate: "8%",
		type: "Percent",
		status: "Inactive",
		products: 21,
		createdAt: "18 Jun 2026",
	},
];

const TaxTable = () => {
	return (
		<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-slate-50">
						<tr className="text-left text-sm font-semibold text-slate-600">
							<th className="px-6 py-4">Tax</th>
							<th className="px-6 py-4">Rate</th>
							<th className="px-6 py-4">Products</th>
							<th className="px-6 py-4">Status</th>
							<th className="px-6 py-4 text-right">Actions</th>
						</tr>
					</thead>

					<tbody>
						{taxes.map((tax) => (
							<tr
								key={tax.id}
								className="border-t border-slate-100 hover:bg-slate-50 transition"
							>
								<td className="px-6 py-4">
									<div>
										<h3 className="font-semibold text-slate-800">
											{tax.name}
										</h3>
										<p className="mt-1 text-sm text-slate-500">
											{tax.type}
										</p>
									</div>
								</td>

								<td className="px-6 py-4 font-medium text-slate-700">
									{tax.rate}
								</td>

								<td className="px-6 py-4 font-semibold text-slate-700">
									{tax.products}
								</td>

								<td className="px-6 py-4">
									<span
										className={`rounded-full px-3 py-1 text-xs font-semibold ${
											tax.status === "Active"
												? "bg-success/10 text-success"
												: "bg-danger/10 text-danger"
										}`}
									>
										{tax.status}
									</span>
								</td>

								<td className="px-6 py-4">
									<div className="flex justify-end gap-2">
										<button className="rounded-lg p-2 hover:bg-slate-100">
											<Eye size={18} />
										</button>

										<button className="rounded-lg p-2 text-primary hover:bg-primary/10">
											<Edit size={18} />
										</button>

										<button className="rounded-lg p-2 text-danger hover:bg-danger/10">
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

export default TaxTable;
