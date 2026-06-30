import React from "react";

interface Product {
	name: string;
	category: string;
	image: string;
	variant: string;
	review: number;
	price: number;
	stockStatus: "In stock" | "Out of stock";
	stockQuantity: number;
}

const topProductsData: Product[] = [
	{
		name: "Orange-fruit",
		category: "Fruits",
		image: "https://images.unsplash.com/photo-1611080626919-7b5144bb9b52?w=100&auto=format&fit=crop",
		variant: "no variant",
		review: 0,
		price: 60.0,
		stockStatus: "In stock",
		stockQuantity: 0,
	},
	{
		name: "Azuki beans bowl",
		category: "Beans",
		image: "https://images.unsplash.com/photo-1515562141107-af6b2b4e695a?w=100&auto=format&fit=crop",
		variant: "no variant",
		review: 0,
		price: 20.0,
		stockStatus: "In stock",
		stockQuantity: 0,
	},
	{
		name: "Grocery Master App",
		category: "Grocery Master App",
		image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=100&auto=format&fit=crop",
		variant: "no variant",
		review: 0,
		price: 110.0,
		stockStatus: "In stock",
		stockQuantity: 0,
	},
	{
		name: "Trix",
		category: "Grocery Master App",
		image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&auto=format&fit=crop",
		variant: "no variant",
		review: 0,
		price: 125.0,
		stockStatus: "In stock",
		stockQuantity: 0,
	},
];

export const TopSellingProducts: React.FC = () => {
	return (
		<div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-6 mt-6 col-span-4">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-lg font-semibold bg-amber-100/50 text-amber-900 px-3 py-1 rounded">
					Top Selling Products
				</h2>
				<button className="text-sm font-medium text-emerald-600 hover:bg-emerald-50 px-3 py-1 rounded-md transition-colors">
					View All
				</button>
			</div>

			<div className="overflow-x-auto">
				<table className="w-full text-left border-collapse">
					<thead>
						<tr className="bg-emerald-50/50 text-emerald-900 text-xs font-semibold uppercase tracking-wider border-b border-emerald-100">
							<th className="py-3 px-4 rounded-tl-lg">Name</th>
							<th className="py-3 px-4">Category</th>
							<th className="py-3 px-4">Cover Image</th>
							<th className="py-3 px-4">Variant</th>
							<th className="py-3 px-4">Review</th>
							<th className="py-3 px-4">Price</th>
							<th className="py-3 px-4">Stock Status</th>
							<th className="py-3 px-4 rounded-tr-lg">
								Stock Quantity
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-50 text-sm">
						{topProductsData.map((product, index) => (
							<tr
								key={index}
								className="hover:bg-gray-50/50 transition-colors"
							>
								<td className="py-3 px-4 font-medium text-gray-800 whitespace-nowrap">
									{product.name}
								</td>
								<td className="py-3 px-4 text-gray-600 whitespace-nowrap">
									{product.category}
								</td>
								<td className="py-3 px-4 whitespace-nowrap">
									<img
										src={product.image}
										alt={product.name}
										className="w-10 h-10 object-cover rounded-md border border-gray-200 shadow-sm"
									/>
								</td>
								<td className="py-3 px-4 text-gray-500 whitespace-nowrap">
									{product.variant}
								</td>
								<td className="py-3 px-4 whitespace-nowrap">
									<div className="flex items-center text-amber-500">
										☆{" "}
										<span className="ml-1 text-gray-600">
											{product.review}
										</span>
									</div>
								</td>
								<td className="py-3 px-4 text-gray-800 font-medium whitespace-nowrap">
									${product.price.toFixed(1)}
								</td>
								<td className="py-3 px-4 whitespace-nowrap">
									<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700">
										{product.stockStatus}
									</span>
								</td>
								<td className="py-3 px-4 text-gray-600 whitespace-nowrap text-center">
									{product.stockQuantity || "."}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
