import { Search } from "lucide-react";

const orders = [
	{ id: "#1001", customer: "Nadia", total: "$124.00", status: "Completed" },
	{ id: "#1002", customer: "Rafi", total: "$88.50", status: "Processing" },
	{ id: "#1003", customer: "Mina", total: "$210.00", status: "Pending" },
];

const Orders = () => {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold text-slate-800">Orders</h1>
				<p className="mt-1 text-slate-500">
					Manage customer orders and delivery status.
				</p>
			</div>

			<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
				<div className="relative">
					<Search
						size={18}
						className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
					/>
					<input
						type="text"
						placeholder="Search order..."
						className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 focus:border-primary focus:outline-none"
					/>
				</div>
			</div>

			<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
				<div className="overflow-x-auto">
					<table className="min-w-full">
						<thead className="bg-slate-50">
							<tr className="text-left text-sm font-semibold text-slate-600">
								<th className="px-6 py-4">Order ID</th>
								<th className="px-6 py-4">Customer</th>
								<th className="px-6 py-4">Total</th>
								<th className="px-6 py-4">Status</th>
							</tr>
						</thead>
						<tbody>
							{orders.map((order) => (
								<tr
									key={order.id}
									className="border-t border-slate-100 hover:bg-slate-50"
								>
									<td className="px-6 py-4 font-semibold text-slate-800">
										{order.id}
									</td>
									<td className="px-6 py-4 text-slate-600">
										{order.customer}
									</td>
									<td className="px-6 py-4 text-slate-600">
										{order.total}
									</td>
									<td className="px-6 py-4">
										<span
											className={`rounded-full px-3 py-1 text-xs font-semibold ${order.status === "Completed" ? "bg-success/10 text-success" : order.status === "Processing" ? "bg-primary/10 text-primary" : "bg-danger/10 text-danger"}`}
										>
											{order.status}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Orders;
