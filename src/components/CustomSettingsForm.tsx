import { useState } from "react";

const CustomSettingsForm = () => {
	const [currency, setCurrency] = useState("USD");
	const [currencyPosition, setCurrencyPosition] = useState("left");
	const [timezone, setTimezone] = useState("Asia/Dhaka");
	const [language, setLanguage] = useState("English");
	const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");
	const [maintenanceMode, setMaintenanceMode] = useState(false);

	return (
		<div className="mt-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
			<h2 className="mb-8 text-xl font-semibold text-slate-800">
				Custom Settings
			</h2>

			<div className="grid gap-6 md:grid-cols-2">
				{/* Currency */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Currency
					</label>

					<select
						value={currency}
						onChange={(e) => setCurrency(e.target.value)}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
					>
						<option>USD</option>
						<option>BDT</option>
						<option>EUR</option>
						<option>GBP</option>
						<option>INR</option>
					</select>
				</div>

				{/* Currency Position */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Currency Position
					</label>

					<select
						value={currencyPosition}
						onChange={(e) => setCurrencyPosition(e.target.value)}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
					>
						<option value="left">Left ($100)</option>

						<option value="right">Right (100$)</option>
					</select>
				</div>

				{/* Timezone */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Timezone
					</label>

					<select
						value={timezone}
						onChange={(e) => setTimezone(e.target.value)}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
					>
						<option>Asia/Dhaka</option>
						<option>UTC</option>
						<option>Asia/Kolkata</option>
						<option>Europe/London</option>
						<option>America/New_York</option>
					</select>
				</div>

				{/* Language */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Default Language
					</label>

					<select
						value={language}
						onChange={(e) => setLanguage(e.target.value)}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
					>
						<option>English</option>
						<option>বাংলা</option>
						<option>Arabic</option>
					</select>
				</div>

				{/* Date Format */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Date Format
					</label>

					<select
						value={dateFormat}
						onChange={(e) => setDateFormat(e.target.value)}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
					>
						<option>DD/MM/YYYY</option>
						<option>MM/DD/YYYY</option>
						<option>YYYY-MM-DD</option>
					</select>
				</div>
			</div>

			{/* Maintenance */}
			<div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
				<label className="flex items-center gap-3">
					<input
						type="checkbox"
						checked={maintenanceMode}
						onChange={(e) => setMaintenanceMode(e.target.checked)}
						className="h-4 w-4 accent-primary"
					/>

					<div>
						<p className="font-medium text-slate-800">
							Maintenance Mode
						</p>

						<p className="text-sm text-slate-500">
							Temporarily disable the store for customers while
							performing maintenance.
						</p>
					</div>
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

export default CustomSettingsForm;
