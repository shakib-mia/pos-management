import { X } from "lucide-react";
import AddCouponForm from "./AddCouponForm";

interface CouponModalProps {
	open: boolean;
	onClose: () => void;
}

const CouponModal = ({ open, onClose }: CouponModalProps) => {
	if (!open) return null;

	return (
		<div
			onClick={onClose}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="w-full max-w-2xl rounded-xl bg-white shadow-xl"
			>
				<div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
					<div>
						<h2 className="text-xl font-semibold">Add Coupon</h2>

						<p className="mt-1 text-sm text-slate-500">
							Create a new discount coupon.
						</p>
					</div>

					<button
						onClick={onClose}
						className="rounded-lg p-2 hover:bg-slate-100"
					>
						<X size={20} />
					</button>
				</div>

				<div className="max-h-[80vh] overflow-y-auto p-6">
					<AddCouponForm onSuccess={onClose} />
				</div>
			</div>
		</div>
	);
};

export default CouponModal;
