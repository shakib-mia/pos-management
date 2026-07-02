import { useState } from "react";

const OrderCompleteScreenForm = () => {
	const [title, setTitle] = useState("Thank You!");
	const [message, setMessage] = useState(
		"Your order has been placed successfully. We appreciate your purchase.",
	);
	const [buttonText, setButtonText] = useState("Continue Shopping");
	const [buttonUrl, setButtonUrl] = useState("/");
	const [showOrderSummary, setShowOrderSummary] = useState(true);
	const [showEstimatedDelivery, setShowEstimatedDelivery] = useState(true);
	const [enableConfetti, setEnableConfetti] = useState(false);

	return (
		<div className="mt-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
			<h2 className="mb-8 text-xl font-semibold text-slate-800">
				Order Complete Screen
			</h2>

			<div className="space-y-6">
				{/* Title */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Page Title
					</label>

					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
					/>
				</div>

				{/* Message */}
				<div>
					<label className="mb-2 block text-sm font-medium text-slate-700">
						Success Message
					</label>

					<textarea
						rows={4}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
					/>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					{/* Button Text */}
					<div>
						<label className="mb-2 block text-sm font-medium text-slate-700">
							Button Text
						</label>

						<input
							type="text"
							value={buttonText}
							onChange={(e) => setButtonText(e.target.value)}
							className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
						/>
					</div>

					{/* Button URL */}
					<div>
						<label className="mb-2 block text-sm font-medium text-slate-700">
							Button URL
						</label>

						<input
							type="text"
							value={buttonUrl}
							onChange={(e) => setButtonUrl(e.target.value)}
							placeholder="/"
							className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
						/>
					</div>
				</div>

				{/* Options */}
				<div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
					<h3 className="mb-5 text-lg font-semibold text-slate-800">
						Display Options
					</h3>

					<div className="space-y-5">
						<label className="flex items-center justify-between">
							<div>
								<p className="font-medium text-slate-800">
									Show Order Summary
								</p>

								<p className="text-sm text-slate-500">
									Display purchased products, quantity and
									total amount.
								</p>
							</div>

							<input
								type="checkbox"
								checked={showOrderSummary}
								onChange={(e) =>
									setShowOrderSummary(e.target.checked)
								}
								className="h-5 w-5 accent-primary"
							/>
						</label>

						<label className="flex items-center justify-between">
							<div>
								<p className="font-medium text-slate-800">
									Show Estimated Delivery
								</p>

								<p className="text-sm text-slate-500">
									Display estimated delivery information.
								</p>
							</div>

							<input
								type="checkbox"
								checked={showEstimatedDelivery}
								onChange={(e) =>
									setShowEstimatedDelivery(e.target.checked)
								}
								className="h-5 w-5 accent-primary"
							/>
						</label>

						<label className="flex items-center justify-between">
							<div>
								<p className="font-medium text-slate-800">
									Enable Celebration
								</p>

								<p className="text-sm text-slate-500">
									Show confetti animation after successful
									checkout.
								</p>
							</div>

							<input
								type="checkbox"
								checked={enableConfetti}
								onChange={(e) =>
									setEnableConfetti(e.target.checked)
								}
								className="h-5 w-5 accent-primary"
							/>
						</label>
					</div>
				</div>

				{/* Preview */}
				<div className="rounded-xl border border-dashed border-primary bg-primary/5 p-6">
					<h3 className="text-center text-2xl font-bold text-slate-800">
						{title}
					</h3>

					<p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
						{message}
					</p>

					<div className="mt-6 flex justify-center">
						<button
							type="button"
							className="rounded-lg bg-primary px-6 py-3 font-medium text-white"
						>
							{buttonText}
						</button>
					</div>
				</div>
			</div>

			<div className="mt-8 flex justify-end gap-3">
				<button
					type="button"
					className="rounded-lg border border-slate-300 px-5 py-2.5 font-medium hover:bg-slate-100"
				>
					Cancel
				</button>

				<button
					type="submit"
					className="rounded-lg bg-primary px-5 py-2.5 font-medium text-white transition hover:bg-primary-dark"
				>
					Save Changes
				</button>
			</div>
		</div>
	);
};

export default OrderCompleteScreenForm;
