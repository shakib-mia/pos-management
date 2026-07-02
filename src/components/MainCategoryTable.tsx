import { Edit, Eye, Trash2 } from "lucide-react";

const categories = [
	{
		id: 1,
		name: "Electronics",
		image: "https://picsum.photos/60?1",
		description: "Phones, laptops and electronic accessories.",
		products: 134,
		status: "Active",
		createdAt: "12 Jun 2026",
	},
	{
		id: 2,
		name: "Fashion",
		image: "https://picsum.photos/60?2",
		description: "Clothing, shoes and fashion accessories.",
		products: 87,
		status: "Active",
		createdAt: "15 Jun 2026",
	},
	{
		id: 3,
		name: "Groceries",
		image: "https://picsum.photos/60?3",
		description: "Daily grocery and household essentials.",
		products: 56,
		status: "Inactive",
		createdAt: "18 Jun 2026",
	},
];

const MainCategoryTable = () => {
	return (
		<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-slate-50">
						<tr className="text-left text-sm font-semibold text-slate-600">
							<th className="px-6 py-4">Category</th>
							<th className="px-6 py-4">Description</th>
							<th className="px-6 py-4">Products</th>
							<th className="px-6 py-4">Status</th>
							<th className="px-6 py-4">Created</th>
							<th className="px-6 py-4 text-right">Actions</th>
						</tr>
					</thead>

					<tbody>
						{categories.map((category) => (
							<tr
								key={category.id}
								className="border-t border-slate-100 hover:bg-slate-50 transition"
							>
								<td className="px-6 py-4">
									<div className="flex items-center gap-4">
										<img
											src={category.image}
											alt={category.name}
											className="h-14 w-14 rounded-lg border border-slate-200 object-cover"
										/>

										<div>
											<h3 className="font-semibold text-slate-800">
												{category.name}
											</h3>

											<p className="text-sm text-slate-500">
												Main Category
											</p>
										</div>
									</div>
								</td>

								<td className="max-w-sm px-6 py-4 text-sm text-slate-600">
									<p className="line-clamp-2">
										{category.description}
									</p>
								</td>

								<td className="px-6 py-4 font-semibold text-slate-700">
									{category.products}
								</td>

								<td className="px-6 py-4">
									<span
										className={`rounded-full px-3 py-1 text-xs font-semibold ${
											category.status === "Active"
												? "bg-success/10 text-success"
												: "bg-danger/10 text-danger"
										}`}
									>
										{category.status}
									</span>
								</td>

								<td className="px-6 py-4 text-slate-500">
									{category.createdAt}
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

			<div className="flex items-center justify-between border-t border-slate-200 px-6 py-4">
				<p className="text-sm text-slate-500">
					Showing {categories.length} categories
				</p>

				<div className="flex gap-2">
					<button className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-100">
						Previous
					</button>

					<button className="rounded-lg bg-primary px-4 py-2 text-sm text-white">
						1
					</button>

					<button className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-100">
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default MainCategoryTable;
