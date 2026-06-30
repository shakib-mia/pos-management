import { ArrowRight, Sparkles } from "lucide-react";

export default function WelcomeBanner() {
	return (
		<div className="bg-linear-to-r from-primary to-primary-dark rounded-2xl p-8 text-white shadow-lg">
			<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
				<div>
					<div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-sm mb-4">
						<Sparkles size={16} />
						<span>Dashboard Overview</span>
					</div>

					<h2 className="text-3xl font-bold mb-3">
						Good Evening, Demo Admin 👋
					</h2>

					<p className="text-white/90 max-w-2xl leading-7">
						Welcome back to your POS Management dashboard. Manage
						products, customers, orders, and monitor your store's
						performance from one place.
					</p>

					<div className="flex flex-wrap gap-4 mt-8">
						<button className="px-5 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-slate-100 transition">
							Quick Add Product
						</button>

						<button className="px-5 py-3 rounded-xl border border-white/40 hover:bg-white/10 transition flex items-center gap-2">
							Manage Store
							<ArrowRight size={18} />
						</button>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-4 min-w-70">
					<div className="bg-white/10 backdrop-blur rounded-xl p-5">
						<p className="text-white/70 text-sm">Today's Orders</p>

						<h3 className="text-3xl font-bold mt-2">12</h3>
					</div>

					<div className="bg-white/10 backdrop-blur rounded-xl p-5">
						<p className="text-white/70 text-sm">Revenue</p>

						<h3 className="text-3xl font-bold mt-2">$2,450</h3>
					</div>

					<div className="bg-white/10 backdrop-blur rounded-xl p-5">
						<p className="text-white/70 text-sm">Customers</p>

						<h3 className="text-3xl font-bold mt-2">198</h3>
					</div>

					<div className="bg-white/10 backdrop-blur rounded-xl p-5">
						<p className="text-white/70 text-sm">Products</p>

						<h3 className="text-3xl font-bold mt-2">456</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
