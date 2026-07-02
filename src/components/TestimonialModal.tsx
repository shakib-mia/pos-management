import { X } from "lucide-react";
import AddTestimonialForm from "./AddTestimonialForm";

interface TestimonialModalProps {
	open: boolean;
	onClose: () => void;
}

const TestimonialModal = ({ open, onClose }: TestimonialModalProps) => {
	if (!open) return null;

	return (
		<div
			onClick={onClose}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="w-full max-w-xl rounded-xl bg-white shadow-2xl"
			>
				<div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
					<div>
						<h2 className="text-xl font-semibold">
							Add Testimonial
						</h2>
						<p className="mt-1 text-sm text-slate-500">
							Create a customer testimonial.
						</p>
					</div>
					<button
						onClick={onClose}
						className="rounded-lg p-2 hover:bg-slate-100"
					>
						<X size={20} />
					</button>
				</div>
				<div className="p-6">
					<AddTestimonialForm onSuccess={onClose} />
				</div>
			</div>
		</div>
	);
};

export default TestimonialModal;
