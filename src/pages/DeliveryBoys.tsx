import { useState } from "react";
import { Plus, Search } from "lucide-react";
import DeliveryBoyTable from "../components/DeliveryBoyTable";
import DeliveryBoyModal from "../components/DeliveryBoyModal";

const DeliveryBoys = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div>
					<h1 className="text-3xl font-bold text-slate-800">
						Delivery Boys
					</h1>

					<p className="mt-1 text-slate-500">
						Manage all delivery boys from one place.
					</p>
				</div>

				<button
					onClick={() => setIsModalOpen(true)}
					className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-medium text-white transition hover:bg-primary-dark"
				>
					<Plus size={18} />
					Add Delivery Boy
				</button>
			</div>

			{/* Filters */}
			<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
				<div className="grid gap-4 md:grid-cols-3">
					<div className="relative md:col-span-2">
						<Search
							size={18}
							className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
						/>

						<input
							type="text"
							placeholder="Search delivery boy..."
							className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 focus:border-primary focus:outline-none"
						/>
					</div>

					<select className="rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none">
						<option>All Status</option>
						<option>Active</option>
						<option>Busy</option>
						<option>Inactive</option>
						<option>Offline</option>
					</select>
				</div>
			</div>

			{/* Table */}
			<DeliveryBoyTable />

			{/* Modal */}
			<DeliveryBoyModal
				open={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</div>
	);
};

export default DeliveryBoys;
