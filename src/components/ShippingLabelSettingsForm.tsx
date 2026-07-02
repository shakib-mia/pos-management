import { useState } from "react";

const ShippingLabelSettingsForm = () => {
	const [companyName, setCompanyName] = useState("Click Spikes Food Mart");
	const [senderName, setSenderName] = useState("Demo Admin");
	const [phone, setPhone] = useState("+8801XXXXXXXXX");
	const [email, setEmail] = useState("admin@example.com");
	const [address, setAddress] = useState(
		"123 Demo Street, Dhaka, Bangladesh",
	);

	const [showLogo, setShowLogo] = useState(true);
	const [showBarcode, setShowBarcode] = useState(true);
	const [showOrderNotes, setShowOrderNotes] = useState(false);

	return (
		<div className="mt-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
			<h2 className="mb-8 text-xl font-semibold text-slate-800">
				Shipping Label Settings
			</h2>

			<div className="grid gap-6 md:grid-cols-2">
				{/* Company Name */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Company Name
					</label>

					<input
						type="text"
						value={companyName}
						onChange={(e) => setCompanyName(e.target.value)}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
					/>
				</div>

				{/* Sender */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Sender Name
					</label>

					<input
						type="text"
						value={senderName}
						onChange={(e) => setSenderName(e.target.value)}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
					/>
				</div>

				{/* Phone */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Phone Number
					</label>

					<input
						type="text"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
					/>
				</div>

				{/* Email */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Email Address
					</label>

					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
					/>
				</div>

				{/* Address */}
				<div className="md:col-span-2">
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Sender Address
					</label>

					<textarea
						rows={4}
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
					/>
				</div>
			</div>

			{/* Label Options */}
			<div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6">
				<h3 className="mb-5 text-lg font-semibold text-slate-800">
					Label Options
				</h3>

				<div className="space-y-5">
					<label className="flex items-center justify-between">
						<div>
							<p className="font-medium text-slate-800">
								Show Store Logo
							</p>
							<p className="text-sm text-slate-500">
								Display your store logo on shipping labels.
							</p>
						</div>

						<input
							type="checkbox"
							checked={showLogo}
							onChange={(e) => setShowLogo(e.target.checked)}
							className="h-5 w-5 accent-primary"
						/>
					</label>

					<label className="flex items-center justify-between">
						<div>
							<p className="font-medium text-slate-800">
								Show Barcode
							</p>
							<p className="text-sm text-slate-500">
								Print order barcode on the shipping label.
							</p>
						</div>

						<input
							type="checkbox"
							checked={showBarcode}
							onChange={(e) => setShowBarcode(e.target.checked)}
							className="h-5 w-5 accent-primary"
						/>
					</label>

					<label className="flex items-center justify-between">
						<div>
							<p className="font-medium text-slate-800">
								Show Order Notes
							</p>
							<p className="text-sm text-slate-500">
								Include customer order notes on the label.
							</p>
						</div>

						<input
							type="checkbox"
							checked={showOrderNotes}
							onChange={(e) =>
								setShowOrderNotes(e.target.checked)
							}
							className="h-5 w-5 accent-primary"
						/>
					</label>
				</div>
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

export default ShippingLabelSettingsForm;
