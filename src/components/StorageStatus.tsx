export default function StorageStatus() {
	const used = 0.73;
	// const total = 100;
	const percentage = used;

	// SVG semi-circle gauge
	const radius = 70;
	const cx = 90;
	const cy = 90;
	const circumference = Math.PI * radius;
	const filledLength = (percentage / 100) * circumference;

	return (
		<div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-full flex flex-col col-span-2">
			<h3 className="font-semibold text-gray-700 mb-2">
				Storage Status{" "}
				<span className="text-xs font-normal text-gray-400">
					(36.6MB / 5000MB)
				</span>
			</h3>

			<div className="flex-1 flex flex-col items-center justify-center">
				<div className="relative">
					<svg width="180" height="110" viewBox="0 0 180 110">
						{/* Background arc */}
						<path
							d={`M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`}
							fill="none"
							stroke="#f0fdf4"
							strokeWidth="14"
							strokeLinecap="round"
						/>
						{/* Filled arc */}
						<path
							d={`M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`}
							fill="none"
							stroke="#22c55e"
							strokeWidth="14"
							strokeLinecap="round"
							strokeDasharray={`${filledLength} ${circumference}`}
							opacity="0.8"
						/>
					</svg>
					<div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
						<span className="text-2xl font-bold text-gray-800">
							{used}%
						</span>
						<span className="text-xs text-green-500 font-medium">
							Used
						</span>
					</div>
				</div>

				{/* Legend */}
				<div className="flex items-center gap-4 mt-2">
					<div className="flex items-center gap-1.5">
						<div className="w-3 h-3 rounded-full bg-green-400" />
						<span className="text-xs text-gray-500">
							Used Space
						</span>
					</div>
					<div className="flex items-center gap-1.5">
						<div className="w-3 h-3 rounded-full bg-green-100" />
						<span className="text-xs text-gray-500">
							Free Space
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
