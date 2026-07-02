// import React from "react";
import CheckoutSettingsForm from "./CheckoutSettingsForm";
import CustomSettingsForm from "./CustomSettingsForm";
import OrderCompleteScreenForm from "./OrderCompleteScreenForm";
import SEOSettingsForm from "./SEOSettingsForm";
import ShippingLabelSettingsForm from "./ShippingLabelSettingsForm";
import StoreSettingsForm from "./StoreSettingsForm";

interface PropTypes {
	activeTab: string;
}

const StoreSettingContent = ({ activeTab }: PropTypes) => {
	// return (
	//     <div>

	//     </div>
	// );
	switch (activeTab) {
		case "Store Settings":
			return <StoreSettingsForm />;

		case "SEO Settings":
			return <SEOSettingsForm />;

		case "Custom Settings":
			return <CustomSettingsForm />;

		case "Checkout Settings":
			return <CheckoutSettingsForm />;

		case "Shipping Label Settings":
			return <ShippingLabelSettingsForm />;

		case "Order Complete Screen":
			return <OrderCompleteScreenForm />;

		default:
			return <StoreSettingsForm />;
	}
};

export default StoreSettingContent;
