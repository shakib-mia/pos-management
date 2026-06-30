import { useState } from "react";
import ThemeToolbar from "../components/ThemeToolbar";
import ThemeCard from "../components/ThemeCard";
import UploadThemeModal from "../components/UploadThemeModal";

const ManageThemes = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const themes = [
		{
			id: "1",
			name: "Grocery",
			active: true,
			image: "https://picsum.photos/600/400?random=1",
			version: "1.0.0",
		},
		{
			id: "2",
			name: "Babycare",
			active: false,
			image: "https://picsum.photos/600/400?random=2",
			version: "1.0.0",
		},
		{
			id: "3",
			name: "Steps",
			active: false,
			image: "https://picsum.photos/600/400?random=3",
			version: "1.0.0",
		},
		{
			id: "4",
			name: "Audiobooks",
			active: false,
			image: "https://picsum.photos/600/400?random=4",
			version: "1.0.0",
		},
		{
			id: "5",
			name: "Garden",
			active: false,
			image: "https://picsum.photos/600/400?random=5",
			version: "1.0.0",
		},
		{
			id: "6",
			name: "Diamond",
			active: false,
			image: "https://picsum.photos/600/400?random=6",
			version: "1.0.0",
		},
	];
	return (
		<>
			<ThemeToolbar />

			<div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
				{themes.map((theme) => (
					<ThemeCard key={theme.id} {...theme} />
				))}
			</div>

			<UploadThemeModal
				open={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</>
	);
};

export default ManageThemes;
