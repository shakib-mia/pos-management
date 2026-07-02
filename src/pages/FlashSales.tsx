import { useState } from "react";
import { Plus, Search } from "lucide-react";
import FlashSaleTable from "../components/FlashSaleTable";
import FlashSaleModal from "../components/FlashSaleModal";

const FlashSales = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold text-slate-800">
						Flash Sales
					</h1>

					<p className="mt-1 text-slate-500">
						Create and manage flash sale campaigns.
					</p>
				</div>

				<button
					onClick={() => setIsModalOpen(true)}
					className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-white hover:bg-primary-dark"
				>
					<Plus size={18} />
					Create Flash Sale
				</button>
			</div>

			<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
				<div className="relative">
					<Search
						size={18}
						className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
					/>

					<input
						type="text"
						placeholder="Search flash sales..."
						className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 outline-none focus:border-primary"
					/>
				</div>
			</div>

			<FlashSaleTable />

			<FlashSaleModal
				open={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</div>
	);
};

export default FlashSales;
