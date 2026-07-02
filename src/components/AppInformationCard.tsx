import { useState } from "react";

const AppInformationCard = () => {
	const [form, setForm] = useState({
		appName: "Demo Store",
		packageName: "com.demo.store",
		version: "1.0.0",
		maintenanceMode: false,
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
					App Information
				</h2>

				<p className="mt-1 text-sm text-slate-500">
					Configure your application's basic information.
				</p>
			</div>

			<div className="space-y-5 p-6">
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						App Name
					</label>

					<input
						type="text"
						name="appName"
						value={form.appName}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Package Name
					</label>

					<input
						type="text"
						name="packageName"
						value={form.packageName}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						App Version
					</label>

					<input
						type="text"
						name="version"
						value={form.version}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
					/>
				</div>

				<div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
					<div>
						<h3 className="font-medium text-slate-800">
							Maintenance Mode
						</h3>

						<p className="text-sm text-slate-500">
							Disable access to the mobile application.
						</p>
					</div>

					<label className="relative inline-flex cursor-pointer items-center">
						<input
							type="checkbox"
							name="maintenanceMode"
							checked={form.maintenanceMode}
							onChange={handleChange}
							className="peer sr-only"
						/>

						<div className="h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-success after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5"></div>
					</label>
				</div>
			</div>
		</div>
	);
};

export default AppInformationCard;
