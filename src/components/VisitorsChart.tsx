import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const data = [
	{ day: "Mon", visitors: 120 },
	{ day: "Tue", visitors: 180 },
	{ day: "Wed", visitors: 240 },
	{ day: "Thu", visitors: 210 },
	{ day: "Fri", visitors: 290 },
	{ day: "Sat", visitors: 340 },
	{ day: "Sun", visitors: 310 },
];

const VisitorsChart = () => {
	return (
		<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
			<div className="flex items-center justify-between mb-6">
				<div>
					<h2 className="text-lg font-semibold text-slate-900">
						Visitors
					</h2>
					<p className="text-sm text-slate-500">
						Last 7 days traffic
					</p>
				</div>

				<select className="border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none">
					<option>Last 7 Days</option>
					<option>Last 30 Days</option>
					<option>Last 90 Days</option>
				</select>
			</div>

			<div className="h-80">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={data}>
						<CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

						<XAxis dataKey="day" />

						<YAxis />

						<Tooltip />

						<Line
							type="monotone"
							dataKey="visitors"
							stroke="#3498db"
							strokeWidth={3}
							dot={{ r: 4 }}
							activeDot={{ r: 6 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default VisitorsChart;
