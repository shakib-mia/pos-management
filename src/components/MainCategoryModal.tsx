import { X } from "lucide-react";
import AddMainCategoryForm from "./AddMainCategoryForm";

interface MainCategoryModalProps {
	open: boolean;
	onClose: () => void;
}

const MainCategoryModal = ({ open, onClose }: MainCategoryModalProps) => {
	if (!open) return null;

	return (
		<div
			onClick={onClose}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="w-full max-w-2xl rounded-xl bg-white shadow-2xl"
			>
				{/* Header */}
				<div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
					<div>
						<h2 className="text-xl font-semibold text-slate-800">
							Add Main Category
						</h2>

						<p className="mt-1 text-sm text-slate-500">
							Create a new product category.
						</p>
					</div>

					<button
						onClick={onClose}
						className="rounded-lg p-2 transition hover:bg-slate-100"
					>
						<X size={20} />
					</button>
				</div>

				{/* Body */}
				<div className="max-h-[75vh] overflow-y-auto p-6">
					<AddMainCategoryForm onSuccess={onClose} />
				</div>
			</div>
		</div>
	);
};

export default MainCategoryModal;
