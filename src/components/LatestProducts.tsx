import { Eye } from "lucide-react";

interface Product {
	id: number;
	name: string;
	quantity: number;
	price: number;
}

const products: Product[] = [
	{
		id: 1,
		name: "Infinix Hot 11 Play",
		quantity: 199,
		price: 0,
	},
	{
		id: 2,
		name: "Tuna Snacky Pack",
		quantity: 5000,
		price: 326,
	},
	{
		id: 3,
		name: "Tuna Light",
		quantity: 387,
		price: 214,
	},
	{
		id: 4,
		name: "Trix",
		quantity: 552,
		price: 125,
	},
	{
		id: 5,
		name: "Rice Cereal",
		quantity: 366,
		price: 132,
	},
];

export default function LatestProducts() {
	return (
		<div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
			<div className="flex items-center justify-between p-6 border-b border-slate-100">
				<div>
					<h2 className="text-lg font-semibold text-slate-800">
						Latest Products
					</h2>
					<p className="text-sm text-slate-500">
						Recently added inventory
					</p>
				</div>

				<button className="text-primary hover:text-primary-dark text-sm font-medium transition">
					View All
				</button>
			</div>

			<div className="overflow-x-auto">
				<table className="w-full">
					<thead className="bg-slate-50">
						<tr>
							<th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
								Product
							</th>

							<th className="text-center px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
								Quantity
							</th>

							<th className="text-right px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
								Price
							</th>

							<th className="text-center px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
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
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-semibold text-primary">
											{product.name.charAt(0)}
										</div>

										<div>
											<p className="font-medium text-slate-800">
												{product.name}
											</p>

											<p className="text-xs text-slate-500">
												Product #{product.id}
											</p>
										</div>
									</div>
								</td>

								<td className="text-center px-6 py-4">
									<span className="px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
										{product.quantity}
									</span>
								</td>

								<td className="text-right px-6 py-4 font-semibold text-slate-800">
									${product.price.toFixed(2)}
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
}
