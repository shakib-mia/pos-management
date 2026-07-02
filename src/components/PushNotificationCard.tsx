import { useState } from "react";
import Toggle from "./Toggle";

const PushNotificationCard = () => {
	const [form, setForm] = useState({
		enablePush: true,
		enableOrderNotification: true,
		enablePromotionNotification: false,
		enableOfferNotification: true,
		firebaseServerKey: "",
		firebaseSenderId: "",
		firebaseProjectId: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;

		setForm((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	return (
		<div className="rounded-xl border border-slate-200 bg-white shadow-sm">
			<div className="border-b border-slate-200 px-6 py-4">
				<h2 className="text-lg font-semibold text-slate-800">
					Push Notifications
				</h2>

				<p className="mt-1 text-sm text-slate-500">
					Configure Firebase Cloud Messaging (FCM) and mobile push
					notification settings.
				</p>
			</div>

			<div className="space-y-6 p-6">
				{/* Firebase */}
				<div className="space-y-5">
					<div>
						<label className="mb-2 block text-sm font-medium text-slate-700">
							Firebase Server Key
						</label>

						<input
							type="text"
							name="firebaseServerKey"
							value={form.firebaseServerKey}
							onChange={handleChange}
							placeholder="Enter Firebase Server Key"
							className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
						/>
					</div>

					<div>
						<label className="mb-2 block text-sm font-medium text-slate-700">
							Firebase Sender ID
						</label>

						<input
							type="text"
							name="firebaseSenderId"
							value={form.firebaseSenderId}
							onChange={handleChange}
							placeholder="Enter Sender ID"
							className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
						/>
					</div>

					<div>
						<label className="mb-2 block text-sm font-medium text-slate-700">
							Firebase Project ID
						</label>

						<input
							type="text"
							name="firebaseProjectId"
							value={form.firebaseProjectId}
							onChange={handleChange}
							placeholder="Enter Project ID"
							className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
						/>
					</div>
				</div>

				{/* Toggles */}
				<div className="space-y-4">
					<Toggle
						name="enablePush"
						label="Enable Push Notifications"
						description="Allow the mobile application to receive push notifications."
						checked={form.enablePush}
						handleChange={handleChange}
					/>

					<Toggle
						name="enableOrderNotification"
						label="Order Notifications"
						description="Send notifications for new orders and order updates."
						checked={form.enableOrderNotification}
						handleChange={handleChange}
					/>

					<Toggle
						name="enablePromotionNotification"
						label="Promotional Notifications"
						description="Send marketing campaigns and promotional messages."
						checked={form.enablePromotionNotification}
						handleChange={handleChange}
					/>

					<Toggle
						name="enableOfferNotification"
						label="Offer Notifications"
						description="Notify customers about flash sales, coupons and special offers."
						checked={form.enableOfferNotification}
						handleChange={handleChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default PushNotificationCard;
