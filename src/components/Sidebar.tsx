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
	Megaphone,
	LifeBuoy,
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
		label: "Staffs",
		icon: Users,
		children: [
			{
				label: "All Staffs",
				path: "/staffs",
			},
			{
				label: "Add Staff",
				path: "/staffs/add",
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
			// {
			// 	label: "Products",
			// 	path: "/products",
			// },
			{
				label: "Main Categories",
				path: "/products/main-categories",
			},
			{
				label: "Sub Categories",
				path: "/products/sub-categories",
			},
			{
				label: "Brands",
				path: "/products/brands",
			},
			{
				label: "Labels",
				path: "/products/labels",
			},
			{
				label: "Attributes",
				path: "/products/attributes",
			},
			{
				label: "Taxes",
				path: "/products/taxes",
			},
			{
				label: "Shelves",
				path: "/products/shelves",
			},
			{
				label: "Testimonials",
				path: "/products/testimonials",
			},
			{
				label: "Questions & Answers",
				path: "/products/questions",
			},
			{
				label: "Product Barcodes",
				path: "/products/barcodes",
			},
		],
	},
	{
		label: "Shipping",
		icon: Truck,
		children: [
			{
				label: "Shipping Classes",
				path: "/shipping/classes",
			},
			{
				label: "Shipping Zones",
				path: "/shipping/zones",
			},
		],
	},
	{
		label: "Orders",
		icon: Package,
		children: [
			{
				label: "Orders",
				path: "/orders",
			},
			{
				label: "Order Refund Requests",
				path: "/orders/refund-requests",
			},
		],
	},
	{
		label: "Customers",
		icon: Users,
		path: "/customers",
	},
	{
		label: "Support Tickets",
		icon: LifeBuoy,
		path: "/support-tickets",
	},
	{
		label: "Reports",
		icon: BarChart2,
		children: [
			{
				label: "Customer Reports",
				path: "/reports/customer-reports",
			},
			{
				label: "Order Reports",
				children: [
					{
						label: "Sales Reports",
						path: "/reports/order-reports/sales",
					},
					{
						label: "Sales Product Reports",
						path: "/reports/order-reports/sales-products",
					},
					{
						label: "Sales Category Report",
						path: "/reports/order-reports/sales-categories",
					},
					{
						label: "Sales Downloadable Reports",
						path: "/reports/order-reports/sales-downloadables",
					},
				],
			},
			{
				label: "Stock Reports",
				path: "/reports/stock-reports",
			},
		],
	},
	{
		label: "Marketing",
		icon: Megaphone,
		children: [
			{
				label: "Coupons",
				path: "/marketing/coupons",
			},
			{
				label: "Flash Sales",
				path: "/marketing/flash-sales",
			},
			{
				label: "Newsletters",
				path: "/marketing/newsletters",
			},
			{
				label: "Wishlists",
				path: "/marketing/wishlists",
			},
			{
				label: "Abandoned Carts",
				path: "/marketing/abandoned-carts",
			},
		],
	},
];

export default function Sidebar() {
	const [expanded, setExpanded] = useState<string[]>(["Dashboard"]);

	const toggleExpanded = (label: string) => {
		setExpanded((prev) =>
			prev.includes(label)
				? prev.filter((item) => item !== label)
				: [...prev, label],
		);
	};

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
					const isExpanded = expanded.includes(item.label);
					const isActive = item.path
						? window.location.pathname === item.path
						: false;

					return (
						<div key={item.label}>
							<NavLink
								to={item.path ?? "#"}
								onClick={(e) => {
									if (item.children) {
										e.preventDefault();
										toggleExpanded(item.label);
									}
								}}
								className={() =>
									`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors group active:bg-gray-50 active:text-green-600 ${
										isActive
											? "bg-green-50 text-green-600"
											: "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
									}`
								}
							>
								<div className="flex items-center gap-3">
									{Icon && <Icon size={16} />}
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
									{item.children.map((child) => {
										const childIsExpanded =
											expanded.includes(child.label);
										const childIsActive = child.path
											? window.location.pathname ===
												child.path
											: false;

										return (
											<div key={child.label}>
												<NavLink
													to={child.path ?? "#"}
													onClick={(e) => {
														if (child.children) {
															e.preventDefault();
															toggleExpanded(
																child.label,
															);
														}
													}}
													className={() =>
														`flex items-center justify-between pl-10 pr-4 py-2 text-sm ${
															childIsActive
																? "text-green-600 font-medium"
																: "text-gray-500 hover:text-gray-700"
														}`
													}
												>
													<div className="flex items-center gap-2">
														<span className="w-1.5 h-1.5 rounded-full bg-current mr-1 opacity-60" />
														{child.label}
													</div>
													{child.children &&
														(childIsExpanded ? (
															<ChevronDown
																size={12}
															/>
														) : (
															<ChevronRight
																size={12}
															/>
														))}
												</NavLink>
												{child.children &&
													childIsExpanded && (
														<div className="pl-6">
															{child.children.map(
																(
																	grandChild,
																) => (
																	<NavLink
																		key={
																			grandChild.label
																		}
																		to={
																			grandChild.path ??
																			"#"
																		}
																		className={() =>
																			`flex items-center pl-6 pr-4 py-2 text-sm ${
																				window
																					.location
																					.pathname ===
																				grandChild.path
																					? "text-green-600 font-medium"
																					: "text-gray-500 hover:text-gray-700"
																			}`
																		}
																	>
																		<span className="w-1.5 h-1.5 rounded-full bg-current mr-2 opacity-60" />
																		{
																			grandChild.label
																		}
																	</NavLink>
																),
															)}
														</div>
													)}
											</div>
										);
									})}
								</div>
							)}
						</div>
					);
				})}
			</nav>
		</aside>
	);
}
