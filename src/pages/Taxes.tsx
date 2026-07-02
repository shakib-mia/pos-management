import { useState } from "react";
import { Plus, Search } from "lucide-react";
import TaxTable from "../components/TaxTable";
import TaxModal from "../components/TaxModal";

const Taxes = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold text-slate-800">Taxes</h1>
					<p className="mt-1 text-slate-500">
						Manage product taxes and rates.
					</p>
				</div>

				<button
					onClick={() => setOpen(true)}
					className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-white transition hover:bg-primary-dark"
				>
					<Plus size={18} />
					Add Tax
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
						placeholder="Search tax..."
						className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 focus:border-primary focus:outline-none"
					/>
				</div>
			</div>

			<TaxTable />

			<TaxModal open={open} onClose={() => setOpen(false)} />
		</div>
	);
};

export default Taxes;
