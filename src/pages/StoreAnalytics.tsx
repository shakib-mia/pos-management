import AnalyticsStats from "../components/AnalyticsStats";
import VisitorsChart from "../components/VisitorsChart";
import TopUrlsTable from "../components/TopUrlsTable";
import DeviceChart from "../components/DeviceChart";
import PlatformChart from "../components/PlatformChart";
import BrowserChart from "../components/BrowserChart";

const StoreAnalytics = () => {
	return (
		<div>
			<AnalyticsStats />

			<div className="mt-6">
				<VisitorsChart />
			</div>

			<div className="mt-6">
				<TopUrlsTable />
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
				<DeviceChart />
				<PlatformChart />
				<BrowserChart />
			</div>
		</div>
	);
};

export default StoreAnalytics;
