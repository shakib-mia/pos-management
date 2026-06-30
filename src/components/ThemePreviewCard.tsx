export default function ThemePreviewCard() {
	return (
		<div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden h-full flex flex-col col-span-2 row-span-2">
			{/* Theme screenshot preview */}
			<div className="flex-1 bg-linear-to-br from-yellow-50 to-orange-50 relative overflow-hidden min-h-32">
				{/* Simulated grocery store UI */}
				<div
					className="absolute inset-0 p-2 scale-90 origin-top-left"
					style={{ transform: "scale(0.55) translate(-2%, -2%)" }}
				>
					<div className="bg-white rounded shadow-sm p-2 mb-1">
						<div className="flex gap-1 items-center mb-1">
							<div className="w-8 h-2 bg-green-400 rounded" />
							<div className="w-12 h-2 bg-gray-200 rounded" />
							<div className="w-10 h-2 bg-gray-200 rounded" />
						</div>
					</div>
					<div className="grid grid-cols-3 gap-1 mb-1">
						{[
							"bg-yellow-300",
							"bg-green-300",
							"bg-orange-300",
							"bg-red-300",
							"bg-blue-300",
							"bg-purple-300",
						].map((c, i) => (
							<div
								key={i}
								className={`${c} rounded h-10 flex items-center justify-center`}
							>
								<div className="w-4 h-4 bg-white/50 rounded-full" />
							</div>
						))}
					</div>
					<div className="bg-amber-400 rounded p-2 mb-1">
						<div className="w-16 h-2 bg-white/70 rounded mb-1" />
						<div className="w-10 h-2 bg-white/50 rounded" />
					</div>
					<div className="grid grid-cols-2 gap-1">
						{[1, 2, 3, 4].map((i) => (
							<div key={i} className="bg-gray-100 rounded p-1">
								<div className="w-full h-8 bg-gray-200 rounded mb-1" />
								<div className="w-3/4 h-1.5 bg-gray-300 rounded" />
							</div>
						))}
					</div>
				</div>
				{/* Watermark */}
				<div className="absolute bottom-2 right-2 text-6xl font-black text-gray-200 select-none pointer-events-none">
					G
				</div>
			</div>

			{/* Footer */}
			<div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
				<div>
					<p className="text-xs font-medium text-gray-700">Demo</p>
					<p className="text-xs text-gray-400">Store</p>
				</div>
				<div className="flex gap-2">
					<button className="text-xs border border-green-500 text-green-600 px-3 py-1.5 rounded hover:bg-green-50 transition-colors">
						Customize
					</button>
					<button className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded transition-colors">
						Manage Themes
					</button>
				</div>
			</div>
		</div>
	);
}
