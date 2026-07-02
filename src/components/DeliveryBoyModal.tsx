import { X } from "lucide-react";
import AddDeliveryBoyForm from "./AddDeliveryBoyForm";

interface DeliveryBoyModalProps {
	open: boolean;
	onClose: () => void;
}

const DeliveryBoyModal = ({ open, onClose }: DeliveryBoyModalProps) => {
	if (!open) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
			onClick={onClose}
		>
			<div
				className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white shadow-2xl"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Header */}
				<div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
					<div>
						<h2 className="text-xl font-semibold text-slate-800">
							Add Delivery Boy
						</h2>

						<p className="mt-1 text-sm text-slate-500">
							Create a new delivery boy account.
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
				<div className="p-6">
					<AddDeliveryBoyForm onSuccess={onClose} />
				</div>
			</div>
		</div>
	);
};

export default DeliveryBoyModal;
