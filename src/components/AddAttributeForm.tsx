import { useState, type ChangeEvent, type FormEvent } from "react";
import { Plus, Trash2 } from "lucide-react";

interface AddAttributeFormProps {
	onSuccess?: () => void;
}

const AddAttributeForm = ({ onSuccess }: AddAttributeFormProps) => {
	const [name, setName] = useState("");
	const [values, setValues] = useState([""]);
	const [status, setStatus] = useState("Active");

	const handleValueChange = (index: number, value: string) => {
		setValues((prev) =>
			prev.map((item, itemIndex) => (itemIndex === index ? value : item)),
		);
	};

	const addValue = () => {
		setValues((prev) => [...prev, ""]);
	};

	const removeValue = (index: number) => {
		setValues((prev) =>
			prev.length > 1
				? prev.filter((_, itemIndex) => itemIndex !== index)
				: prev,
		);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const trimmedName = name.trim();
		const filteredValues = values
			.map((value) => value.trim())
			.filter(Boolean);

		if (!trimmedName || filteredValues.length === 0) return;

		const payload = {
			name: trimmedName,
			values: filteredValues,
			status,
		};

		console.log(payload);
		onSuccess?.();
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div>
				<label className="mb-2 block text-sm font-medium text-slate-700">
					Attribute Name <span className="text-danger">*</span>
				</label>

				<input
					type="text"
					value={name}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setName(e.target.value)
					}
					placeholder="Enter attribute name"
					className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
				/>
			</div>

			<div>
				<label className="mb-2 block text-sm font-medium text-slate-700">
					Attribute Values
				</label>

				<div className="space-y-3">
					{values.map((value, index) => (
						<div key={index} className="flex items-center gap-2">
							<input
								type="text"
								value={value}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									handleValueChange(index, e.target.value)
								}
								placeholder={`Value ${index + 1}`}
								className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
							/>

							<button
								type="button"
								onClick={() => removeValue(index)}
								className="rounded-lg border border-slate-200 p-2.5 text-danger transition hover:bg-danger/10"
							>
								<Trash2 size={18} />
							</button>
						</div>
					))}
				</div>

				<button
					type="button"
					onClick={addValue}
					className="flex items-center gap-2 rounded-lg border border-dashed border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
				>
					<Plus size={16} />
					Add Value
				</button>
			</div>

			<div>
				<label className="mb-2 block text-sm font-medium text-slate-700">
					Status
				</label>

				<select
					value={status}
					onChange={(e: ChangeEvent<HTMLSelectElement>) =>
						setStatus(e.target.value)
					}
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
					Save Attribute
				</button>
			</div>
		</form>
	);
};

export default AddAttributeForm;
