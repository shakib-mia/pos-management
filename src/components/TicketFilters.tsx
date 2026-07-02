import { Search } from "lucide-react";

const TicketFilters = () => {
	return (
		<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
			<div className="grid gap-4 lg:grid-cols-5">
				{/* Search */}
				<div className="relative lg:col-span-2">
					<Search
						size={18}
						className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
					/>

					<input
						type="text"
						placeholder="Search ticket, customer..."
						className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 outline-none transition focus:border-primary"
					/>
				</div>

				{/* Status */}
				<select className="rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-primary">
					<option>All Status</option>
					<option>Open</option>
					<option>Pending</option>
					<option>Closed</option>
				</select>

				{/* Priority */}
				<select className="rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-primary">
					<option>All Priority</option>
					<option>Low</option>
					<option>Medium</option>
					<option>High</option>
				</select>

				{/* Category */}
				<select className="rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-primary">
					<option>All Categories</option>
					<option>Order</option>
					<option>Payment</option>
					<option>Delivery</option>
					<option>Product</option>
					<option>Account</option>
				</select>
			</div>
		</div>
	);
};

export default TicketFilters;
