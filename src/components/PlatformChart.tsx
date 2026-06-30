import {
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const data = [
	{ platform: "Windows", visitors: 520 },
	{ platform: "Android", visitors: 410 },
	{ platform: "iOS", visitors: 260 },
	{ platform: "macOS", visitors: 180 },
	{ platform: "Linux", visitors: 70 },
];

const PlatformChart = () => {
	return (
		<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
			<div className="mb-6">
				<h2 className="text-lg font-semibold">Platforms</h2>

				<p className="text-sm text-slate-500">
					Visitors by operating system
				</p>
			</div>

			<div className="h-72">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={data}>
						<CartesianGrid strokeDasharray="3 3" />

						<XAxis dataKey="platform" />

						<YAxis />

						<Tooltip />

						<Bar
							dataKey="visitors"
							fill="#3498db"
							radius={[8, 8, 0, 0]}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default PlatformChart;
