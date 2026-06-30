import { useContext, useRef, useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "./../../firebase.init";
import { AppContext } from "../contexts/AppContexts";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
	const { userData, setUserData, setToken } = useContext(AppContext);
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	// console.log(userData);
	const handleLogout = async () => {
		try {
			localStorage.removeItem("accessToken");
			toast.success("Logged out successfully.", {
				position: "bottom-center",
			});
			setToken(null);
			setUserData(null);

			window.location.href = "/login";
			await signOut(auth);
		} catch (error) {
			console.error(error);

			toast.error("Failed to logout.", {
				position: "bottom-center",
			});
		}
	};

	return (
		<nav className="flex items-center justify-end px-6 py-4 bg-white border-b border-slate-200 shadow-sm">
			{userData ? (
				<div className="relative" ref={dropdownRef}>
					<button
						onClick={() => setOpen((prev) => !prev)}
						className="rounded-full overflow-hidden hover:ring-2 hover:ring-primary transition"
					>
						{userData.photoURL ? (
							<img
								src={userData.photoURL}
								alt={userData.fullName}
								className="w-10 h-10 rounded-full object-cover"
							/>
						) : (
							<RxAvatar className="text-5xl text-slate-500" />
						)}
					</button>

					{open && (
						<div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50">
							<div className="px-4 py-3 border-b">
								<p className="font-semibold text-slate-800">
									{userData.fullName}
								</p>
								<p className="text-sm text-slate-500 truncate">
									{userData.email}
								</p>
							</div>

							<ul className="py-1">
								<li>
									<button
										onClick={handleLogout}
										className="w-full text-left px-4 py-2.5 text-danger hover:bg-red-50 transition"
									>
										Logout
									</button>
								</li>
							</ul>
						</div>
					)}
				</div>
			) : (
				<p className="text-slate-500">Not logged in</p>
			)}
		</nav>
	);
};

export default Navbar;
