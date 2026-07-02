import { useState } from "react";
import { Plus, Search } from "lucide-react";
import SubCategoryTable from "../components/SubCategoryTable";
import SubCategoryModal from "../components/SubCategoryModal";

const SubCategories = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold text-slate-800">
						Sub Categories
					</h1>

					<p className="mt-1 text-slate-500">
						Manage your product sub categories.
					</p>
				</div>

				<button
					onClick={() => setIsModalOpen(true)}
					className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-white hover:bg-primary-dark"
				>
					<Plus size={18} />
					Add Sub Category
				</button>
			</div>

			<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
				<div className="relative">
					<Search
						size={18}
						className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
					/>

					<input
						type="text"
						placeholder="Search sub category..."
						className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 focus:border-primary focus:outline-none"
					/>
				</div>
			</div>

			<SubCategoryTable />

			<SubCategoryModal
				open={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</div>
	);
};

export default SubCategories;
