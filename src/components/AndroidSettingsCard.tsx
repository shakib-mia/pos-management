import { useState } from "react";

const AndroidSettingsCard = () => {
	const [form, setForm] = useState({
		playStoreUrl: "",
		apkUrl: "",
		minVersion: "1.0.0",
		latestVersion: "1.2.0",
		updateMessage:
			"A new version is available. Please update your application.",
		forceUpdate: false,
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value, type } = e.target;

		setForm((prev) => ({
			...prev,
			[name]:
				type === "checkbox"
					? (e.target as HTMLInputElement).checked
					: value,
		}));
	};

	return (
		<div className="rounded-xl border border-slate-200 bg-white shadow-sm">
			<div className="border-b border-slate-200 px-6 py-4">
				<h2 className="text-lg font-semibold text-slate-800">
					Android Settings
				</h2>

				<p className="mt-1 text-sm text-slate-500">
					Configure your Android application settings.
				</p>
			</div>

			<div className="space-y-5 p-6">
				<div>
					<label className="mb-2 block text-sm font-medium">
						Play Store URL
					</label>

					<input
						type="url"
						name="playStoreUrl"
						value={form.playStoreUrl}
						onChange={handleChange}
						placeholder="https://play.google.com/store/apps/details?id=..."
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium">
						APK Download URL
					</label>

					<input
						type="url"
						name="apkUrl"
						value={form.apkUrl}
						onChange={handleChange}
						placeholder="https://example.com/app.apk"
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
					/>
				</div>

				<div className="grid gap-5 md:grid-cols-2">
					<div>
						<label className="mb-2 block text-sm font-medium">
							Minimum Version
						</label>

						<input
							type="text"
							name="minVersion"
							value={form.minVersion}
							onChange={handleChange}
							className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
						/>
					</div>

					<div>
						<label className="mb-2 block text-sm font-medium">
							Latest Version
						</label>

						<input
							type="text"
							name="latestVersion"
							value={form.latestVersion}
							onChange={handleChange}
							className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
						/>
					</div>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium">
						Update Message
					</label>

					<textarea
						rows={4}
						name="updateMessage"
						value={form.updateMessage}
						onChange={handleChange}
						className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-primary"
					/>
				</div>

				<div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
					<div>
						<h3 className="font-medium text-slate-800">
							Force Update
						</h3>

						<p className="text-sm text-slate-500">
							Users must update the app before continuing.
						</p>
					</div>

					<label className="relative inline-flex cursor-pointer items-center">
						<input
							type="checkbox"
							name="forceUpdate"
							checked={form.forceUpdate}
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

export default AndroidSettingsCard;
