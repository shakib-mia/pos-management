import { useState } from "react";
import { Plus, Search } from "lucide-react";
import BarcodeModal from "../components/BarcodeModal";

const barcodes = [
	{ id: 1, product: "Smartphone X", code: "8932123456789", status: "Active" },
	{
		id: 2,
		product: "Wireless Headphones",
		code: "8932123456790",
		status: "Active",
	},
	{
		id: 3,
		product: "Bluetooth Speaker",
		code: "8932123456791",
		status: "Inactive",
	},
];

const ProductBarcodes = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold text-slate-800">
						Product Barcodes
					</h1>
					<p className="mt-1 text-slate-500">
						Manage product barcode records.
					</p>
				</div>

				<button
					onClick={() => setOpen(true)}
					className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-white transition hover:bg-primary-dark"
				>
					<Plus size={18} />
					Add Barcode
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
						placeholder="Search barcode..."
						className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 focus:border-primary focus:outline-none"
					/>
				</div>
			</div>

			<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
				<div className="overflow-x-auto">
					<table className="min-w-full">
						<thead className="bg-slate-50">
							<tr className="text-left text-sm font-semibold text-slate-600">
								<th className="px-6 py-4">Product</th>
								<th className="px-6 py-4">Barcode</th>
								<th className="px-6 py-4">Status</th>
							</tr>
						</thead>
						<tbody>
							{barcodes.map((item) => (
								<tr
									key={item.id}
									className="border-t border-slate-100 hover:bg-slate-50"
								>
									<td className="px-6 py-4 font-semibold text-slate-800">
										{item.product}
									</td>
									<td className="px-6 py-4 font-mono text-slate-600">
										{item.code}
									</td>
									<td className="px-6 py-4">
										<span
											className={`rounded-full px-3 py-1 text-xs font-semibold ${item.status === "Active" ? "bg-success/10 text-success" : "bg-danger/10 text-danger"}`}
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

			<BarcodeModal open={open} onClose={() => setOpen(false)} />
		</div>
	);
};

export default ProductBarcodes;
