// import { Link } from "react-router";

import CustomerGuestChart from "../components/Customerguestchart";
import LatestProducts from "../components/LatestPrducts";
import OrdersChart from "../components/Orders";
import { RecentOrders } from "../components/RecentOrders";
import StatCards from "../components/StatCards";
import StorageStatus from "../components/StorageStatus";
import ThemePreviewCard from "../components/ThemePreviewCard";
import { TopSellingProducts } from "../components/TopSellingProducts";
import WelcomeBanner from "../components/WelcomeBanner";

const Home = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			<StatCards />
			<ThemePreviewCard />
			<WelcomeBanner />
			<LatestProducts />
			<OrdersChart />
			<CustomerGuestChart />
			<StorageStatus />
			<RecentOrders />
			<TopSellingProducts />
		</div>
	);
};

export default Home;
