import ImageTest from '../../assets/images/m1wden.png';
export default function Cart() {
	return (
		<div className=" w-full mt-20">
			<div className=" max-w-[700px] mx-auto  bg-white shadow-md  p-1 relative max-sm:m-2 rounded-md">
				<div
					className="flex justify-between p-4 m-3  border-[1px]  rounded-sm
				"
				>
					<div className="flex flex-col items-center text-center gap-2 ">
						<span className="w-8 h-8 rounded-full bg-blue-400 flex justify-center items-center">
							<i className="fa-solid fa-bag-shopping block text-white"></i>
						</span>
						<span>Giỏ hàng</span>
					</div>
					<div className="flex flex-col items-center text-center gap-2 ">
						<span className="w-8 h-8 rounded-full border-[1px] border-slate-500 flex justify-center items-center">
							<i className="fa-regular fa-address-card block text-slate-500"></i>
						</span>
						<span>Thông tin đặt hàng</span>
					</div>
					<div className="flex flex-col items-center text-center gap-2 ">
						<span className="w-8 h-8 rounded-full border-[1px] border-slate-500  flex justify-center items-center">
							<i className="fa-solid fa-money-check  block text-slate-500"></i>
						</span>
						<span>Thanh toán</span>
					</div>
					<div className="flex flex-col items-center text-center gap-2 ">
						<span className="w-8 h-8 rounded-full border-[1px] border-slate-500 flex justify-center items-center">
							<i className="fa-regular fa-circle-check block text-slate-500"></i>
						</span>
						<span>Hoàn tất</span>
					</div>
				</div>
				<div className="p-1 mt-8 mb-4 mx-2 grid gap-3">
					<div className="flex justify-between gap-2">
						<div className="text-center">
							<img
								src={ImageTest}
								alt=""
								className="w-[88px] h-[88px] border-[1px] p-2 rounded-sm"
							/>
							<button className="text-[#6D6E72] text-[14px] p-1">
								<i className="bx bx-trash bx-flip-horizontal  mr-1"></i>
								Xóa
							</button>
						</div>
						<p className="flex-grow text-[16px] font-semibold">
							Tấm lót chuột Razer Firefly V2 Pro
						</p>
						<div className="flex flex-col items-end">
							<p className="text-[18px] font-semibold ">2.990.000 ₫</p>
							<p className="mb-4">
								<del className="text-[14px] font-normal">2.990.000₫</del>
							</p>

							<div className=" h-8 flex flex-nowrap ">
								<button className="w-8 h-full border-r-[1px] border-y-[1px] border-l-[1px] rounded-s-sm font-medium ">
									-
								</button>
								<input
									type="text"
									className="max-w-[50px] outline-none border-[1px] text-center h-full"
									readOnly
									value={'1'}
								/>
								<button className="w-8 border-l-[1px] border-y-[1px] border-r-[1px] rounded-e-sm h-full font-medium">
									+
								</button>
							</div>
						</div>
					</div>
					<div className="flex justify-between gap-2">
						<div className="text-center">
							<img
								src={ImageTest}
								alt=""
								className="w-[88px] h-[88px] border-[1px] p-2 rounded-sm"
							/>
							<button className="text-[#6D6E72] text-[14px] p-1">
								<i className="bx bx-trash bx-flip-horizontal  mr-1"></i>
								Xóa
							</button>
						</div>
						<p className="flex-grow text-[16px] font-semibold">
							Tấm lót chuột Razer Firefly V2 Pro
						</p>
						<div className="flex flex-col items-end">
							<p className="text-[18px] font-semibold ">2.990.000 ₫</p>
							<p className="mb-4">
								<del className="text-[14px] font-normal">2.990.000₫</del>
							</p>

							<div className=" h-8 flex flex-nowrap ">
								<button className="w-8 h-full border-r-[1px] border-y-[1px] border-l-[1px] rounded-s-sm font-medium ">
									-
								</button>
								<input
									type="text"
									className="max-w-[50px] outline-none border-[1px] text-center h-full"
									readOnly
									value={'1'}
								/>
								<button className="w-8 border-l-[1px] border-y-[1px] border-r-[1px] rounded-e-sm h-full font-medium">
									+
								</button>
							</div>
						</div>
					</div>
				</div>
				<hr className="p-1 m-2" />
				<div className="p-1 m-2">
					<div>
						<div className="text-blue-500 inline-block p-2 border-[1px] rounded-md cursor-pointer">
							<i class="fa-solid fa-ticket mr-2 "></i>
							<span className="font-medium mr-2">Sử dụng mã giảm giá</span>
							<i class="fa-solid fa-angle-down w-3"></i>
						</div>
						<div className="mt-4 ">
							{/* Input Enter Voucher */}
							<div className="bg-slate-100 p-2 flex gap-2 rounded-md ">
								<input
									type="text"
									className="grow-[2] outline-none p-2 "
									placeholder="Nhập mã giảm giá/Phiếu mua hàng"
								/>
								<button className="h-10 bg-blue-500 text-white  flex-grow rounded-md font-medium">
									Áp dụng
								</button>
							</div>
							<div>{/* box voucher */}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
