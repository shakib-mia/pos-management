import { useState } from "react";

interface Props {
	onSuccess?: () => void;
}

const NewsletterForm = ({ onSuccess }: Props) => {
	const [form, setForm] = useState({
		subject: "",
		audience: "All Subscribers",
		content: "",
		schedule: "",
		status: "Draft",
	});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		console.log(form);

		onSuccess?.();
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div>
				<label className="mb-2 block font-medium">Subject</label>

				<input
					name="subject"
					value={form.subject}
					onChange={handleChange}
					className="w-full rounded-lg border px-4 py-2.5"
				/>
			</div>

			<div>
				<label className="mb-2 block font-medium">Audience</label>

				<select
					name="audience"
					value={form.audience}
					onChange={handleChange}
					className="w-full rounded-lg border px-4 py-2.5"
				>
					<option>All Subscribers</option>
					<option>Active Customers</option>
					<option>VIP Customers</option>
				</select>
			</div>

			<div>
				<label className="mb-2 block font-medium">Email Content</label>

				<textarea
					rows={8}
					name="content"
					value={form.content}
					onChange={handleChange}
					className="w-full rounded-lg border px-4 py-2.5"
				/>
			</div>

			<div className="grid gap-5 md:grid-cols-2">
				<div>
					<label className="mb-2 block font-medium">Schedule</label>

					<input
						type="datetime-local"
						name="schedule"
						value={form.schedule}
						onChange={handleChange}
						className="w-full rounded-lg border px-4 py-2.5"
					/>
				</div>

				<div>
					<label className="mb-2 block font-medium">Status</label>

					<select
						name="status"
						value={form.status}
						onChange={handleChange}
						className="w-full rounded-lg border px-4 py-2.5"
					>
						<option>Draft</option>
						<option>Scheduled</option>
						<option>Send Now</option>
					</select>
				</div>
			</div>

			<div className="flex justify-end gap-3 border-t pt-5">
				<button
					type="button"
					onClick={onSuccess}
					className="rounded-lg border px-5 py-2.5"
				>
					Cancel
				</button>

				<button
					type="submit"
					className="rounded-lg bg-primary px-6 py-2.5 text-white hover:bg-primary-dark"
				>
					Save Campaign
				</button>
			</div>
		</form>
	);
};

export default NewsletterForm;
