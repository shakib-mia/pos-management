import { Eye, CircleDollarSign, CreditCard, Clock3 } from "lucide-react";

interface Order {
	id: string;
	date: string;
	customer: string;
	total: number;
	payment: "POS" | "Stripe" | "Cash";
	status: "Pending" | "Completed" | "Cancelled";
}

const orders: Order[] = [
	{
		id: "#1742884736",
		date: "Mar 25, 2025",
		customer: "Walk-in Customer",
		total: 120,
		payment: "POS",
		status: "Pending",
	},
	{
		id: "#320241114072594",
		date: "Nov 14, 2024",
		customer: "Walk-in Customer",
		total: 250,
		payment: "Stripe",
		status: "Pending",
	},
	{
		id: "#320241114071136",
		date: "Nov 14, 2024",
		customer: "Walk-in Customer",
		total: 120,
		payment: "Stripe",
		status: "Completed",
	},
	{
		id: "#320241114061125",
		date: "Nov 14, 2024",
		customer: "Walk-in Customer",
		total: 375,
		payment: "Stripe",
		status: "Completed",
	},
	{
		id: "#320241114051522",
		date: "Nov 14, 2024",
		customer: "Walk-in Customer",
		total: 125,
		payment: "Cash",
		status: "Cancelled",
	},
];

const paymentIcon = {
	POS: CircleDollarSign,
	Stripe: CreditCard,
	Cash: CircleDollarSign,
};

const statusColor = {
	Pending: "bg-yellow-100 text-yellow-700",
	Completed: "bg-success/10 text-success",
	Cancelled: "bg-danger/10 text-danger",
};

export default function RecentOrders() {
	return (
		<div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
			<div className="flex items-center justify-between p-6 border-b border-slate-100">
				<div>
					<h2 className="text-lg font-semibold text-slate-800">
						Recent Orders
					</h2>

					<p className="text-sm text-slate-500">
						Latest customer orders
					</p>
				</div>

				<button className="text-primary font-medium hover:text-primary-dark">
					View All
				</button>
			</div>

			<div className="overflow-x-auto">
				<table className="w-full min-w-[900px]">
					<thead className="bg-slate-50">
						<tr>
							<th className="px-6 py-4 text-left text-xs uppercase text-slate-500">
								Order
							</th>

							<th className="px-6 py-4 text-left text-xs uppercase text-slate-500">
								Date
							</th>

							<th className="px-6 py-4 text-left text-xs uppercase text-slate-500">
								Customer
							</th>

							<th className="px-6 py-4 text-right text-xs uppercase text-slate-500">
								Total
							</th>

							<th className="px-6 py-4 text-center text-xs uppercase text-slate-500">
								Payment
							</th>

							<th className="px-6 py-4 text-center text-xs uppercase text-slate-500">
								Status
							</th>

							<th className="px-6 py-4 text-center text-xs uppercase text-slate-500">
								Action
							</th>
						</tr>
					</thead>

					<tbody>
						{orders.map((order) => {
							const PaymentIcon = paymentIcon[order.payment];

							return (
								<tr
									key={order.id}
									className="border-t border-slate-100 hover:bg-slate-50 transition"
								>
									<td className="px-6 py-4">
										<p className="font-semibold text-slate-800">
											{order.id}
										</p>
									</td>

									<td className="px-6 py-4">
										<div className="flex items-center gap-2 text-slate-600">
											<Clock3 size={15} />
											{order.date}
										</div>
									</td>

									<td className="px-6 py-4">
										{order.customer}
									</td>

									<td className="px-6 py-4 text-right font-semibold">
										${order.total.toFixed(2)}
									</td>

									<td className="px-6 py-4">
										<div className="flex justify-center">
											<div className="flex items-center gap-2 bg-slate-100 rounded-full px-3 py-1">
												<PaymentIcon size={16} />
												<span className="text-sm">
													{order.payment}
												</span>
											</div>
										</div>
									</td>

									<td className="px-6 py-4">
										<div className="flex justify-center">
											<span
												className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[order.status]}`}
											>
												{order.status}
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
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
