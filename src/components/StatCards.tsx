// import React from "react";

import {
	Package,
	Users,
	ShoppingCart,
	DollarSign,
	XCircle,
	RotateCcw,
} from "lucide-react";
import StatsCard from "./StatsCard";

const StatCards = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
			<StatsCard
				title="Total Products"
				value={19}
				icon={Package}
				color="primary"
			/>

			<StatsCard
				title="Total Customers"
				value={7}
				icon={Users}
				color="success"
			/>

			<StatsCard
				title="Total Orders"
				value={25}
				icon={ShoppingCart}
				color="primary"
			/>

			<StatsCard
				title="Total Revenue"
				value="$0.00"
				icon={DollarSign}
				color="success"
			/>

			<StatsCard
				title="Cancelled Orders"
				value={0}
				icon={XCircle}
				color="danger"
			/>

			<StatsCard
				title="Refund Orders"
				value={0}
				icon={RotateCcw}
				color="danger"
			/>
		</div>
	);
};

export default StatCards;
