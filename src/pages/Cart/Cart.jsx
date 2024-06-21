export default function Cart() {
	return (
		<div className=" w-full mt-20">
			<div className=" max-w-[700px] mx-auto  bg-white shadow-lg rounded-lg p-1 relative">
				<div className="flex justify-between p-9 m-3  border-[1px] relative">
					<div className="flex flex-col items-center text-center gap-2">
						<span className="w-10 h-10 rounded-full bg-blue-400 flex justify-center items-center">
							<i className="fa-solid fa-bag-shopping block text-white"></i>
						</span>
						<span>Giỏ hàng</span>
					</div>
					<div className="flex flex-col items-center text-center gap-2">
						<span className="w-10 h-10 rounded-full border-[1px] border-slate-500 flex justify-center items-center">
							<i className="fa-regular fa-address-card block text-slate-500"></i>
						</span>
						<span>Thông tin đặt hàng</span>
					</div>
					<div className="flex flex-col items-center text-center gap-2">
						<span className="w-10 h-10 rounded-full border-[1px] border-slate-500  flex justify-center items-center">
							<i className="fa-solid fa-money-check  block text-slate-500"></i>
						</span>
						<span>Thanh toán</span>
					</div>
					<div className="flex flex-col items-center text-center gap-2">
						<span className="w-10 h-10 rounded-full border-[1px] border-slate-500 flex justify-center items-center">
							<i className="fa-regular fa-circle-check block text-slate-500"></i>
						</span>
						<span>Hoàn tất</span>
					</div>
				</div>
			</div>
		</div>
	);
}
