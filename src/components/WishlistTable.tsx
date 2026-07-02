import { Eye, Trash2 } from "lucide-react";

const wishlists = [
	{
		id: 1,
		customer: "John Doe",
		email: "john@example.com",
		product: "iPhone 16 Pro",
		category: "Smartphones",
		price: "$999",
		date: "20 Jul 2026",
	},

	{
		id: 2,
		customer: "Sarah Smith",
		email: "sarah@example.com",
		product: "Nike Air Max",
		category: "Shoes",
		price: "$180",
		date: "18 Jul 2026",
	},

	{
		id: 3,
		customer: "Michael Brown",
		email: "michael@example.com",
		product: "Sony WH-1000XM6",
		category: "Electronics",
		price: "$420",
		date: "17 Jul 2026",
	},

	{
		id: 4,
		customer: "Emily Davis",
		email: "emily@example.com",
		product: "Gaming Chair",
		category: "Furniture",
		price: "$280",
		date: "15 Jul 2026",
	},
];

const WishlistTable = () => {
	return (
		<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-slate-50">
						<tr className="text-left text-sm font-semibold text-slate-600">
							<th className="px-6 py-4">Customer</th>

							<th className="px-6 py-4">Product</th>

							<th className="px-6 py-4">Category</th>

							<th className="px-6 py-4">Price</th>

							<th className="px-6 py-4">Added On</th>

							<th className="px-6 py-4 text-right">Actions</th>
						</tr>
					</thead>

					<tbody>
						{wishlists.map((item) => (
							<tr
								key={item.id}
								className="border-t border-slate-100 hover:bg-slate-50"
							>
								<td className="px-6 py-4">
									<div>
										<p className="font-medium text-slate-800">
											{item.customer}
										</p>

										<p className="text-sm text-slate-500">
											{item.email}
										</p>
									</div>
								</td>

								<td className="px-6 py-4 font-medium">
									{item.product}
								</td>

								<td className="px-6 py-4 text-slate-600">
									{item.category}
								</td>

								<td className="px-6 py-4 font-semibold text-success">
									{item.price}
								</td>

								<td className="px-6 py-4 text-slate-500">
									{item.date}
								</td>

								<td className="px-6 py-4">
									<div className="flex justify-end gap-2">
										<button className="rounded-lg p-2 hover:bg-slate-100">
											<Eye size={18} />
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
					Showing {wishlists.length} wishlist items
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

export default WishlistTable;
