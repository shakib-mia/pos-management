import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ day: "23 Jun", customers: 0, guests: 0 },
	{ day: "24 Jun", customers: 0.3, guests: 0.1 },
	{ day: "25 Jun", customers: 0.8, guests: 0.2 },
	{ day: "26 Jun", customers: 2, guests: 0.5 },
	{ day: "27 Jun", customers: 1.2, guests: 1.5 },
	{ day: "28 Jun", customers: 2.5, guests: 0.8 },
	{ day: "29 Jun", customers: 1, guests: 0.3 },
];

export default function CustomerGuestChart() {
	return (
		<div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-full col-span-2">
			<div className="flex items-center justify-between mb-4">
				<h3 className="font-semibold text-gray-700">
					Customer Vs Guest
				</h3>
				<button className="text-xs text-green-600 hover:text-green-700 border border-green-500 px-3 py-1 rounded hover:bg-green-50 transition-colors">
					View All
				</button>
			</div>
			<ResponsiveContainer width="100%" height={180}>
				<LineChart
					data={data}
					margin={{ top: 5, right: 10, bottom: 5, left: -20 }}
				>
					<CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
					<XAxis
						dataKey="day"
						tick={{ fontSize: 10, fill: "#9ca3af" }}
						axisLine={false}
						tickLine={false}
					/>
					<YAxis
						tick={{ fontSize: 10, fill: "#9ca3af" }}
						axisLine={false}
						tickLine={false}
						domain={[0, 3]}
					/>
					<Tooltip
						contentStyle={{
							borderRadius: "8px",
							border: "1px solid #e5e7eb",
							fontSize: "12px",
						}}
					/>
					<Line
						type="monotone"
						dataKey="customers"
						stroke="#22c55e"
						strokeWidth={2}
						dot={false}
						name="Customers"
					/>
					<Line
						type="monotone"
						dataKey="guests"
						stroke="#f59e0b"
						strokeWidth={2}
						dot={false}
						name="Guests"
					/>
				</LineChart>
			</ResponsiveContainer>
			<p className="text-center text-xs text-gray-400 mt-1">Days</p>
		</div>
	);
}
