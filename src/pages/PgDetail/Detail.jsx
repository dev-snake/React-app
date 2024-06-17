import ImageTest from '../../assets/images/m1wden.png';
export default function PageDetail() {
	return (
		<section className="max-w-[1300px] mx-auto mt-20  shadow-sm rounded-sm">
			<div className="flex bg-white">
				<div className="basis-[35%] border-r-2 h-full">
					<div className="flex justify-center m-4 ">
						<img src={ImageTest} alt="" className="w-[372px] h-[372px] object-cover " />
					</div>
					<div className="m-4">
						<button className="w-16 h-16 focus:border-2 border-blue-500 rounded-sm transition-all ease-in-out mr-2">
							<img
								src="https://product.hstatic.net/200000722513/product/9ktbn43h_c8d1e233aee24077ae3ccb8061b5c7bc_grande.png"
								alt=""
								className="w-full h-full"
							/>
						</button>
						<button className="w-16 h-16 focus:border-2 border-blue-500 rounded-sm transition-all ease-in-out mr-2">
							<img
								src="https://product.hstatic.net/200000722513/product/bfo6ep9j_37d6891e25d94d7fa37cd147bc3464e8_grande.png"
								alt=""
								className="w-full h-full"
							/>
						</button>
						<button className="w-16 h-16 focus:border-2 border-blue-500 rounded-sm transition-all ease-in-out mr-2">
							<img
								src="https://product.hstatic.net/200000722513/product/32q6ue9b_dd64156f5869455da6d4172f9faa0fa0_compact.png"
								alt=""
								className="w-full h-full"
							/>
						</button>
						<button className="w-16 h-16 focus:border-2 border-blue-500 rounded-sm transition-all ease-in-out mr-2">
							<img
								src="https://product.hstatic.net/200000722513/product/32q6ue9b_dd64156f5869455da6d4172f9faa0fa0_compact.png"
								alt=""
								className="w-full h-full"
							/>
						</button>
					</div>
				</div>
				<div className="flex-grow-[2] p-4">
					<p className="text-2xl font-medium">Chuột Razer Không dây Viper V3 Pro Trắng</p>
					<p className="text-xl mt-2">0 Xem đánh giá</p>
					<p className="flex items-center gap-5 mt-2">
						<span className="text-2xl font-semibold">4.490.000 ₫ </span>
						<del className="text-[18px]">4.990.000₫</del>
						<span className="text-xs border-2 text-red-500 border-red-400 px-2 py-1">
							25%
						</span>
					</p>
					<div className="flex gap-4 mt-4">
						<button>
							<img
								src="https://product.hstatic.net/200000722513/product/bfo6ep9j_37d6891e25d94d7fa37cd147bc3464e8_grande.png"
								alt=""
								className="w-12 h-12 border-2 rounded-sm"
							/>
							<span className="text-xs font-medium">Đen</span>
						</button>
						<button>
							<img
								src="https://product.hstatic.net/200000722513/product/ci9f8k75_e9e8bebbbb164f648e7bf94d561919f7_grande.png"
								alt=""
								className="w-12 h-12 border-2 rounded-sm"
							/>
							<span className="text-xs font-medium">Trắng</span>
						</button>
					</div>
					<div>
						<button className="max-w-[400px] h-12 bg-[#bcbec2] block w-full text-white font-medium rounded-sm mt-4">
							Hết hàng
						</button>
					</div>
					<div className="mt-4">
						<h1 className="capitalize text-xl font-semibold">Thông tin chung : </h1>
						<p className="text-xl mt-4">
							<span className="font-medium">Nhà sản xuất :</span> Razer
						</p>
						<p className="text-xl">
							<span className="font-medium">Tình trạng : </span>Mới
						</p>
						<p className="text-xl">
							<span className="font-medium">Bảo hành : </span>24 tháng
						</p>
					</div>
				</div>
			</div>
			{/* Products Information */}
			<div className="flex mt-4 gap-4">
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
									Lên đến 100 giờ với Razer HyperSpeed Wireless (1000Hz) Lên đến
									33 giờ với Razer HyperPolling Wireless Dongle và Mouse Dock Pro*
									(4000Hz) Lưu ý: Sản phẩm không bao gồm HyperPolling Wireless
									Dongle và Mouse Dock Pro Lên đến 170 giờ với Bluetooth
								</td>
							</tr>
							<tr>
								<td className="w-[240px] p-2 border-[1px] bg-slate-50 font-semibold">
									Kết nối
								</td>
								<td className="border-[1px] p-2">
									Razer™ HyperSpeed Wireless (2.4 GHz) Bluetooth Có dây – Dây
									Speedflex USB Type C
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
				<div className="bg-white flex-grow p-4 rounded-md">
					<h1 className="text-xl font-semibold ">Sản phẩm tương tự</h1>
					<div className="grid gap-2 mt-4">
						<div className="flex border-[1px] p-4 gap-4 rounded-md">
							<img
								src="https://product.hstatic.net/200000722513/product/9ktbn43h_c8d1e233aee24077ae3ccb8061b5c7bc_grande.png"
								alt=""
								className="w-28 h-28 object-cover"
							/>
							<div>
								<p className=" text-[14px] font-semibold">
									Chuột Razer Viper V3 Pro
								</p>
								<p className=" text-[14px] font-semibold mt-2">
									4.490.000 ₫{' '}
									<span className="bg-red-100 text-red-500 border-[1px] border-red-500 p-1 ml-2">
										25%
									</span>
								</p>
								<del className="mt-2">4.990.000</del>
								<p className="text-xs mt-1">0 Đánh giá</p>
							</div>
						</div>
						<div className="flex border-[1px] p-4 gap-4 rounded-md">
							<img
								src="https://product.hstatic.net/200000722513/product/9ktbn43h_c8d1e233aee24077ae3ccb8061b5c7bc_grande.png"
								alt=""
								className="w-28 h-28 object-cover"
							/>
							<div>
								<p className=" text-[14px] font-semibold">
									Chuột Razer Viper V3 Pro
								</p>
								<p className=" text-[14px] font-semibold mt-2">
									4.490.000 ₫{' '}
									<span className="bg-red-100 text-red-500 border-[1px] border-red-500 p-1 ml-2">
										25%
									</span>
								</p>
								<del className="mt-2">4.990.000</del>
								<p className="text-xs mt-1">0 Đánh giá</p>
							</div>
						</div>
						<div className="flex border-[1px] p-4 gap-4 rounded-md">
							<img
								src="https://product.hstatic.net/200000722513/product/9ktbn43h_c8d1e233aee24077ae3ccb8061b5c7bc_grande.png"
								alt=""
								className="w-28 h-28 object-cover"
							/>
							<div>
								<p className=" text-[14px] font-semibold">
									Chuột Razer Viper V3 Pro
								</p>
								<p className=" text-[14px] font-semibold mt-2">
									4.490.000 ₫{' '}
									<span className="bg-red-100 text-red-500 border-[1px] border-red-500 p-1 ml-2">
										25%
									</span>
								</p>
								<del className="mt-2">4.990.000</del>
								<p className="text-xs mt-1">0 Đánh giá</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
