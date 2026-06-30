import { X, UploadCloud } from "lucide-react";

interface Props {
	open: boolean;
	onClose: () => void;
}

const UploadThemeModal = ({ open, onClose }: Props) => {
	if (!open) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
			<div className="w-full max-w-lg rounded-xl bg-white shadow-xl">
				<div className="flex items-center justify-between border-b p-5">
					<h2 className="text-lg font-semibold">Upload Theme</h2>

					<button onClick={onClose}>
						<X />
					</button>
				</div>

				<div className="space-y-5 p-6">
					<div>
						<label className="mb-2 block text-sm font-medium">
							Theme Name
						</label>

						<input
							type="text"
							className="w-full rounded-lg border border-slate-200 p-3 outline-none focus:border-primary"
						/>
					</div>

					<div>
						<label className="mb-2 block text-sm font-medium">
							Version
						</label>

						<input
							type="text"
							placeholder="1.0.0"
							className="w-full rounded-lg border border-slate-200 p-3 outline-none focus:border-primary"
						/>
					</div>

					<div className="rounded-xl border-2 border-dashed border-slate-300 p-10 text-center">
						<UploadCloud
							size={48}
							className="mx-auto text-primary"
						/>

						<p className="mt-3 text-slate-600">
							Drag & drop your theme ZIP here
						</p>

						<p className="mt-1 text-sm text-slate-400">
							or click to browse
						</p>

						<input type="file" accept=".zip" className="mt-4" />
					</div>
				</div>

				<div className="flex justify-end gap-3 border-t p-5">
					<button
						onClick={onClose}
						className="rounded-lg border px-5 py-2"
					>
						Cancel
					</button>

					<button className="rounded-lg bg-primary px-5 py-2 text-white hover:bg-primary-dark">
						Upload
					</button>
				</div>
			</div>
		</div>
	);
};

export default UploadThemeModal;
