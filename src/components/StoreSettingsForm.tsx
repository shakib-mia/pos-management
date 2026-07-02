import { useState } from "react";

const StoreSettingsForm = () => {
	const [storeName, setStoreName] = useState("Click Spikes Food Mart - Demo");
	const [isDefault, setIsDefault] = useState(true);

	return (
		<div className="mt-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
			<h2 className="mb-8 text-xl font-semibold text-slate-800">
				Store Settings
			</h2>

			<div className="space-y-6">
				{/* Store Name */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Store Name
					</label>

					<input
						type="text"
						value={storeName}
						onChange={(e) => setStoreName(e.target.value)}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
					/>
				</div>

				{/* Default Store */}
				<div>
					<label className="flex items-center gap-3">
						<input
							type="checkbox"
							checked={isDefault}
							onChange={(e) => setIsDefault(e.target.checked)}
							className="h-4 w-4 accent-primary"
						/>

						<span className="font-medium text-slate-700">
							Default Store
						</span>
					</label>

					<p className="mt-2 text-sm text-slate-500">
						Check this if this is your default store.
					</p>
				</div>

				{/* Store Logo */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Store Logo
					</label>

					<input
						type="file"
						className="block w-full rounded-lg border border-slate-300 file:mr-4 file:border-0 file:bg-primary file:px-4 file:py-2 file:text-white hover:file:bg-primary-dark"
					/>
				</div>

				{/* Invoice Logo */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Invoice Logo
					</label>

					<input
						type="file"
						className="block w-full rounded-lg border border-slate-300 file:mr-4 file:border-0 file:bg-primary file:px-4 file:py-2 file:text-white hover:file:bg-primary-dark"
					/>
				</div>

				{/* Store Favicon */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Store Favicon
					</label>

					<input
						type="file"
						className="block w-full rounded-lg border border-slate-300 file:mr-4 file:border-0 file:bg-primary file:px-4 file:py-2 file:text-white hover:file:bg-primary-dark"
					/>
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

export default StoreSettingsForm;
