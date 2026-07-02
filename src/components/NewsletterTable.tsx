import { Edit, Eye, Trash2 } from "lucide-react";

const campaigns = [
	{
		id: 1,
		subject: "Summer Sale 2026",
		subscribers: 2450,
		sent: 2401,
		openRate: "46%",
		date: "15 Jul 2026",
		status: "Sent",
	},
	{
		id: 2,
		subject: "Weekend Deals",
		subscribers: 2450,
		sent: 0,
		openRate: "-",
		date: "20 Jul 2026",
		status: "Scheduled",
	},
];

const NewsletterTable = () => {
	return (
		<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-slate-50">
						<tr>
							<th className="px-6 py-4 text-left">Subject</th>
							<th className="px-6 py-4 text-left">Subscribers</th>
							<th className="px-6 py-4 text-left">Sent</th>
							<th className="px-6 py-4 text-left">Open Rate</th>
							<th className="px-6 py-4 text-left">Date</th>
							<th className="px-6 py-4 text-left">Status</th>
							<th className="px-6 py-4 text-right">Actions</th>
						</tr>
					</thead>

					<tbody>
						{campaigns.map((campaign) => (
							<tr key={campaign.id} className="border-t">
								<td className="px-6 py-4 font-medium">
									{campaign.subject}
								</td>

								<td className="px-6 py-4">
									{campaign.subscribers}
								</td>

								<td className="px-6 py-4">{campaign.sent}</td>

								<td className="px-6 py-4">
									{campaign.openRate}
								</td>

								<td className="px-6 py-4">{campaign.date}</td>

								<td className="px-6 py-4">
									<span
										className={`rounded-full px-3 py-1 text-xs font-semibold ${
											campaign.status === "Sent"
												? "bg-success/10 text-success"
												: "bg-yellow-100 text-yellow-700"
										}`}
									>
										{campaign.status}
									</span>
								</td>

								<td className="px-6 py-4">
									<div className="flex justify-end gap-2">
										<button className="rounded-lg p-2 hover:bg-slate-100">
											<Eye size={18} />
										</button>

										<button className="rounded-lg p-2 text-primary hover:bg-primary/10">
											<Edit size={18} />
										</button>

										<button className="rounded-lg p-2 text-danger hover:bg-danger/10">
											<Trash2 size={18} />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default NewsletterTable;
