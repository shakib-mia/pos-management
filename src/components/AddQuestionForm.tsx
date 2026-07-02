import { useState, type ChangeEvent, type FormEvent } from "react";

interface AddQuestionFormProps {
	onSuccess?: () => void;
}

const AddQuestionForm = ({ onSuccess }: AddQuestionFormProps) => {
	const [form, setForm] = useState({
		question: "",
		answer: "",
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
		if (!form.question.trim() || !form.answer.trim()) return;
		console.log({
			question: form.question.trim(),
			answer: form.answer.trim(),
			status: form.status,
		});
		onSuccess?.();
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div>
				<label className="mb-2 block text-sm font-medium text-slate-700">
					Question
				</label>
				<input
					type="text"
					name="question"
					value={form.question}
					onChange={handleChange}
					placeholder="Enter question"
					className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
				/>
			</div>

			<div>
				<label className="mb-2 block text-sm font-medium text-slate-700">
					Answer
				</label>
				<textarea
					name="answer"
					rows={4}
					value={form.answer}
					onChange={handleChange}
					placeholder="Write answer..."
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
					Save Question
				</button>
			</div>
		</form>
	);
};

export default AddQuestionForm;
