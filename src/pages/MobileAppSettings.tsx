import AppInformationCard from "../components/AppInformationCard";
import AndroidSettingsCard from "../components/AndroidSettingsCard";
import IOSSettingsCard from "../components/IOSSettingsCard";
import SplashScreenCard from "../components/SplashScreenCard";
import PushNotificationCard from "../components/PushNotificationCard";

const MobileAppSettings = () => {
	return (
		<div className="space-y-6">
			<AppInformationCard />
			<AndroidSettingsCard />
			<IOSSettingsCard />
			<SplashScreenCard />
			<PushNotificationCard />

			<div className="flex justify-end gap-3">
				<button className="rounded-lg border border-slate-300 px-6 py-2.5 hover:bg-slate-100">
					Cancel
				</button>

				<button className="rounded-lg bg-primary px-6 py-2.5 text-white hover:bg-primary-dark">
					Save Changes
				</button>
			</div>
		</div>
	);
};

export default MobileAppSettings;
