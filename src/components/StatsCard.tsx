import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
	title: string;
	value: string | number;
	icon: LucideIcon;
	color?: "primary" | "success" | "danger";
}

const colorClasses = {
	primary: {
		bg: "bg-primary/10",
		text: "text-primary",
	},
	success: {
		bg: "bg-success/10",
		text: "text-success",
	},
	danger: {
		bg: "bg-danger/10",
		text: "text-danger",
	},
};

export default function StatsCard({
	title,
	value,
	icon: Icon,
	color = "primary",
}: StatsCardProps) {
	const styles = colorClasses[color];

	return (
		<div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all duration-300">
			<div className="flex items-start justify-between">
				<div>
					<p className="text-sm text-slate-500">{title}</p>

					<h2 className="mt-2 text-3xl font-bold text-slate-900">
						{value}
					</h2>
				</div>

				<div
					className={`w-12 h-12 rounded-xl flex items-center justify-center ${styles.bg}`}
				>
					<Icon className={`w-6 h-6 ${styles.text}`} />
				</div>
			</div>
		</div>
	);
}
