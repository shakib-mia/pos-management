import { Edit, Eye, Trash2 } from "lucide-react";

const brands = [
	{
		id: 1,
		name: "Apple",
		logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
		products: 42,
		status: "Active",
		createdAt: "12 Jun 2026",
	},
	{
		id: 2,
		name: "Samsung",
		logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
		products: 31,
		status: "Active",
		createdAt: "15 Jun 2026",
	},
	{
		id: 3,
		name: "Sony",
		logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
		products: 17,
		status: "Inactive",
		createdAt: "18 Jun 2026",
	},
];

const BrandTable = () => {
	return (
		<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-slate-50">
						<tr className="text-left text-sm font-semibold text-slate-600">
							<th className="px-6 py-4">Brand</th>
							<th className="px-6 py-4">Products</th>
							<th className="px-6 py-4">Status</th>
							<th className="px-6 py-4">Created</th>
							<th className="px-6 py-4 text-right">Actions</th>
						</tr>
					</thead>

					<tbody>
						{brands.map((brand) => (
							<tr
								key={brand.id}
								className="border-t border-slate-100 hover:bg-slate-50"
							>
								<td className="px-6 py-4">
									<div className="flex items-center gap-4">
										<div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-white">
											<img
												src={brand.logo}
												alt={brand.name}
												className="h-8 w-8 object-contain"
											/>
										</div>

										<div>
											<p className="font-medium text-slate-800">
												{brand.name}
											</p>

											<p className="text-sm text-slate-500">
												Brand
											</p>
										</div>
									</div>
								</td>

								<td className="px-6 py-4 font-medium">
									{brand.products}
								</td>

								<td className="px-6 py-4">
									<span
										className={`rounded-full px-3 py-1 text-xs font-semibold ${
											brand.status === "Active"
												? "bg-success/10 text-success"
												: "bg-danger/10 text-danger"
										}`}
									>
										{brand.status}
									</span>
								</td>

								<td className="px-6 py-4 text-slate-500">
									{brand.createdAt}
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
					Showing {brands.length} brands
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

export default BrandTable;
