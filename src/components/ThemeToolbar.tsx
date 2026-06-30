import { Search, Upload } from "lucide-react";

const ThemeToolbar = () => {
	return (
		<div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
			<div className="relative w-full max-w-md">
				<Search
					size={18}
					className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
				/>

				<input
					type="text"
					placeholder="Search themes..."
					className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 outline-none focus:border-primary"
				/>
			</div>

			<div className="flex gap-3">
				<select className="rounded-lg border border-slate-200 px-4">
					<option>All Categories</option>
					<option>Grocery</option>
					<option>Fashion</option>
					<option>Electronics</option>
				</select>

				<button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary-dark">
					<Upload size={18} />
					Upload Theme
				</button>
			</div>
		</div>
	);
};

export default ThemeToolbar;
