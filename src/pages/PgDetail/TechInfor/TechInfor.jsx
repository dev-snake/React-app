export default function TechInfor() {
	return (
		<div className=" bg-white  p-4 rounded-md basis-[700px] ">
			<h1 className="text-2xl">Thông tin sản phẩm </h1>
			<h2 className="text-xl font-semibold mt-2">Thông số kỹ thuật</h2>
			<table className="border-[1px]">
				<tbody>
					<tr>
						<td className="w-[240px] p-2 border-[1px] bg-slate-50 font-semibold">
							Hãng sản xuất
						</td>
						<td className="border-[1px] p-2"> Razer</td>
					</tr>
					<tr>
						<td className="w-[240px] p-2 border-[1px] bg-slate-50 font-semibold">
							Model
						</td>
						<td className="border-[1px] p-2">Razer Cobra Pro</td>
					</tr>
					<tr>
						<td className="w-[240px] p-2 border-[1px] bg-slate-50 font-semibold">
							Số nút
						</td>
						<td className="border-[1px] p-2"> 8 nút có thể lập trình</td>
					</tr>
					<tr>
						<td className="w-[240px] p-2 border-[1px] bg-slate-50 font-semibold">
							{' '}
							RGB LIGHTING
						</td>
						<td className="border-[1px] p-2">
							Razer Chroma™ RGB (Con lăn, Logo, nhiều vùng bên dưới chuột)
						</td>
					</tr>
					<tr>
						<td className="w-[240px] p-2 border-[1px] bg-slate-50 font-semibold">
							Pin
						</td>
						<td className="border-[1px] p-2">
							Lên đến 100 giờ với Razer HyperSpeed Wireless (1000Hz) Lên đến 33 giờ
							với Razer HyperPolling Wireless Dongle và Mouse Dock Pro* (4000Hz) Lưu
							ý: Sản phẩm không bao gồm HyperPolling Wireless Dongle và Mouse Dock Pro
							Lên đến 170 giờ với Bluetooth
						</td>
					</tr>
					<tr>
						<td className="w-[240px] p-2 border-[1px] bg-slate-50 font-semibold">
							Kết nối
						</td>
						<td className="border-[1px] p-2">
							Razer™ HyperSpeed Wireless (2.4 GHz) Bluetooth Có dây – Dây Speedflex
							USB Type C
						</td>
					</tr>
					<tr>
						<td className="w-[240px] p-2 border-[1px] bg-slate-50 font-semibold">
							Độ phân giải (CPI/DPI)
						</td>
						<td className="border-[1px] p-2"> 30.000 DPI</td>
					</tr>
					<tr>
						<td className="w-[240px] p-2 border-[1px] bg-slate-50 font-semibold">
							Gia tốc:
						</td>
						<td className="border-[1px] p-2"> 750 IPS / 70G</td>
					</tr>
					<tr>
						<td className="w-[240px] p-2 border-[1px] bg-slate-50 font-semibold">
							Kích thước
						</td>
						<td className="border-[1px] p-2">127.0 x 61.7 x 42.7 mm</td>
					</tr>
					<tr>
						<td className="w-[240px] p-2 border-[1px] bg-slate-50 font-semibold">
							Trọng lượng
						</td>
						<td className="border-[1px] p-2">77g</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
