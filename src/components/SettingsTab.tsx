import React from "react";

interface SettingsTabsProps {
	activeTab: string;
	setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const tabs = [
	"Store Settings",
	"SEO Settings",
	"Custom Settings",
	"Checkout Settings",
	"Shipping Label Settings",
	"Order Complete Screen",
];

const SettingsTabs = ({ activeTab, setActiveTab }: SettingsTabsProps) => {
	return (
		<div className="flex flex-wrap gap-3 border-b border-slate-200 pb-4">
			{tabs.map((tab) => (
				<button
					key={tab}
					onClick={() => setActiveTab(tab)}
					className={`rounded-lg px-5 py-2 text-sm font-medium transition-all
						${
							activeTab === tab
								? "bg-primary text-white shadow"
								: "bg-slate-100 text-slate-700 hover:bg-slate-200"
						}`}
				>
					{tab}
				</button>
			))}
		</div>
	);
};

export default SettingsTabs;
