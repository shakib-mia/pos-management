import { Eye, Mail, ShoppingCart, Trash2 } from "lucide-react";

const carts = [
	{
		id: 1,
		customer: "John Doe",
		email: "john@example.com",
		items: 3,
		total: "$245.00",
		lastActivity: "20 Jul 2026 10:45 AM",
		status: "Pending",
	},

	{
		id: 2,
		customer: "Sarah Smith",
		email: "sarah@example.com",
		items: 1,
		total: "$89.00",
		lastActivity: "19 Jul 2026 08:20 PM",
		status: "Recovered",
	},

	{
		id: 3,
		customer: "Michael Brown",
		email: "michael@example.com",
		items: 5,
		total: "$540.00",
		lastActivity: "18 Jul 2026 05:10 PM",
		status: "Pending",
	},

	{
		id: 4,
		customer: "Emily Davis",
		email: "emily@example.com",
		items: 2,
		total: "$160.00",
		lastActivity: "17 Jul 2026 11:00 AM",
		status: "Expired",
	},
];

const AbandonedCartTable = () => {
	return (
		<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-slate-50">
						<tr className="text-left text-sm font-semibold text-slate-600">
							<th className="px-6 py-4">Customer</th>

							<th className="px-6 py-4">Cart</th>

							<th className="px-6 py-4">Items</th>

							<th className="px-6 py-4">Cart Value</th>

							<th className="px-6 py-4">Last Activity</th>

							<th className="px-6 py-4">Status</th>

							<th className="px-6 py-4 text-right">Actions</th>
						</tr>
					</thead>

					<tbody>
						{carts.map((cart) => (
							<tr
								key={cart.id}
								className="border-t border-slate-100 hover:bg-slate-50"
							>
								<td className="px-6 py-4">
									<div>
										<p className="font-medium text-slate-800">
											{cart.customer}
										</p>

										<p className="text-sm text-slate-500">
											{cart.email}
										</p>
									</div>
								</td>

								<td className="px-6 py-4">
									<div className="flex items-center gap-2">
										<ShoppingCart
											size={18}
											className="text-primary"
										/>
										Cart #{cart.id}
									</div>
								</td>

								<td className="px-6 py-4">{cart.items}</td>

								<td className="px-6 py-4 font-semibold text-success">
									{cart.total}
								</td>

								<td className="px-6 py-4 text-sm text-slate-500">
									{cart.lastActivity}
								</td>

								<td className="px-6 py-4">
									<span
										className={`rounded-full px-3 py-1 text-xs font-semibold ${
											cart.status === "Recovered"
												? "bg-success/10 text-success"
												: cart.status === "Pending"
													? "bg-yellow-100 text-yellow-700"
													: "bg-danger/10 text-danger"
										}`}
									>
										{cart.status}
									</span>
								</td>

								<td className="px-6 py-4">
									<div className="flex justify-end gap-2">
										<button
											className="rounded-lg p-2 hover:bg-slate-100"
											title="View Cart"
										>
											<Eye size={18} />
										</button>

										<button
											className="rounded-lg p-2 text-primary hover:bg-primary/10"
											title="Send Recovery Email"
										>
											<Mail size={18} />
										</button>

										<button
											className="rounded-lg p-2 text-danger hover:bg-danger/10"
											title="Delete Cart"
										>
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
					Showing {carts.length} abandoned carts
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

export default AbandonedCartTable;
