import { Edit, Eye, Trash2 } from "lucide-react";
import { RxAvatar } from "react-icons/rx";

const deliveryBoys = [
	{
		id: 1,
		fullName: "John Doe",
		email: "john@example.com",
		phone: "+8801712345678",
		vehicle: "Bike",
		vehicleNumber: "CTG-M-11-2233",
		totalOrders: 156,
		status: "Active",
	},
	{
		id: 2,
		fullName: "Alex Brown",
		email: "alex@example.com",
		phone: "+8801811122233",
		vehicle: "Bicycle",
		vehicleNumber: "N/A",
		totalOrders: 82,
		status: "Busy",
	},
	{
		id: 3,
		fullName: "Michael Smith",
		email: "michael@example.com",
		phone: "+8801912345678",
		vehicle: "Bike",
		vehicleNumber: "DHK-X-9921",
		totalOrders: 215,
		status: "Inactive",
	},
];

const statusClasses = {
	Active: "bg-success/10 text-success",
	Busy: "bg-yellow-100 text-yellow-700",
	Inactive: "bg-danger/10 text-danger",
	Offline: "bg-slate-100 text-slate-600",
};

const DeliveryBoyTable = () => {
	return (
		<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-slate-50">
						<tr className="text-left text-sm font-semibold text-slate-600">
							<th className="px-6 py-4">Delivery Boy</th>
							<th className="px-6 py-4">Phone</th>
							<th className="px-6 py-4">Vehicle</th>
							<th className="px-6 py-4">Orders</th>
							<th className="px-6 py-4">Status</th>
							<th className="px-6 py-4 text-right">Actions</th>
						</tr>
					</thead>

					<tbody>
						{deliveryBoys.map((boy) => (
							<tr
								key={boy.id}
								className="border-t border-slate-100 hover:bg-slate-50"
							>
								<td className="px-6 py-4">
									<div className="flex items-center gap-3">
										<RxAvatar className="text-4xl text-slate-400" />

										<div>
											<p className="font-medium text-slate-800">
												{boy.fullName}
											</p>

											<p className="text-sm text-slate-500">
												{boy.email}
											</p>
										</div>
									</div>
								</td>

								<td className="px-6 py-4 text-slate-600">
									{boy.phone}
								</td>

								<td className="px-6 py-4">
									<div>
										<p className="font-medium">
											{boy.vehicle}
										</p>

										<p className="text-xs text-slate-500">
											{boy.vehicleNumber}
										</p>
									</div>
								</td>

								<td className="px-6 py-4 font-medium">
									{boy.totalOrders}
								</td>

								<td className="px-6 py-4">
									<span
										className={`rounded-full px-3 py-1 text-xs font-semibold ${
											statusClasses[
												boy.status as keyof typeof statusClasses
											]
										}`}
									>
										{boy.status}
									</span>
								</td>

								<td className="px-6 py-4">
									<div className="flex justify-end gap-2">
										<button className="rounded-lg p-2 text-slate-600 hover:bg-slate-100">
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
					Showing {deliveryBoys.length} delivery boys
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

export default DeliveryBoyTable;
