import { Edit, Eye, Trash2 } from "lucide-react";

const attributes = [
	{
		id: 1,
		name: "Color",
		values: ["Red", "Blue", "Black", "White"],
		status: "Active",
		products: 42,
		createdAt: "18 Jun 2026",
	},
	{
		id: 2,
		name: "Size",
		values: ["S", "M", "L", "XL"],
		status: "Active",
		products: 28,
		createdAt: "20 Jun 2026",
	},
	{
		id: 3,
		name: "Storage",
		values: ["64GB", "128GB", "256GB"],
		status: "Inactive",
		products: 16,
		createdAt: "22 Jun 2026",
	},
];

const AttributeTable = () => {
	return (
		<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-slate-50">
						<tr className="text-left text-sm font-semibold text-slate-600">
							<th className="px-6 py-4">Attribute</th>
							<th className="px-6 py-4">Values</th>
							<th className="px-6 py-4">Products</th>
							<th className="px-6 py-4">Status</th>
							<th className="px-6 py-4 text-right">Actions</th>
						</tr>
					</thead>

					<tbody>
						{attributes.map((attribute) => (
							<tr
								key={attribute.id}
								className="border-t border-slate-100 hover:bg-slate-50 transition"
							>
								<td className="px-6 py-4">
									<div>
										<h3 className="font-semibold text-slate-800">
											{attribute.name}
										</h3>
										<p className="mt-1 text-sm text-slate-500">
											Attribute
										</p>
									</div>
								</td>

								<td className="px-6 py-4">
									<div className="flex flex-wrap gap-2">
										{attribute.values.map(
											(value, index) => (
												<span
													key={`${attribute.id}-${value}-${index}`}
													className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
												>
													{value}
												</span>
											),
										)}
									</div>
								</td>

								<td className="px-6 py-4 font-semibold text-slate-700">
									{attribute.products}
								</td>

								<td className="px-6 py-4">
									<span
										className={`rounded-full px-3 py-1 text-xs font-semibold ${
											attribute.status === "Active"
												? "bg-success/10 text-success"
												: "bg-danger/10 text-danger"
										}`}
									>
										{attribute.status}
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

export default AttributeTable;
