import {
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	Legend,
} from "recharts";

const data = [
	{
		day: "23 Jun",
		customer: 1,
		guest: 2,
	},
	{
		day: "24 Jun",
		customer: 3,
		guest: 1,
	},
	{
		day: "25 Jun",
		customer: 2,
		guest: 4,
	},
	{
		day: "26 Jun",
		customer: 5,
		guest: 2,
	},
	{
		day: "27 Jun",
		customer: 4,
		guest: 3,
	},
	{
		day: "28 Jun",
		customer: 6,
		guest: 1,
	},
	{
		day: "29 Jun",
		customer: 5,
		guest: 2,
	},
];

export default function CustomerChart() {
	return (
		<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
			<div className="flex items-center justify-between mb-6">
				<div>
					<h2 className="text-lg font-semibold text-slate-800">
						Customer vs Guest
					</h2>

					<p className="text-sm text-slate-500">
						Last 7 days comparison
					</p>
				</div>

				<button className="text-primary hover:underline text-sm font-medium">
					View All
				</button>
			</div>

			<div className="h-80">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={data}>
						<CartesianGrid
							strokeDasharray="3 3"
							vertical={false}
							stroke="#e5e7eb"
						/>

						<XAxis
							dataKey="day"
							axisLine={false}
							tickLine={false}
							tick={{ fontSize: 12 }}
						/>

						<YAxis
							axisLine={false}
							tickLine={false}
							tick={{ fontSize: 12 }}
						/>

						<Tooltip />

						<Legend />

						<Bar
							dataKey="customer"
							name="Customer"
							fill="#3498db"
							radius={[6, 6, 0, 0]}
						/>

						<Bar
							dataKey="guest"
							name="Guest"
							fill="#2ecc71"
							radius={[6, 6, 0, 0]}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
