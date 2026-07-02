import { MessageSquare, Clock3, CheckCircle2, AlertCircle } from "lucide-react";

const stats = [
	{
		title: "Total Tickets",
		value: 124,
		icon: MessageSquare,
		iconBg: "bg-primary/10",
		iconColor: "text-primary",
	},
	{
		title: "Open Tickets",
		value: 18,
		icon: AlertCircle,
		iconBg: "bg-danger/10",
		iconColor: "text-danger",
	},
	{
		title: "Pending Tickets",
		value: 9,
		icon: Clock3,
		iconBg: "bg-yellow-100",
		iconColor: "text-yellow-600",
	},
	{
		title: "Closed Tickets",
		value: 97,
		icon: CheckCircle2,
		iconBg: "bg-success/10",
		iconColor: "text-success",
	},
];

const TicketStats = () => {
	return (
		<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
			{stats.map((stat) => {
				const Icon = stat.icon;

				return (
					<div
						key={stat.title}
						className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
					>
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm font-medium text-slate-500">
									{stat.title}
								</p>

								<h2 className="mt-2 text-3xl font-bold text-slate-800">
									{stat.value}
								</h2>
							</div>

							<div
								className={`flex h-14 w-14 items-center justify-center rounded-xl ${stat.iconBg}`}
							>
								<Icon size={28} className={stat.iconColor} />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default TicketStats;
