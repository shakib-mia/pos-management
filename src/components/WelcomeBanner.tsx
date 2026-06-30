import { Plus, ChevronDown } from "lucide-react";

export default function WelcomeBanner() {
	return (
		<div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-start justify-between h-full col-span-2">
			<div className="flex-1">
				<p className="text-gray-500 text-sm mb-1">Good Evening,</p>
				<div className="flex items-center gap-2 mb-3">
					<div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
						<span className="text-green-600 text-xs font-bold">
							D
						</span>
					</div>
					<h2 className="text-lg font-bold text-gray-800">
						Demo Admin
					</h2>
				</div>
				<p className="text-sm text-gray-500 mb-4 leading-relaxed max-w-xs">
					Have a nice day! Did you know that you can quickly add your
					favorite product or category to the theme?
				</p>
				<button className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
					<Plus size={14} />
					Quick add
					<ChevronDown size={14} />
				</button>
			</div>

			<div className="flex flex-col items-center gap-2 ml-4">
				<p className="text-xs text-gray-500 font-medium">Demo Store</p>
				{/* QR Code placeholder */}
				<div className="w-20 h-20 bg-gray-100 rounded-lg grid grid-cols-5 gap-0.5 p-1.5">
					{Array.from({ length: 25 }).map((_, i) => (
						<div
							key={i}
							className={`rounded-sm ${
								[
									0, 1, 2, 5, 6, 10, 12, 14, 18, 19, 20, 22,
									24, 3, 7, 15, 21, 23, 4, 8, 16,
								].includes(i)
									? "bg-gray-800"
									: "bg-white"
							}`}
						/>
					))}
				</div>
				<div className="flex items-center gap-2 mt-1">
					<button className="text-xs text-green-600 border border-green-500 px-3 py-1 rounded hover:bg-green-50 transition-colors">
						Theme Link
					</button>
					<button className="w-6 h-6 rounded bg-green-500 flex items-center justify-center">
						<svg
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="white"
						>
							<path
								d="M1 6h10M6 1l5 5-5 5"
								stroke="white"
								strokeWidth="1.5"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}
