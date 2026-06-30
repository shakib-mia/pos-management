import { useState } from "react";
import {
	LayoutDashboard,
	BarChart2,
	Palette,
	Settings,
	Smartphone,
	Users,
	Truck,
	Package,
	ChevronRight,
	ChevronDown,
} from "lucide-react";
import { NavLink } from "react-router";

const navItems = [
	{
		label: "Dashboard",
		icon: LayoutDashboard,
		path: "/",
	},
	{
		label: "Store Analytics",
		icon: BarChart2,
		path: "/analytics",
	},
	{
		label: "Theme Preview",
		icon: Palette,
		path: "/theme-preview",
	},
	{
		label: "Store Setting",
		icon: Settings,
		path: "/store-setting",
	},
	{
		label: "Mobile App Settings",
		icon: Smartphone,
		path: "/mobile-app-settings",
	},
	{
		label: "Staff",
		icon: Users,
		children: [
			{
				label: "All Staff",
				path: "/staff",
			},
			{
				label: "Add Staff",
				path: "/staff/add",
			},
		],
	},
	{
		label: "Delivery Boy",
		icon: Truck,
		path: "/delivery-boy",
	},
	{
		label: "Products",
		icon: Package,
		children: [
			{
				label: "All Products",
				path: "/products",
			},
			{
				label: "Add Product",
				path: "/products/add",
			},
		],
	},
];

export default function Sidebar() {
	const [expanded, setExpanded] = useState<string | null>("Dashboard");

	return (
		<aside className="h-screen sticky left-0 top-0 w-70 bg-white border-r border-gray-200 flex flex-col z-20">
			{/* Logo */}
			<h1 className="text-xl font-bold text-primary p-4">
				POS Management
			</h1>

			{/* Nav */}
			<nav className="flex-1 overflow-y-auto py-2">
				{navItems.map((item) => {
					const Icon = item.icon;
					const isExpanded = expanded === item.label;
					// const isActive = item.active;

					return (
						<div key={item.label}>
							<NavLink
								to={item.path ?? "#"}
								onClick={() =>
									item.children &&
									setExpanded(isExpanded ? null : item.label)
								}
								className={({ isActive }) =>
									`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors group ${
										isActive
											? "bg-green-50 text-green-600"
											: "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
									}`
								}
							>
								<div className="flex items-center gap-3">
									<Icon size={16} />
									<span className="font-medium">
										{item.label}
									</span>
								</div>

								{item.children &&
									(isExpanded ? (
										<ChevronDown size={14} />
									) : (
										<ChevronRight size={14} />
									))}
							</NavLink>

							{item.children && isExpanded && (
								<div className="bg-gray-50">
									{item.children.map((child) => (
										<NavLink
											key={child.path}
											to={child.path}
											className={({ isActive }) =>
												`flex items-center pl-12 pr-4 py-2 text-sm ${
													isActive
														? "text-green-600 font-medium"
														: "text-gray-500 hover:text-gray-700"
												}`
											}
										>
											<span className="w-1.5 h-1.5 rounded-full bg-current mr-2 opacity-60" />
											{child.label}
										</NavLink>
									))}
								</div>
							)}
						</div>
					);
				})}
			</nav>
		</aside>
	);
}
