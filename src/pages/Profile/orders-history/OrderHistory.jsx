function OrderHistory() {
	return (
		<>
			<p className="capitalize text-xl px-4 font-semibold">Lịch Sử Mua hàng</p>
			<table className="border-collapse table-auto w-full text-sm">
				<thead>
					<tr className="h-10">
						<th className="max-md:hidden">STT</th>
						<th>Mã đơn hàng</th>
						<th>Ngày đặt</th>
						<th>Trạng thái</th>
						<th>Thao tác</th>
						<th>Hủy đơn</th>
					</tr>
				</thead>
				<tbody className="text-center">
					<tr className="h-10">
						<td className="border-b border-slate-100 p-4 max-md:hidden"></td>
						<td className="border-b border-slate-100 p-4"></td>
						<td className="border-b border-slate-100 p-4"></td>
						<td className="border-b border-slate-100 p-4">
							<span className="p-2 rounded-2xl font-semibold truncate"></span>
						</td>
						<td className="border-b border-slate-100 p-2">
							<a>
								<i className="fa-solid fa-eye bg-blue-400 p-2 rounded-xl text-white"></i>
							</a>
						</td>
						<td className="border-b border-slate-100 p-2">
							<button className="fa-solid fa-trash bg-red-400 p-2 rounded-xl text-white cursor-pointer"></button>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}
export default OrderHistory;
