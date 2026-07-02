import { useState } from "react";

const CheckoutSettingsForm = () => {
	const [guestCheckout, setGuestCheckout] = useState(true);
	const [cashOnDelivery, setCashOnDelivery] = useState(true);
	const [minimumOrder, setMinimumOrder] = useState("0");
	const [taxPercentage, setTaxPercentage] = useState("0");
	const [orderPrefix, setOrderPrefix] = useState("ORD-");
	const [autoInvoice, setAutoInvoice] = useState(true);

	return (
		<div className="mt-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
			<h2 className="mb-8 text-xl font-semibold text-slate-800">
				Checkout Settings
			</h2>

			<div className="grid gap-6 md:grid-cols-2">
				{/* Minimum Order */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Minimum Order Amount
					</label>

					<input
						type="number"
						value={minimumOrder}
						onChange={(e) => setMinimumOrder(e.target.value)}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
					/>

					<p className="mt-2 text-xs text-slate-500">
						Set 0 to disable minimum order amount.
					</p>
				</div>

				{/* Tax */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Default Tax (%)
					</label>

					<input
						type="number"
						value={taxPercentage}
						onChange={(e) => setTaxPercentage(e.target.value)}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
					/>
				</div>

				{/* Order Prefix */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Order Prefix
					</label>

					<input
						type="text"
						value={orderPrefix}
						onChange={(e) => setOrderPrefix(e.target.value)}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
					/>
				</div>
			</div>

			{/* Toggles */}
			<div className="mt-8 space-y-5 rounded-lg border border-slate-200 bg-slate-50 p-6">
				<label className="flex items-center justify-between">
					<div>
						<p className="font-medium text-slate-800">
							Guest Checkout
						</p>
						<p className="text-sm text-slate-500">
							Allow customers to place orders without signing in.
						</p>
					</div>

					<input
						type="checkbox"
						checked={guestCheckout}
						onChange={(e) => setGuestCheckout(e.target.checked)}
						className="h-5 w-5 accent-primary"
					/>
				</label>

				<label className="flex items-center justify-between">
					<div>
						<p className="font-medium text-slate-800">
							Cash on Delivery
						</p>
						<p className="text-sm text-slate-500">
							Enable Cash on Delivery payment option.
						</p>
					</div>

					<input
						type="checkbox"
						checked={cashOnDelivery}
						onChange={(e) => setCashOnDelivery(e.target.checked)}
						className="h-5 w-5 accent-primary"
					/>
				</label>

				<label className="flex items-center justify-between">
					<div>
						<p className="font-medium text-slate-800">
							Auto Generate Invoice
						</p>
						<p className="text-sm text-slate-500">
							Create an invoice automatically after a successful
							order.
						</p>
					</div>

					<input
						type="checkbox"
						checked={autoInvoice}
						onChange={(e) => setAutoInvoice(e.target.checked)}
						className="h-5 w-5 accent-primary"
					/>
				</label>
			</div>

			<div className="mt-8 flex justify-end gap-3">
				<button
					type="button"
					className="rounded-lg border border-slate-300 px-5 py-2.5 font-medium hover:bg-slate-100"
				>
					Cancel
				</button>

				<button
					type="submit"
					className="rounded-lg bg-primary px-5 py-2.5 font-medium text-white transition hover:bg-primary-dark"
				>
					Save Changes
				</button>
			</div>
		</div>
	);
};

export default CheckoutSettingsForm;
