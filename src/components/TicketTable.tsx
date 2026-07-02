import { Eye, Trash2, CheckCircle2 } from "lucide-react";
import type { Ticket } from "./TicketDetailsModal";

const tickets: Ticket[] = [
	{
		id: "#TK-1001",
		customer: "John Doe",
		email: "john@example.com",
		subject: "Order not received",
		category: "Delivery",
		priority: "High",
		status: "Open",
		createdAt: "21 Jul 2026",
		message:
			"Hello, I placed my order five days ago but haven't received it yet. Please help me locate my package.",
	},
	{
		id: "#TK-1002",
		customer: "Sarah Smith",
		email: "sarah@example.com",
		subject: "Refund request",
		category: "Payment",
		priority: "Medium",
		status: "Pending",
		createdAt: "20 Jul 2026",
		message:
			"I accidentally ordered the wrong product and would like to request a refund.",
	},
	{
		id: "#TK-1003",
		customer: "Michael Brown",
		email: "michael@example.com",
		subject: "Product damaged",
		category: "Product",
		priority: "High",
		status: "Open",
		createdAt: "19 Jul 2026",
		message:
			"The package arrived today, but the product inside is damaged. Please arrange a replacement.",
	},
	{
		id: "#TK-1004",
		customer: "Emily Davis",
		email: "emily@example.com",
		subject: "Account login issue",
		category: "Account",
		priority: "Low",
		status: "Closed",
		createdAt: "18 Jul 2026",
		message:
			"I was unable to log in yesterday, but the issue has now been resolved. Thank you for your support.",
	},
];

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

interface TicketTableProps {
	onView: (ticket: Ticket) => void;
}

const TicketTable = ({ onView }: TicketTableProps) => {
	return (
		<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-slate-50">
						<tr className="text-left text-sm font-semibold text-slate-600">
							<th className="px-6 py-4">Ticket ID</th>
							<th className="px-6 py-4">Customer</th>
							<th className="px-6 py-4">Subject</th>
							<th className="px-6 py-4">Category</th>
							<th className="px-6 py-4">Priority</th>
							<th className="px-6 py-4">Status</th>
							<th className="px-6 py-4">Created</th>
							<th className="px-6 py-4 text-right">Actions</th>
						</tr>
					</thead>

					<tbody>
						{tickets.map((ticket) => (
							<tr
								key={ticket.id}
								className="border-t border-slate-100 hover:bg-slate-50"
							>
								<td className="px-6 py-4 font-medium text-primary">
									{ticket.id}
								</td>

								<td className="px-6 py-4">
									<div>
										<p className="font-medium text-slate-800">
											{ticket.customer}
										</p>

										<p className="text-sm text-slate-500">
											{ticket.email}
										</p>
									</div>
								</td>

								<td className="px-6 py-4 font-medium">
									{ticket.subject}
								</td>

								<td className="px-6 py-4">{ticket.category}</td>

								<td className="px-6 py-4">
									<span
										className={`rounded-full px-3 py-1 text-xs font-semibold ${
											priorityClasses[
												ticket.priority as keyof typeof priorityClasses
											]
										}`}
									>
										{ticket.priority}
									</span>
								</td>

								<td className="px-6 py-4">
									<span
										className={`rounded-full px-3 py-1 text-xs font-semibold ${
											statusClasses[
												ticket.status as keyof typeof statusClasses
											]
										}`}
									>
										{ticket.status}
									</span>
								</td>

								<td className="px-6 py-4 text-slate-500">
									{ticket.createdAt}
								</td>

								<td className="px-6 py-4">
									<div className="flex justify-end gap-2">
										<button
											className="rounded-lg p-2 hover:bg-slate-100"
											title="View"
											onClick={() => onView(ticket)}
										>
											<Eye size={18} />
										</button>

										<button
											className="rounded-lg p-2 text-success hover:bg-success/10"
											title="Close Ticket"
										>
											<CheckCircle2 size={18} />
										</button>

										<button
											className="rounded-lg p-2 text-danger hover:bg-danger/10"
											title="Delete"
										>
											<Trash2 size={18} />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="flex items-center justify-between border-t border-slate-200 px-6 py-4">
				<p className="text-sm text-slate-500">
					Showing {tickets.length} tickets
				</p>

				<div className="flex gap-2">
					<button className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-100">
						Previous
					</button>

					<button className="rounded-lg bg-primary px-4 py-2 text-sm text-white">
						1
					</button>

					<button className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-100">
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default TicketTable;
