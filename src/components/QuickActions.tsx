import { Plus, Package, ShoppingCart, Users, Settings } from "lucide-react";

const actions = [
	{
		title: "Add Product",
		icon: Package,
		color: "bg-primary/10 text-primary",
	},
	{
		title: "New Order",
		icon: ShoppingCart,
		color: "bg-success/10 text-success",
	},
	{
		title: "Add Customer",
		icon: Users,
		color: "bg-yellow-100 text-yellow-700",
	},
	{
		title: "Settings",
		icon: Settings,
		color: "bg-slate-100 text-slate-700",
	},
];

export default function QuickActions() {
	return (
		<div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
			<div className="flex items-center justify-between mb-6">
				<div>
					<h2 className="text-lg font-semibold text-slate-800">
						Quick Actions
					</h2>

					<p className="text-sm text-slate-500">Common shortcuts</p>
				</div>

				<button className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition">
					<Plus size={20} />
				</button>
			</div>

			<div className="grid grid-cols-2 gap-4">
				{actions.map((action) => {
					const Icon = action.icon;

					return (
						<button
							key={action.title}
							className="border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-primary transition text-left group"
						>
							<div
								className={`w-12 h-12 rounded-xl flex items-center justify-center ${action.color}`}
							>
								<Icon size={22} />
							</div>

							<h3 className="mt-4 font-semibold text-slate-800 group-hover:text-primary">
								{action.title}
							</h3>

							<p className="text-sm text-slate-500 mt-1">
								Open {action.title.toLowerCase()}
							</p>
						</button>
					);
				})}
			</div>
		</div>
	);
}
