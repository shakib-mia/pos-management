import { Database } from "lucide-react";

interface StorageCardProps {
	used: number;
	total: number;
}

export default function StorageStatus({ used, total }: StorageCardProps) {
	const percentage = Number(((used / total) * 100).toFixed(2));

	return (
		<div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
			<div className="flex items-center gap-3 mb-6">
				<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
					<Database className="text-primary" size={24} />
				</div>

				<div>
					<h2 className="font-semibold text-slate-800">
						Storage Status
					</h2>

					<p className="text-sm text-slate-500">
						{used} MB / {total} MB
					</p>
				</div>
			</div>

			<div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
				<div
					className="h-full bg-primary rounded-full transition-all duration-500"
					style={{
						width: `${percentage}%`,
					}}
				/>
			</div>

			<div className="flex justify-between mt-2 text-sm text-slate-500">
				<span>{percentage}% Used</span>
				<span>{(total - used).toFixed(2)} MB Free</span>
			</div>

			<div className="grid grid-cols-2 gap-4 mt-6">
				<div className="rounded-xl bg-primary/5 p-4">
					<p className="text-sm text-slate-500">Used Space</p>

					<h3 className="mt-1 text-xl font-bold text-primary">
						{used} MB
					</h3>
				</div>

				<div className="rounded-xl bg-success/5 p-4">
					<p className="text-sm text-slate-500">Free Space</p>

					<h3 className="mt-1 text-xl font-bold text-success">
						{(total - used).toFixed(2)} MB
					</h3>
				</div>
			</div>
		</div>
	);
}
