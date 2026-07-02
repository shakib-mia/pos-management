import { useState } from "react";
import TicketDetailsModal, {
	type Ticket,
} from "../components/TicketDetailsModal";
import TicketFilters from "../components/TicketFilters";
import TicketStats from "../components/TicketStats";
import TicketTable from "../components/TicketTable";

const mockTicket: Ticket = {
	id: "#TK-1001",
	customer: "John Doe",
	email: "john@example.com",
	subject: "Order not received",
	category: "Delivery",
	priority: "High" as const,
	status: "Open" as const,
	createdAt: "21 Jul 2026",
	message:
		"Hello, I placed my order five days ago but it hasn't arrived yet. The tracking page hasn't been updated for the last three days. Please help me locate my package.",
};

const SupportTickets = () => {
	const [selectedTicket, setSelectedTicket] = useState(mockTicket);
	const [isDetailsOpen, setIsDetailsOpen] = useState(false);

	return (
		<>
			{/* Page Header */}
			<div className="mb-6">
				<h1 className="text-3xl font-bold text-slate-800">
					Support Tickets
				</h1>

				<p className="mt-1 text-slate-500">
					Manage customer support requests and respond to tickets.
				</p>
			</div>

			<div className="space-y-6">
				{/* Stats */}
				<TicketStats />

				{/* Filters */}
				<TicketFilters />

				{/* Table */}
				<div
					onDoubleClick={() => setIsDetailsOpen(true)}
					className="cursor-pointer"
				>
					<TicketTable onView={setSelectedTicket} />
				</div>
			</div>

			{/* Details Modal */}
			<TicketDetailsModal
				open={isDetailsOpen}
				ticket={selectedTicket}
				onClose={() => setIsDetailsOpen(false)}
			/>
		</>
	);
};

export default SupportTickets;
