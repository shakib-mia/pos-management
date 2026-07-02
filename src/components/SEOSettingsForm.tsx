import { useState } from "react";

const SEOSettingsForm = () => {
	const [metaTitle, setMetaTitle] = useState("Click Spikes Food Mart - Demo");
	const [metaDescription, setMetaDescription] = useState("");
	const [metaKeywords, setMetaKeywords] = useState("");
	const [canonicalUrl, setCanonicalUrl] = useState("");
	const [robotsIndex, setRobotsIndex] = useState(true);
	const [robotsFollow, setRobotsFollow] = useState(true);

	return (
		<div className="mt-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
			<h2 className="mb-8 text-xl font-semibold text-slate-800">
				SEO Settings
			</h2>

			<div className="space-y-6">
				{/* Meta Title */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Meta Title
					</label>

					<input
						type="text"
						value={metaTitle}
						onChange={(e) => setMetaTitle(e.target.value)}
						placeholder="Enter meta title"
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
					/>
				</div>

				{/* Meta Description */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Meta Description
					</label>

					<textarea
						rows={4}
						value={metaDescription}
						onChange={(e) => setMetaDescription(e.target.value)}
						placeholder="Enter meta description"
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
					/>
				</div>

				{/* Meta Keywords */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Meta Keywords
					</label>

					<input
						type="text"
						value={metaKeywords}
						onChange={(e) => setMetaKeywords(e.target.value)}
						placeholder="grocery, supermarket, food, ecommerce"
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
					/>

					<p className="mt-2 text-sm text-slate-500">
						Separate keywords with commas.
					</p>
				</div>

				{/* Canonical URL */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Canonical URL
					</label>

					<input
						type="url"
						value={canonicalUrl}
						onChange={(e) => setCanonicalUrl(e.target.value)}
						placeholder="https://example.com"
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
					/>
				</div>

				{/* Robots */}
				<div className="space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-5">
					<h3 className="font-medium text-slate-800">
						Search Engine Visibility
					</h3>

					<label className="flex items-center gap-3">
						<input
							type="checkbox"
							checked={robotsIndex}
							onChange={(e) => setRobotsIndex(e.target.checked)}
							className="h-4 w-4 accent-primary"
						/>

						<span className="text-sm text-slate-700">
							Allow search engines to index this store
						</span>
					</label>

					<label className="flex items-center gap-3">
						<input
							type="checkbox"
							checked={robotsFollow}
							onChange={(e) => setRobotsFollow(e.target.checked)}
							className="h-4 w-4 accent-primary"
						/>

						<span className="text-sm text-slate-700">
							Allow search engines to follow links
						</span>
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

export default SEOSettingsForm;
