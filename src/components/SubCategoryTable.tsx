import { Edit, Eye, Trash2 } from "lucide-react";

const subCategories = [
	{
		id: 1,
		name: "Smartphones",
		parentCategory: "Electronics",
		description: "Mobile phones and accessories.",
		products: 42,
		status: "Active",
		createdAt: "12 Jun 2026",
		image: "https://picsum.photos/60?1",
	},
	{
		id: 2,
		name: "Women Clothing",
		parentCategory: "Fashion",
		description: "Dresses, tops, and accessories.",
		products: 30,
		status: "Active",
		createdAt: "15 Jun 2026",
		image: "https://picsum.photos/60?2",
	},
	{
		id: 3,
		name: "Organic Foods",
		parentCategory: "Groceries",
		description: "Health foods and organic options.",
		products: 18,
		status: "Inactive",
		createdAt: "18 Jun 2026",
		image: "https://picsum.photos/60?3",
	},
];

const SubCategoryTable = () => {
	return (
		<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-slate-50">
						<tr className="text-left text-sm font-semibold text-slate-600">
							<th className="px-6 py-4">Sub Category</th>
							<th className="px-6 py-4">Parent Category</th>
							<th className="px-6 py-4">Products</th>
							<th className="px-6 py-4">Status</th>
							<th className="px-6 py-4">Created</th>
							<th className="px-6 py-4 text-right">Actions</th>
						</tr>
					</thead>

					<tbody>
						{subCategories.map((subcategory) => (
							<tr
								key={subcategory.id}
								className="border-t border-slate-100 hover:bg-slate-50 transition"
							>
								<td className="px-6 py-4">
									<div className="flex items-center gap-4">
										<img
											src={subcategory.image}
											alt={subcategory.name}
											className="h-14 w-14 rounded-lg border border-slate-200 object-cover"
										/>

										<div>
											<h3 className="font-semibold text-slate-800">
												{subcategory.name}
											</h3>

											<p className="text-sm text-slate-500">
												Sub Category
											</p>
										</div>
									</div>
								</td>

								<td className="px-6 py-4 text-slate-700">
									{subcategory.parentCategory}
								</td>

								<td className="px-6 py-4 font-semibold text-slate-700">
									{subcategory.products}
								</td>

								<td className="px-6 py-4">
									<span
										className={`rounded-full px-3 py-1 text-xs font-semibold ${
											subcategory.status === "Active"
												? "bg-success/10 text-success"
												: "bg-danger/10 text-danger"
										}`}
									>
										{subcategory.status}
									</span>
								</td>

								<td className="px-6 py-4 text-slate-500">
									{subcategory.createdAt}
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
					Showing {subCategories.length} sub categories
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

export default SubCategoryTable;
