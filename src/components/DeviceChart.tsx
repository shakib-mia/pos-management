import {
	Cell,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
} from "recharts";

const data = [
	{ name: "Desktop", value: 64 },
	{ name: "Mobile", value: 28 },
	{ name: "Tablet", value: 8 },
];

const COLORS = ["#3498db", "#2ecc71", "#e74c3c"];

const DeviceChart = () => {
	return (
		<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
			<div className="mb-6">
				<h2 className="text-lg font-semibold text-slate-900">
					Devices
				</h2>

				<p className="text-sm text-slate-500">
					Visitors by device type
				</p>
			</div>

			<div className="h-72">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart>
						<Pie
							data={data}
							dataKey="value"
							nameKey="name"
							innerRadius={70}
							outerRadius={100}
							paddingAngle={3}
						>
							{data.map((_, index) => (
								<Cell key={index} fill={COLORS[index]} />
							))}
						</Pie>

						<Tooltip />
						<Legend verticalAlign="bottom" />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default DeviceChart;
