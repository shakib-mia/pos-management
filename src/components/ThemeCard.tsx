import { Eye, Pencil, Trash2, CheckCircle } from "lucide-react";

interface ThemeCardProps {
	name: string;
	image: string;
	version: string;
	active?: boolean;
	onPreview?: () => void;
	onActivate?: () => void;
	onEdit?: () => void;
	onDelete?: () => void;
}

const ThemeCard = ({
	name,
	image,
	version,
	active = false,
	onPreview,
	onActivate,
	onEdit,
	onDelete,
}: ThemeCardProps) => {
	return (
		<div className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
			<div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
				<img
					src={image}
					alt={name}
					className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
				/>

				<div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 opacity-0 transition group-hover:opacity-100">
					<button
						onClick={onPreview}
						className="rounded-lg bg-white p-2 hover:bg-slate-100"
					>
						<Eye size={18} />
					</button>

					<button
						onClick={onEdit}
						className="rounded-lg bg-white p-2 hover:bg-slate-100"
					>
						<Pencil size={18} />
					</button>

					<button
						onClick={onDelete}
						className="rounded-lg bg-danger p-2 text-white"
					>
						<Trash2 size={18} />
					</button>
				</div>
			</div>

			<div className="space-y-4 p-5">
				<div className="flex items-start justify-between">
					<div>
						<h3 className="font-semibold text-slate-800">{name}</h3>
						<p className="text-sm text-slate-500">v{version}</p>
					</div>

					{active && (
						<span className="flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
							<CheckCircle size={14} />
							Active
						</span>
					)}
				</div>

				{!active && (
					<button
						onClick={onActivate}
						className="w-full rounded-lg bg-primary py-2 text-white transition hover:bg-primary-dark"
					>
						Activate Theme
					</button>
				)}
			</div>
		</div>
	);
};

export default ThemeCard;
