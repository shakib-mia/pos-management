import React from "react";

interface Order {
	id: string;
	date: string;
	name: string;
	value: number;
	paymentType: string;
	status: "Pending" | "Completed" | "Failed";
}

const recentOrdersData: Order[] = [
	{
		id: "#1742884736",
		date: "Mar 25, 2025",
		name: "Walk-in-customer",
		value: 120.0,
		paymentType: "POS",
		status: "Pending",
	},
	{
		id: "#320241114072594",
		date: "Nov 14, 2024",
		name: "Walk-in-customer",
		value: 250.0,
		paymentType: "Stripe",
		status: "Pending",
	},
	{
		id: "#320241114071136",
		date: "Nov 14, 2024",
		name: "Walk-in-customer",
		value: 120.0,
		paymentType: "Stripe",
		status: "Pending",
	},
	{
		id: "#320241114061125",
		date: "Nov 14, 2024",
		name: "Walk-in-customer",
		value: 375.0,
		paymentType: "Stripe",
		status: "Pending",
	},
	{
		id: "#320241114051522",
		date: "Nov 14, 2024",
		name: "Walk-in-customer",
		value: 125.0,
		paymentType: "Stripe",
		status: "Pending",
	},
];

export const RecentOrders: React.FC = () => {
	return (
		<div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-6 col-span-4">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-lg font-semibold text-gray-800">
					Recent Orders
				</h2>
				<button className="text-sm font-medium text-emerald-600 hover:bg-emerald-50 px-3 py-1 rounded-md transition-colors">
					View All
				</button>
			</div>

			<div className="overflow-x-auto">
				<table className="w-full text-left border-collapse">
					<thead>
						<tr className="bg-emerald-50/50 text-emerald-900 text-xs font-semibold uppercase tracking-wider border-b border-emerald-100">
							<th className="py-3 px-4 rounded-tl-lg">Orders</th>
							<th className="py-3 px-4">Date</th>
							<th className="py-3 px-4">Name</th>
							<th className="py-3 px-4">Value</th>
							<th className="py-3 px-4">Payment Type</th>
							<th className="py-3 px-4 rounded-tr-lg">Status</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-50 text-sm">
						{recentOrdersData.map((order) => (
							<tr
								key={order.id}
								className="hover:bg-gray-50/50 transition-colors"
							>
								<td className="py-3 px-4 font-medium text-indigo-600 whitespace-nowrap">
									{order.id}
								</td>
								<td className="py-3 px-4 text-gray-600 whitespace-nowrap">
									{order.date}
								</td>
								<td className="py-3 px-4 text-gray-700 whitespace-nowrap">
									{order.name}
								</td>
								<td className="py-3 px-4 text-gray-800 font-medium whitespace-nowrap">
									${order.value.toFixed(1)}
								</td>
								<td className="py-3 px-4 text-gray-600 whitespace-nowrap">
									{order.paymentType}
								</td>
								<td className="py-3 px-4 whitespace-nowrap">
									<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-50 text-cyan-700 border border-cyan-100">
										{order.status} : {order.date}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
