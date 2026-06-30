const products = [
	{
		name: "Infinix hot 11 play",
		qty: 199,
		price: "0.00",
		color: "bg-blue-400",
	},
	{
		name: "Tuna Snacky Pack",
		qty: 5000,
		price: "326.00",
		color: "bg-red-400",
	},
	{ name: "Tuna Light", qty: 387, price: "214.00", color: "bg-orange-400" },
	{ name: "Trix", qty: 552, price: "125.00", color: "bg-pink-400" },
	{ name: "Rice Cereal", qty: 366, price: "132.00", color: "bg-yellow-400" },
];

export default function LatestProducts() {
	return (
		<div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden col-span-2">
			<div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
				<h3 className="font-semibold text-gray-700">Latest Products</h3>
				<button className="text-xs text-green-600 hover:text-green-700 border border-green-500 px-3 py-1 rounded hover:bg-green-50 transition-colors">
					View All
				</button>
			</div>
			<table className="w-full text-sm">
				<thead>
					<tr className="bg-green-50">
						<th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
							Product
						</th>
						<th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
							Quantity
						</th>
						<th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
							Price
						</th>
					</tr>
				</thead>
				<tbody>
					{products.map((p, i) => (
						<tr
							key={i}
							className="border-t border-gray-50 hover:bg-gray-50 transition-colors"
						>
							<td className="px-5 py-3">
								<div className="flex items-center gap-3">
									<div
										className={`w-8 h-8 rounded-md ${p.color} opacity-80 shrink-0`}
									/>
									<span className="text-gray-700 font-medium">
										{p.name}
									</span>
								</div>
							</td>
							<td className="px-5 py-3 text-gray-600">{p.qty}</td>
							<td className="px-5 py-3 text-gray-600">
								{p.price}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
