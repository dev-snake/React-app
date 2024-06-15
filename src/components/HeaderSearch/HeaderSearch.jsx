export default function HeaderSearch() {
	return (
		<div className="absolute top-20 right-2 bg-slate-50 p-2 rounded-xl shadow-sm hidden transition-all duration-300 ease-in-out">
			<input
				type="text"
				className="p-2 outline-none rounded-xl mr-2 shadow-xl w-60"
				placeholder="Mày cần tìm gì ?"
			/>
			<i className="bx bx-search inline-block p-2 bg-blue-500 text-white rounded-xl cursor-pointer"></i>
		</div>
	);
}
