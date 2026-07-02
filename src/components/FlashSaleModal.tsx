import { X } from "lucide-react";
import AddFlashSaleForm from "./AddFlashSaleForm";

interface Props {
	open: boolean;
	onClose: () => void;
}

const FlashSaleModal = ({ open, onClose }: Props) => {
	if (!open) return null;

	return (
		<div
			onClick={onClose}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="w-full max-w-3xl rounded-xl bg-white"
			>
				<div className="flex items-center justify-between border-b px-6 py-5">
					<h2 className="text-xl font-semibold">Create Flash Sale</h2>

					<button onClick={onClose}>
						<X />
					</button>
				</div>

				<div className="max-h-[80vh] overflow-y-auto p-6">
					<AddFlashSaleForm onSuccess={onClose} />
				</div>
			</div>
		</div>
	);
};

export default FlashSaleModal;
