import { useState, type ChangeEvent, type FormEvent } from "react";

interface AddTestimonialFormProps {
	onSuccess?: () => void;
}

const AddTestimonialForm = ({ onSuccess }: AddTestimonialFormProps) => {
	const [form, setForm] = useState({
		client: "",
		message: "",
		status: "Active",
	});

	const handleChange = (
		e: ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!form.client.trim() || !form.message.trim()) return;
		console.log({
			...form,
			client: form.client.trim(),
			message: form.message.trim(),
		});
		onSuccess?.();
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div>
				<label className="mb-2 block text-sm font-medium text-slate-700">
					Client Name
				</label>
				<input
					type="text"
					name="client"
					value={form.client}
					onChange={handleChange}
					placeholder="Enter client name"
					className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
				/>
			</div>

			<div>
				<label className="mb-2 block text-sm font-medium text-slate-700">
					Message
				</label>
				<textarea
					name="message"
					rows={4}
					value={form.message}
					onChange={handleChange}
					placeholder="Write testimonial..."
					className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
				/>
			</div>

			<div>
				<label className="mb-2 block text-sm font-medium text-slate-700">
					Status
				</label>
				<select
					name="status"
					value={form.status}
					onChange={handleChange}
					className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
				>
					<option value="Active">Active</option>
					<option value="Inactive">Inactive</option>
				</select>
			</div>

			<div className="flex justify-end gap-3 border-t border-slate-200 pt-5">
				<button
					type="button"
					onClick={onSuccess}
					className="rounded-lg border border-slate-300 px-5 py-2.5 transition hover:bg-slate-100"
				>
					Cancel
				</button>
				<button
					type="submit"
					className="rounded-lg bg-primary px-6 py-2.5 font-medium text-white transition hover:bg-primary-dark"
				>
					Save Testimonial
				</button>
			</div>
		</form>
	);
};

export default AddTestimonialForm;
