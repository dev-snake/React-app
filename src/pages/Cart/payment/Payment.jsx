import shipCod from '../../../assets/images/cod.png';
import ButtonPayment from '../ButtonPayment/ButtonPayment';
function Payment() {
	return (
		<div className="p-5">
			<h1 className="text-[24px] font-semibold pb-3">Thông tin đặt hàng</h1>
			<div>
				<div className=" relative text-[1rem] font-medium before:content-['•']  before:absolute h-9 flex justify-between gap-10  ">
					<span className="ml-3 text-[1rem] font-semibold">Khách hàng</span>
					<span>Đặng Văn Hậu Hacker Chuyên nghiệp </span>
				</div>
				<div className=" relative text-[1rem] font-medium before:content-['•']  before:absolute h-9 flex justify-between gap-10  ">
					<span className="ml-3 text-[1rem] font-semibold">Số điện thoại</span>
					<span>0337178767</span>
				</div>
				<div className=" relative text-[1rem] font-medium before:content-['•']  before:absolute h-9 flex justify-between gap-10  ">
					<span className="ml-3 text-[1rem] font-semibold">Địa chỉ nhận hàng</span>
					<span>Đị7ntyjtyujtyujtyujtyuja chỉ nhận hàng</span>
				</div>
				<div className=" relative text-[1rem] font-medium before:content-['•']  before:absolute h-9 flex justify-between gap-10  ">
					<span className="ml-3 text-[1rem] font-semibold">Tạm tính</span>
					<span className="text-red-500 font-semibold">1.890.000₫</span>
				</div>
				<div className=" relative text-[1rem] font-medium before:content-['•']  before:absolute h-9 flex justify-between gap-10  ">
					<span className="ml-3 text-[1rem] font-semibold">Phí vận chuyển</span>
					<span className="text-red-500 font-semibold">40.000₫</span>
				</div>
				<div className=" relative text-[1rem] font-medium before:content-['•']  before:absolute h-9 flex justify-between gap-10  ">
					<span className="ml-3 text-[1rem] font-semibold"> Giảm giá</span>
					<span className="text-red-500 font-semibold"> -50.000₫</span>
				</div>
				<div className=" relative text-[1rem] font-medium before:content-['•']  before:absolute h-9 flex justify-between gap-10  ">
					<span className="ml-3 text-[1rem] font-semibold">Tổng tiền</span>
					<span className="text-red-500 font-semibold">1.880.000₫</span>
				</div>
			</div>
			<hr />
			<div className="mt-4">
				<h2 className="text-2xl font-semibold mb-2">Chọn hình thức thanh toán</h2>
				<div className="flex gap-4">
					<input type="radio" defaultChecked />
					<img src={shipCod} alt="" className="w-6 h-6" />
					<span>Thanh toán khi giao hàng (COD)</span>
				</div>
			</div>
			<ButtonPayment />
		</div>
	);
}
export default Payment;
