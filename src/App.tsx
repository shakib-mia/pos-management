import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { ToastContainer } from "react-toastify";
import { AppContext } from "./contexts/AppContexts";
import { useEffect, useState } from "react";
import axios from "axios";
import RootLayout from "./RootLayout.js";
import type { User } from "./interfaces/User.js";
import StoreAnalytics from "./pages/StoreAnalytics.js";
import ManageThemes from "./pages/ManageThemes.js";
import StoreSetting from "./pages/StoreSetting.js";
import AddStaffForm from "./pages/AddStaff.js";
import AllStaffs from "./pages/AllStaffs.js";
import DeliveryBoys from "./pages/DeliveryBoys.js";
import Brands from "./pages/Brands.js";
import Labels from "./pages/Labels.js";
import MainCategories from "./pages/MainCategories.js";
import SubCategories from "./pages/SubCategories.js";
import Attributes from "./pages/Attributes.js";
import Taxes from "./pages/Taxes.js";
import Shelves from "./pages/Shelves.js";
import Testimonials from "./pages/Testimonials.js";
import QuestionsAnswers from "./pages/QuestionsAnswers.js";
import ProductBarcodes from "./pages/ProductBarcodes.js";
import ShippingClasses from "./pages/ShippingClasses.js";
import ShippingZones from "./pages/ShippingZones.js";
import Orders from "./pages/Orders.js";
import OrderRefundRequests from "./pages/OrderRefundRequests.js";
import Customers from "./pages/Customers.js";
import CustomerReports from "./pages/CustomerReports.js";
import SalesReports from "./pages/SalesReports.js";
import SalesProductReports from "./pages/SalesProductReports.js";
import SalesCategoryReports from "./pages/SalesCategoryReports.js";
import SalesDownloadableReports from "./pages/SalesDownloadableReports.js";
import StockReports from "./pages/StockReports.js";
import Coupons from "./pages/Coupons.js";
import FlashSales from "./pages/FlashSales.js";
import Newsletters from "./pages/Newsletters.js";
import Wishlists from "./pages/Wishlists.js";
import AbandonedCarts from "./pages/AbandonedCarts.js";
import MobileAppSettings from "./pages/MobileAppSettings.js";
import SupportTickets from "./pages/SupportTickets.js";

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/forgot-password",
				element: <ForgotPassword />,
			},
			{
				path: "/reset-password",
				element: <ResetPassword />,
			},
			{
				path: "/analytics",
				element: <StoreAnalytics />,
			},
			{
				path: "/theme-preview",
				element: <ManageThemes />,
			},
			{
				path: "/store-setting",
				element: <StoreSetting />,
			},
			{
				path: "/staffs/add",
				element: <AddStaffForm />,
			},
			{
				path: "/staffs",
				element: <AllStaffs />,
			},
			{
				path: "/delivery-boy",
				element: <DeliveryBoys />,
			},
			{
				path: "/products/brands",
				element: <Brands />,
			},
			{
				path: "/products/labels",
				element: <Labels />,
			},
			{
				path: "/products/main-categories",
				element: <MainCategories />,
			},
			{
				path: "/products/sub-categories",
				element: <SubCategories />,
			},
			{
				path: "/products/attributes",
				element: <Attributes />,
			},
			{
				path: "/products/taxes",
				element: <Taxes />,
			},
			{
				path: "/products/shelves",
				element: <Shelves />,
			},
			{
				path: "/products/testimonials",
				element: <Testimonials />,
			},
			{
				path: "/products/questions",
				element: <QuestionsAnswers />,
			},
			{
				path: "/products/barcodes",
				element: <ProductBarcodes />,
			},
			{
				path: "/shipping/classes",
				element: <ShippingClasses />,
			},
			{
				path: "/shipping/zones",
				element: <ShippingZones />,
			},
			{
				path: "/orders",
				element: <Orders />,
			},
			{
				path: "/orders/refund-requests",
				element: <OrderRefundRequests />,
			},
			{
				path: "/customers",
				element: <Customers />,
			},
			{
				path: "/reports/customer-reports",
				element: <CustomerReports />,
			},
			{
				path: "/reports/order-reports/sales",
				element: <SalesReports />,
			},
			{
				path: "/reports/order-reports/sales-products",
				element: <SalesProductReports />,
			},
			{
				path: "/reports/order-reports/sales-categories",
				element: <SalesCategoryReports />,
			},
			{
				path: "/reports/order-reports/sales-downloadables",
				element: <SalesDownloadableReports />,
			},
			{
				path: "/reports/stock-reports",
				element: <StockReports />,
			},
			{
				path: "/marketing/coupons",
				element: <Coupons />,
			},
			{
				path: "/marketing/flash-sales",
				element: <FlashSales />,
			},
			{
				path: "/marketing/newsletters",
				element: <Newsletters />,
			},
			{
				path: "/marketing/wishlists",
				element: <Wishlists />,
			},
			{
				path: "/marketing/abandoned-carts",
				element: <AbandonedCarts />,
			},
			{
				path: "/mobile-app-settings",
				element: <MobileAppSettings />,
			},
			{
				path: "/support-tickets",
				element: <SupportTickets />,
			},
		],
	},
]);

function App() {
	const [userData, setUserData] = useState<User | null>(null);
	// const token = localStorage.getItem("accessToken");
	const [token, setToken] = useState<string | null>(
		localStorage.getItem("accessToken"),
	);
	const store = {
		userData,
		setUserData,
		token,
		setToken,
	};

	useEffect(() => {
		const loadUser = async () => {
			if (!token) return;

			try {
				const { data } = await axios.get(
					import.meta.env.VITE_BACKEND_URL + "api/users/me",
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);

				setUserData(data.user);
				// console.log(data);
			} catch (error) {
				console.error(error);

				localStorage.removeItem("accessToken");
				setToken(null);
				setUserData(null);
			}
		};

		loadUser();
	}, [token]);

	return (
		<AppContext.Provider value={store}>
			<RouterProvider router={router} />
			<ToastContainer />
		</AppContext.Provider>
	);
}

export default App;
