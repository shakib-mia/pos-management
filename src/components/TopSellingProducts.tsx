import { Eye, Star } from "lucide-react";

interface Product {
	id: number;
	name: string;
	category: string;
	image: string;
	variant: string;
	review: number;
	price: number;
	stock: number;
}

const products: Product[] = [
	{
		id: 1,
		name: "Orange Fruit",
		category: "Fruits",
		image: "https://placehold.co/80x80",
		variant: "No Variant",
		review: 4.8,
		price: 60,
		stock: 120,
	},
	{
		id: 2,
		name: "Azuki Beans Bowl",
		category: "Beans",
		image: "https://placehold.co/80x80",
		variant: "No Variant",
		review: 4.5,
		price: 20,
		stock: 82,
	},
	{
		id: 3,
		name: "Trix",
		category: "Snacks",
		image: "https://placehold.co/80x80",
		variant: "500gm",
		review: 4.7,
		price: 125,
		stock: 45,
	},
	{
		id: 4,
		name: "Rice Cereal",
		category: "Grocery",
		image: "https://placehold.co/80x80",
		variant: "1kg",
		review: 4.2,
		price: 132,
		stock: 220,
	},
	{
		id: 5,
		name: "Tuna Light",
		category: "Sea Food",
		image: "https://placehold.co/80x80",
		variant: "250gm",
		review: 4.9,
		price: 214,
		stock: 37,
	},
	{
		id: 5,
		name: "Tuna Light",
		category: "Sea Food",
		image: "https://placehold.co/80x80",
		variant: "250gm",
		review: 4.9,
		price: 214,
		stock: 37,
	},
	{
		id: 5,
		name: "Tuna Light",
		category: "Sea Food",
		image: "https://placehold.co/80x80",
		variant: "250gm",
		review: 4.9,
		price: 214,
		stock: 37,
	},
	{
		id: 5,
		name: "Tuna Light",
		category: "Sea Food",
		image: "https://placehold.co/80x80",
		variant: "250gm",
		review: 4.9,
		price: 214,
		stock: 37,
	},
	{
		id: 5,
		name: "Tuna Light",
		category: "Sea Food",
		image: "https://placehold.co/80x80",
		variant: "250gm",
		review: 4.9,
		price: 214,
		stock: 37,
	},
];

const TopSellingProducts = () => {
	return (
		<div className="bg-white rounded-2xl border border-slate-200 shadow-sm h-full row-span-2 overflow-y-auto">
			<div className="flex items-center justify-between p-6 border-b border-slate-100">
				<div>
					<h2 className="text-lg font-semibold text-slate-800">
						Top Selling Products
					</h2>

					<p className="text-sm text-slate-500">
						Best performing products
					</p>
				</div>

				<button className="text-primary hover:text-primary-dark text-sm font-medium">
					View All
				</button>
			</div>

			<div className="overflow-x-auto">
				<table className="w-full min-w-275">
					<thead className="bg-slate-50">
						<tr>
							<th className="px-6 py-4 text-left text-xs uppercase text-slate-500">
								Product
							</th>

							<th className="px-6 py-4 text-left text-xs uppercase text-slate-500">
								Category
							</th>

							<th className="px-6 py-4 text-center text-xs uppercase text-slate-500">
								Image
							</th>

							<th className="px-6 py-4 text-center text-xs uppercase text-slate-500">
								Variant
							</th>

							<th className="px-6 py-4 text-center text-xs uppercase text-slate-500">
								Review
							</th>

							<th className="px-6 py-4 text-right text-xs uppercase text-slate-500">
								Price
							</th>

							<th className="px-6 py-4 text-center text-xs uppercase text-slate-500">
								Stock
							</th>

							<th className="px-6 py-4 text-center text-xs uppercase text-slate-500">
								Action
							</th>
						</tr>
					</thead>

					<tbody>
						{products.map((product) => (
							<tr
								key={product.id}
								className="border-t border-slate-100 hover:bg-slate-50 transition"
							>
								<td className="px-6 py-4">
									<p className="font-semibold text-slate-800">
										{product.name}
									</p>
								</td>

								<td className="px-6 py-4 text-slate-600">
									{product.category}
								</td>

								<td className="px-6 py-4">
									<div className="flex justify-center">
										<img
											src={product.image}
											alt={product.name}
											className="w-14 h-14 rounded-lg object-cover border"
										/>
									</div>
								</td>

								<td className="px-6 py-4 text-center text-slate-600">
									{product.variant}
								</td>

								<td className="px-6 py-4">
									<div className="flex justify-center items-center gap-1 text-yellow-500">
										<Star size={16} fill="currentColor" />
										<span className="font-medium text-slate-700">
											{product.review}
										</span>
									</div>
								</td>

								<td className="px-6 py-4 text-right font-semibold">
									${product.price.toFixed(2)}
								</td>

								<td className="px-6 py-4">
									<div className="flex justify-center">
										<span
											className={`px-3 py-1 rounded-full text-xs font-semibold ${
												product.stock > 50
													? "bg-success/10 text-success"
													: product.stock > 10
														? "bg-yellow-100 text-yellow-700"
														: "bg-danger/10 text-danger"
											}`}
										>
											{product.stock}
										</span>
									</div>
								</td>

								<td className="px-6 py-4">
									<div className="flex justify-center">
										<button className="w-9 h-9 rounded-lg border border-slate-200 hover:border-primary hover:bg-primary/10 transition flex items-center justify-center">
											<Eye
												size={18}
												className="text-slate-600"
											/>
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

export default TopSellingProducts;
