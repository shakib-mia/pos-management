import { useState } from "react";
import SettingsTabs from "../components/SettingsTab";
import StoreSettingContent from "../components/StoreSettingContent";

const StoreSetting = () => {
	const [activeTab, setActiveTab] = useState("Store Settings");
	return (
		<>
			<SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
			<StoreSettingContent activeTab={activeTab} />
		</>
	);
};

// const StoreSettingContent

export default StoreSetting;
