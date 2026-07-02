import { X, Send, User, Mail, Calendar, Tag } from "lucide-react";
import { useState } from "react";

export interface Ticket {
	id: string;
	customer: string;
	email: string;
	subject: string;
	category: string;
	priority: "Low" | "Medium" | "High";
	status: "Open" | "Pending" | "Closed";
	createdAt: string;
	message: string;
}

interface TicketDetailsModalProps {
	open: boolean;
	onClose: () => void;
	ticket?: Ticket | null;
}

const TicketDetailsModal = ({
	open,
	onClose,
	ticket,
}: TicketDetailsModalProps) => {
	const [reply, setReply] = useState("");

	if (!open || !ticket) return null;

	const priorityClasses = {
		High: "bg-red-100 text-red-700",
		Medium: "bg-yellow-100 text-yellow-700",
		Low: "bg-green-100 text-green-700",
	};

	const statusClasses = {
		Open: "bg-red-100 text-red-700",
		Pending: "bg-yellow-100 text-yellow-700",
		Closed: "bg-green-100 text-green-700",
	};

	return (
		<div
			onClick={onClose}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-white shadow-xl"
			>
				{/* Header */}
				<div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
					<div>
						<h2 className="text-xl font-semibold text-slate-800">
							Ticket Details
						</h2>

						<p className="mt-1 text-sm text-slate-500">
							{ticket.id}
						</p>
					</div>

					<button
						onClick={onClose}
						className="rounded-lg p-2 hover:bg-slate-100"
					>
						<X size={20} />
					</button>
				</div>

				<div className="flex-1 overflow-y-auto p-6">
					<div className="grid gap-6 lg:grid-cols-2">
						{/* Customer */}
						<div className="rounded-xl border border-slate-200 p-5">
							<h3 className="mb-4 text-lg font-semibold">
								Customer Information
							</h3>

							<div className="space-y-4">
								<div className="flex items-center gap-3">
									<User size={18} className="text-primary" />

									<div>
										<p className="text-sm text-slate-500">
											Customer
										</p>

										<p className="font-medium">
											{ticket.customer}
										</p>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<Mail size={18} className="text-primary" />

									<div>
										<p className="text-sm text-slate-500">
											Email
										</p>

										<p className="font-medium">
											{ticket.email}
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Ticket */}
						<div className="rounded-xl border border-slate-200 p-5">
							<h3 className="mb-4 text-lg font-semibold">
								Ticket Information
							</h3>

							<div className="space-y-4">
								<div className="flex items-center gap-3">
									<Tag size={18} className="text-primary" />

									<div>
										<p className="text-sm text-slate-500">
											Category
										</p>

										<p className="font-medium">
											{ticket.category}
										</p>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<Calendar
										size={18}
										className="text-primary"
									/>

									<div>
										<p className="text-sm text-slate-500">
											Created
										</p>

										<p className="font-medium">
											{ticket.createdAt}
										</p>
									</div>
								</div>

								<div className="flex gap-3">
									<span
										className={`rounded-full px-3 py-1 text-xs font-semibold ${
											priorityClasses[ticket.priority]
										}`}
									>
										{ticket.priority}
									</span>

									<span
										className={`rounded-full px-3 py-1 text-xs font-semibold ${
											statusClasses[ticket.status]
										}`}
									>
										{ticket.status}
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Subject */}
					<div className="mt-6 rounded-xl border border-slate-200 p-5">
						<h3 className="text-lg font-semibold">Subject</h3>

						<p className="mt-3 font-medium">{ticket.subject}</p>
					</div>

					{/* Message */}
					<div className="mt-6 rounded-xl border border-slate-200 p-5">
						<h3 className="text-lg font-semibold">
							Customer Message
						</h3>

						<div className="mt-4 rounded-lg bg-slate-50 p-4 leading-7 text-slate-700">
							{ticket.message}
						</div>
					</div>

					{/* Reply */}
					<div className="mt-6 rounded-xl border border-slate-200 p-5">
						<h3 className="text-lg font-semibold">Reply</h3>

						<textarea
							rows={6}
							value={reply}
							onChange={(e) => setReply(e.target.value)}
							placeholder="Write your reply..."
							className="mt-4 w-full rounded-lg border border-slate-300 p-4 outline-none focus:border-primary"
						/>
					</div>
				</div>

				{/* Footer */}
				<div className="flex items-center justify-end gap-3 border-t border-slate-200 px-6 py-5">
					<button
						onClick={onClose}
						className="rounded-lg border border-slate-300 px-5 py-2.5 hover:bg-slate-100"
					>
						Cancel
					</button>

					<button className="rounded-lg bg-success px-5 py-2.5 text-white hover:bg-success-dark">
						Close Ticket
					</button>

					<button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-white hover:bg-primary-dark">
						<Send size={18} />
						Send Reply
					</button>
				</div>
			</div>
		</div>
	);
};

export default TicketDetailsModal;
