import { Search } from "lucide-react";
import AbandonedCartTable from "../components/AbandonedCartTable";

const AbandonedCarts = () => {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold text-slate-800">
					Abandoned Carts
				</h1>

				<p className="mt-1 text-slate-500">
					Track customers who left items in their cart without
					completing checkout.
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
						placeholder="Search customer..."
						className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 outline-none transition focus:border-primary"
					/>
				</div>
			</div>

			<AbandonedCartTable />
		</div>
	);
};

export default AbandonedCarts;
