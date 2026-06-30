import { Users, UserRound, MousePointerClick, TrendingUp } from "lucide-react";

const stats = [
	{
		title: "Total Visitors",
		value: "12,548",
		change: "+12.4%",
		icon: Users,
		color: "text-primary",
		bg: "bg-primary/10",
	},
	{
		title: "Today's Visitors",
		value: "328",
		change: "+5.8%",
		icon: MousePointerClick,
		color: "text-success",
		bg: "bg-success/10",
	},
	{
		title: "Unique Visitors",
		value: "8,941",
		change: "+9.2%",
		icon: UserRound,
		color: "text-purple-600",
		bg: "bg-purple-100",
	},
	{
		title: "Bounce Rate",
		value: "32.4%",
		change: "-3.1%",
		icon: TrendingUp,
		color: "text-danger",
		bg: "bg-danger/10",
	},
];

const AnalyticsStats = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
			{stats.map((stat) => {
				const Icon = stat.icon;

				return (
					<div
						key={stat.title}
						className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex items-center justify-between"
					>
						<div>
							<p className="text-sm text-slate-500">
								{stat.title}
							</p>

							<h2 className="mt-2 text-3xl font-bold text-slate-900">
								{stat.value}
							</h2>

							<p
								className={`mt-2 text-sm font-medium ${stat.color}`}
							>
								{stat.change} this month
							</p>
						</div>

						<div
							className={`w-14 h-14 rounded-xl flex items-center justify-center ${stat.bg}`}
						>
							<Icon size={28} className={stat.color} />
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default AnalyticsStats;
