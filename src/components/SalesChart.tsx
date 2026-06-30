import {
	ResponsiveContainer,
	AreaChart,
	Area,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
} from "recharts";

const data = [
	{ day: "23 Jun", orders: 0.2 },
	{ day: "24 Jun", orders: 0.8 },
	{ day: "25 Jun", orders: 1.4 },
	{ day: "26 Jun", orders: 2.3 },
	{ day: "27 Jun", orders: 1.9 },
	{ day: "28 Jun", orders: 2.8 },
	{ day: "29 Jun", orders: 3.0 },
];

export default function SalesChart() {
	return (
		<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
			<div className="flex items-center justify-between mb-6">
				<div>
					<h2 className="text-lg font-semibold text-slate-800">
						Orders
					</h2>

					<p className="text-sm text-slate-500">
						Last 7 days overview
					</p>
				</div>

				<button className="text-primary hover:underline text-sm font-medium">
					View All
				</button>
			</div>

			<div className="h-80">
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart data={data}>
						<defs>
							<linearGradient
								id="ordersGradient"
								x1="0"
								y1="0"
								x2="0"
								y2="1"
							>
								<stop
									offset="5%"
									stopColor="#3498db"
									stopOpacity={0.4}
								/>

								<stop
									offset="95%"
									stopColor="#3498db"
									stopOpacity={0}
								/>
							</linearGradient>
						</defs>

						<CartesianGrid
							strokeDasharray="3 3"
							vertical={false}
							stroke="#e5e7eb"
						/>

						<XAxis
							dataKey="day"
							tick={{ fontSize: 12 }}
							axisLine={false}
							tickLine={false}
						/>

						<YAxis
							tick={{ fontSize: 12 }}
							axisLine={false}
							tickLine={false}
						/>

						<Tooltip />

						<Area
							type="monotone"
							dataKey="orders"
							stroke="#3498db"
							strokeWidth={3}
							fill="url(#ordersGradient)"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
