import { ImagePlus } from "lucide-react";
import { useState } from "react";

const SplashScreenCard = () => {
	const [logo, setLogo] = useState<File | null>(null);
	const [background, setBackground] = useState("#3498db");
	const [duration, setDuration] = useState("3");

	return (
		<div className="rounded-xl border border-slate-200 bg-white shadow-sm">
			<div className="border-b border-slate-200 px-6 py-4">
				<h2 className="text-lg font-semibold text-slate-800">
					Splash Screen
				</h2>

				<p className="mt-1 text-sm text-slate-500">
					Customize the splash screen displayed when the app launches.
				</p>
			</div>

			<div className="space-y-6 p-6">
				{/* Upload */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Splash Logo
					</label>

					<label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 p-8 transition hover:border-primary hover:bg-slate-50">
						<ImagePlus size={36} className="mb-3 text-slate-400" />

						<p className="font-medium text-slate-700">
							Click to upload
						</p>

						<p className="mt-1 text-sm text-slate-500">
							PNG, JPG or SVG
						</p>

						{logo && (
							<p className="mt-3 text-sm font-medium text-success">
								{logo.name}
							</p>
						)}

						<input
							type="file"
							accept="image/*"
							className="hidden"
							onChange={(e) =>
								setLogo(e.target.files?.[0] || null)
							}
						/>
					</label>
				</div>

				{/* Background */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Background Color
					</label>

					<div className="flex items-center gap-4">
						<input
							type="color"
							value={background}
							onChange={(e) => setBackground(e.target.value)}
							className="h-12 w-20 cursor-pointer rounded border border-slate-300"
						/>

						<input
							type="text"
							value={background}
							onChange={(e) => setBackground(e.target.value)}
							className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-primary"
						/>
					</div>
				</div>

				{/* Duration */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Display Duration (seconds)
					</label>

					<input
						type="number"
						min={1}
						max={10}
						value={duration}
						onChange={(e) => setDuration(e.target.value)}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-primary"
					/>
				</div>

				{/* Preview */}
				<div>
					<label className="mb-3 block text-sm font-medium text-slate-700">
						Preview
					</label>

					<div
						className="flex h-72 items-center justify-center rounded-xl border border-slate-200"
						style={{ backgroundColor: background }}
					>
						{logo ? (
							<img
								src={URL.createObjectURL(logo)}
								alt="Splash Preview"
								className="max-h-28 object-contain"
							/>
						) : (
							<div className="text-center">
								<ImagePlus
									size={42}
									className="mx-auto text-white/70"
								/>

								<p className="mt-3 text-sm text-white">
									Splash Preview
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SplashScreenCard;
