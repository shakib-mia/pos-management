import { Edit, Eye, Trash2 } from "lucide-react";

const coupons = [
	{
		id: 1,
		code: "WELCOME10",
		type: "Percentage",
		value: "10%",
		minimumOrder: "$50",
		usageLimit: 100,
		used: 28,
		expiresAt: "31 Jul 2026",
		status: "Active",
	},
	{
		id: 2,
		code: "SAVE20",
		type: "Fixed",
		value: "$20",
		minimumOrder: "$150",
		usageLimit: 50,
		used: 42,
		expiresAt: "15 Aug 2026",
		status: "Active",
	},
	{
		id: 3,
		code: "FLASH50",
		type: "Percentage",
		value: "50%",
		minimumOrder: "$300",
		usageLimit: 20,
		used: 20,
		expiresAt: "01 Jun 2026",
		status: "Expired",
	},
];

const CouponTable = () => {
	return (
		<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-slate-50">
						<tr className="text-left text-sm font-semibold text-slate-600">
							<th className="px-6 py-4">Coupon</th>
							<th className="px-6 py-4">Discount</th>
							<th className="px-6 py-4">Minimum Order</th>
							<th className="px-6 py-4">Usage</th>
							<th className="px-6 py-4">Expires</th>
							<th className="px-6 py-4">Status</th>
							<th className="px-6 py-4 text-right">Actions</th>
						</tr>
					</thead>

					<tbody>
						{coupons.map((coupon) => (
							<tr
								key={coupon.id}
								className="border-t border-slate-100 hover:bg-slate-50 transition"
							>
								<td className="px-6 py-4">
									<div>
										<h3 className="font-semibold text-slate-800">
											{coupon.code}
										</h3>

										<p className="text-sm text-slate-500">
											{coupon.type} Discount
										</p>
									</div>
								</td>

								<td className="px-6 py-4 font-semibold text-primary">
									{coupon.value}
								</td>

								<td className="px-6 py-4 text-slate-600">
									{coupon.minimumOrder}
								</td>

								<td className="px-6 py-4">
									<div>
										<p className="font-medium">
											{coupon.used}/{coupon.usageLimit}
										</p>

										<div className="mt-2 h-2 w-28 overflow-hidden rounded-full bg-slate-200">
											<div
												className="h-full rounded-full bg-success"
												style={{
													width: `${(coupon.used / coupon.usageLimit) * 100}%`,
												}}
											/>
										</div>
									</div>
								</td>

								<td className="px-6 py-4 text-slate-600">
									{coupon.expiresAt}
								</td>

								<td className="px-6 py-4">
									<span
										className={`rounded-full px-3 py-1 text-xs font-semibold ${
											coupon.status === "Active"
												? "bg-success/10 text-success"
												: "bg-danger/10 text-danger"
										}`}
									>
										{coupon.status}
									</span>
								</td>

								<td className="px-6 py-4">
									<div className="flex justify-end gap-2">
										<button className="rounded-lg p-2 hover:bg-slate-100">
											<Eye size={18} />
										</button>

										<button className="rounded-lg p-2 text-primary hover:bg-primary/10">
											<Edit size={18} />
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
					Showing {coupons.length} coupons
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

export default CouponTable;
