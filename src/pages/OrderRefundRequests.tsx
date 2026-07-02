import { Search } from "lucide-react";

const refundRequests = [
	{
		id: "#R-101",
		orderId: "#1001",
		customer: "Nadia",
		reason: "Damaged item",
		status: "Pending",
	},
	{
		id: "#R-102",
		orderId: "#1002",
		customer: "Rafi",
		reason: "Wrong size",
		status: "Approved",
	},
	{
		id: "#R-103",
		orderId: "#1003",
		customer: "Mina",
		reason: "Not as described",
		status: "Rejected",
	},
];

const OrderRefundRequests = () => {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold text-slate-800">
					Order Refund Requests
				</h1>
				<p className="mt-1 text-slate-500">
					Review and manage refund requests from customers.
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
						placeholder="Search refund request..."
						className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 focus:border-primary focus:outline-none"
					/>
				</div>
			</div>

			<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
				<div className="overflow-x-auto">
					<table className="min-w-full">
						<thead className="bg-slate-50">
							<tr className="text-left text-sm font-semibold text-slate-600">
								<th className="px-6 py-4">Refund ID</th>
								<th className="px-6 py-4">Order ID</th>
								<th className="px-6 py-4">Customer</th>
								<th className="px-6 py-4">Reason</th>
								<th className="px-6 py-4">Status</th>
							</tr>
						</thead>
						<tbody>
							{refundRequests.map((item) => (
								<tr
									key={item.id}
									className="border-t border-slate-100 hover:bg-slate-50"
								>
									<td className="px-6 py-4 font-semibold text-slate-800">
										{item.id}
									</td>
									<td className="px-6 py-4 text-slate-600">
										{item.orderId}
									</td>
									<td className="px-6 py-4 text-slate-600">
										{item.customer}
									</td>
									<td className="px-6 py-4 text-slate-600">
										{item.reason}
									</td>
									<td className="px-6 py-4">
										<span
											className={`rounded-full px-3 py-1 text-xs font-semibold ${item.status === "Approved" ? "bg-success/10 text-success" : item.status === "Pending" ? "bg-primary/10 text-primary" : "bg-danger/10 text-danger"}`}
										>
											{item.status}
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

export default OrderRefundRequests;
