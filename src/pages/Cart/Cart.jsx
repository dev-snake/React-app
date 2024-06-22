import ApplyVoucher from './apply-voucher/ApplyVoucher';
import CartItem from './cart-item/CartItem';
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
				<CartItem />
				<hr className="p-1 m-2" />
				<ApplyVoucher />
			</div>
		</div>
	);
}
