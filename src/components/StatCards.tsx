import {
	Package,
	Users,
	ShoppingCart,
	XCircle,
	RotateCcw,
	DollarSign,
} from "lucide-react";

const stats = [
	{
		label: "Total Products",
		value: "19",
		icon: Package,
		iconBg: "bg-orange-100",
		iconColor: "text-orange-400",
	},
	{
		label: "Total Customers",
		value: "7",
		icon: Users,
		iconBg: "bg-blue-100",
		iconColor: "text-blue-400",
	},
	{
		label: "Total Orders",
		value: "25",
		icon: ShoppingCart,
		iconBg: "bg-gray-100",
		iconColor: "text-gray-500",
	},
	{
		label: "Total Cancel Orders",
		value: "0",
		icon: XCircle,
		iconBg: "bg-pink-100",
		iconColor: "text-pink-400",
	},
	{
		label: "Total Refund Orders",
		value: "0",
		icon: RotateCcw,
		iconBg: "bg-purple-100",
		iconColor: "text-purple-400",
	},
	{
		label: "Total Revenues",
		value: "$0.0",
		icon: DollarSign,
		iconBg: "bg-green-100",
		iconColor: "text-green-500",
	},
];

export default function StatCards() {
	return (
		<>
			{stats.map((stat) => {
				const Icon = stat.icon;
				return (
					<div
						key={stat.label}
						className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col items-center text-center shadow-sm"
					>
						<div
							className={`w-12 h-12 rounded-full ${stat.iconBg} flex items-center justify-center mb-3`}
						>
							<Icon size={22} className={stat.iconColor} />
						</div>
						<p className="text-xs text-gray-500 mb-1">
							{stat.label}
						</p>
						<p className="text-2xl font-bold text-gray-800">
							{stat.value}
						</p>
					</div>
				);
			})}
		</>
	);
}
