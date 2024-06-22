import ImageSale from '../../../assets/images/saleVoucher.png';
export default function ApplyVoucher() {
	return (
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
					<div className="mt-2 grid gap-2">
						{/* box voucher */}
						<div className="border-[1px] p-1 rounded-lg flex gap-2">
							<div>
								<img src={ImageSale} alt="" className="w-[72px] h-[72px]" />
							</div>
							<div className="grow-[2]">
								<div>
									<h3 className="text-[13px] font-semibold">Giảm 50.000₫</h3>
									<p className="text-[11px]">
										Giảm ngay 50.000đ khi mua Tai Nghe Razer.
									</p>
								</div>
								<div className="flex justify-between">
									<div>
										<p className="text-[11px]">
											Mã: <strong>TAINGHERAZER</strong>
										</p>
										<p className="text-[10px]">
											HSD: Chủ nhật, 23:59 30 Thg 06, 2024
										</p>
									</div>
									<div className="self-end">
										<button className="bg-blue-500 text-white outline-none px-4 rounded-2xl text-xs py-1">
											Áp mã
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="border-[1px] p-1 rounded-lg flex gap-2">
							<div>
								<img src={ImageSale} alt="" className="w-[72px] h-[72px]" />
							</div>
							<div className="grow-[2]">
								<div>
									<h3 className="text-[13px] font-semibold">Giảm 50.000₫</h3>
									<p className="text-[11px]">
										Giảm ngay 50.000đ khi mua Tai Nghe Razer.
									</p>
								</div>
								<div className="flex justify-between">
									<div>
										<p className="text-[11px]">
											Mã: <strong>TAINGHERAZER</strong>
										</p>
										<p className="text-[10px]">
											HSD: Chủ nhật, 23:59 30 Thg 06, 2024
										</p>
									</div>
									<div className="self-end">
										<button className="bg-blue-500 text-white outline-none px-4 rounded-2xl text-xs py-1">
											Áp mã
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="border-[1px] p-1 rounded-lg flex gap-2">
							<div>
								<img src={ImageSale} alt="" className="w-[72px] h-[72px]" />
							</div>
							<div className="grow-[2]">
								<div>
									<h3 className="text-[13px] font-semibold">Giảm 50.000₫</h3>
									<p className="text-[11px]">
										Giảm ngay 50.000đ khi mua Tai Nghe Razer.
									</p>
								</div>
								<div className="flex justify-between">
									<div>
										<p className="text-[11px]">
											Mã: <strong>TAINGHERAZER</strong>
										</p>
										<p className="text-[10px]">
											HSD: Chủ nhật, 23:59 30 Thg 06, 2024
										</p>
									</div>
									<div className="self-end">
										<button className="bg-blue-500 text-white outline-none px-4 rounded-2xl text-xs py-1">
											Áp mã
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr className="mt-4" />
					<div className="mt-4">
						<div className="flex justify-between">
							<span className="text-[1rem] font-semibold">Phí vận chuyển :</span>
							<strong className="text-[14px]">40.000₫</strong>
						</div>
						<div className="flex justify-between mt-2">
							<span className="text-[18px] font-semibold">Tổng tiền :</span>{' '}
							<strong className="text-[20px]">40.000₫</strong>
						</div>
						<div className="mt-2">
							<button className="bg-blue-500 text-white w-full py-4 rounded-[4px] text-[18px] font-semibold tracking-[1.6px]">
								Đặt hàng ngay
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
