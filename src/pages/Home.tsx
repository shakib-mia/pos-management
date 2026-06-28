import { Link } from "react-router";

const Home = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center bg-success/20 px-4">
			<div className="w-full max-w-lg bg-white/90 shadow-lg rounded-xl p-8 border border-slate-200 text-center">
				<h1 className="text-3xl font-semibold text-slate-900 mb-6">
					POS Management
				</h1>
				<p className="text-slate-600 mb-8">
					Welcome to the POS management app. Choose an action below to
					continue.
				</p>

				<div className="space-y-4">
					<Link
						to="/login"
						className="block rounded-lg bg-primary px-5 py-3 text-white font-semibold hover:bg-primary-dark transition-colors"
					>
						Login
					</Link>
					<Link
						to="/register"
						className="block rounded-lg border border-slate-300 px-5 py-3 text-slate-900 font-semibold hover:bg-slate-100 transition-colors"
					>
						Register
					</Link>
					<Link
						to="/forgot-password"
						className="block rounded-lg border border-slate-300 px-5 py-3 text-slate-900 font-semibold hover:bg-slate-100 transition-colors"
					>
						Forgot Password
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
