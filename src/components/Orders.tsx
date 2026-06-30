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
	{ day: "23 Jun", orders: 0 },
	{ day: "24 Jun", orders: 0.5 },
	{ day: "25 Jun", orders: 1 },
	{ day: "26 Jun", orders: 2.5 },
	{ day: "27 Jun", orders: 1.5 },
	{ day: "28 Jun", orders: 3 },
	{ day: "29 Jun", orders: 1 },
];

export default function OrdersChart() {
	return (
		<div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-full col-span-2">
			<h3 className="font-semibold text-gray-700 mb-4">Orders</h3>
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
						dataKey="orders"
						stroke="#22c55e"
						strokeWidth={2}
						dot={{ fill: "#22c55e", r: 3 }}
						activeDot={{ r: 5 }}
					/>
				</LineChart>
			</ResponsiveContainer>
			<p className="text-center text-xs text-gray-400 mt-1">Days</p>
		</div>
	);
}
