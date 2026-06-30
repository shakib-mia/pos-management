import {
	Cell,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
} from "recharts";

const data = [
	{ name: "Chrome", value: 71 },
	{ name: "Safari", value: 14 },
	{ name: "Firefox", value: 8 },
	{ name: "Edge", value: 5 },
	{ name: "Others", value: 2 },
];

const COLORS = ["#3498db", "#2ecc71", "#f39c12", "#9b59b6", "#95a5a6"];

const BrowserChart = () => {
	return (
		<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
			<div className="mb-6">
				<h2 className="text-lg font-semibold">Browsers</h2>

				<p className="text-sm text-slate-500">Visitors by browser</p>
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

export default BrowserChart;
