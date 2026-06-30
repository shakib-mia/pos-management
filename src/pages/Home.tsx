import CustomerChart from "../components/CustomerChart";
import LatestProducts from "../components/LatestProducts";
import QuickActions from "../components/QuickActions";
import RecentOrders from "../components/RecentOrders";
import SalesChart from "../components/SalesChart";
import StatCards from "../components/StatCards";
import StorageStatus from "../components/StorageStatus";
import TopSellingProducts from "../components/TopSellingProducts";
import WelcomeBanner from "../components/WelcomeBanner";

const Home = () => {
	return (
		<div className="space-y-6">
			{/* Welcome */}
			<WelcomeBanner />

			{/* Stats */}
			<StatCards />

			{/* Charts */}
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
				<SalesChart />
				<CustomerChart />
			</div>

			{/* Latest Products */}
			<LatestProducts />

			{/* Recent Orders */}
			<RecentOrders />

			{/* Bottom Section */}
			<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-stretch">
				<div
					className="xl:col-span-2"
					style={{
						height:
							document.getElementById("storage-and-actions")
								?.clientHeight + "px",
					}}
				>
					<TopSellingProducts />
				</div>

				<div
					className="space-y-6 flex flex-col h-fit"
					id="storage-and-actions"
				>
					<StorageStatus used={36.6} total={5000} />

					<QuickActions />
				</div>
			</div>
		</div>
	);
};

export default Home;
