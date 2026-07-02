import { Edit, Eye, Trash2 } from "lucide-react";

const labels = [
	{
		id: 1,
		name: "New",
		color: "#2ecc71",
		products: 38,
		status: "Active",
		createdAt: "12 Jun 2026",
	},
	{
		id: 2,
		name: "Sale",
		color: "#e74c3c",
		products: 24,
		status: "Active",
		createdAt: "14 Jun 2026",
	},
	{
		id: 3,
		name: "Featured",
		color: "#f39c12",
		products: 17,
		status: "Inactive",
		createdAt: "20 Jun 2026",
	},
];

const LabelTable = () => {
	return (
		<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-slate-50">
						<tr className="text-left text-sm font-semibold text-slate-600">
							<th className="px-6 py-4">Label</th>
							<th className="px-6 py-4">Products</th>
							<th className="px-6 py-4">Status</th>
							<th className="px-6 py-4">Created</th>
							<th className="px-6 py-4 text-right">Actions</th>
						</tr>
					</thead>

					<tbody>
						{labels.map((label) => (
							<tr
								key={label.id}
								className="border-t border-slate-100 hover:bg-slate-50"
							>
								<td className="px-6 py-4">
									<div className="flex items-center gap-3">
										<span
											className="h-5 w-5 rounded-full border"
											style={{
												background: label.color,
											}}
										/>

										<p className="font-medium">
											{label.name}
										</p>
									</div>
								</td>

								<td className="px-6 py-4">{label.products}</td>

								<td className="px-6 py-4">
									<span
										className={`rounded-full px-3 py-1 text-xs font-semibold ${
											label.status === "Active"
												? "bg-success/10 text-success"
												: "bg-danger/10 text-danger"
										}`}
									>
										{label.status}
									</span>
								</td>

								<td className="px-6 py-4">{label.createdAt}</td>

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

export default LabelTable;
