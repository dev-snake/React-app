import { Button, Checkbox, Image } from '@nextui-org/react';
import shipCod from '../../../assets/images/cod.png';
import { formatMoney } from '../../../utils/formatNumber';
import { toast } from 'sonner';
import axios from 'axios';
import { config } from '../../../config/config';
import { API } from '../../../service/api/API';
import { useNavigate } from 'react-router-dom';
function Payment() {
	const navigate = useNavigate();
	const shippingFee = 40000;
	const inforOrder = JSON.parse(localStorage.getItem('inforOrder') || '{}');
	const handleSubmitOrder = () => {
		const newOrder = new Promise((resolve, reject) => {
			axios
				.post(API.CREATE_ORDER, inforOrder, config)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error.message));
		});
		toast.promise(newOrder, {
			loading: 'Đang xử lý đơn hàng...',
			success: 'Đặt hàng thành công',
			error: (error) => `${error}`
		});
		localStorage.removeItem('inforOrder');
		localStorage.removeItem('cartItems');
		localStorage.removeItem('voucher');
		navigate('/cart/order-success');
	};
	return (
		<div className="p-5">
			<h1 className="text-[24px] font-semibold pb-3">Thông tin đặt hàng</h1>
			<div>
				<div className=" relative text-[1rem] font-medium before:content-['•']  before:absolute h-9 flex justify-between gap-10  ">
					<span className="ml-3 text-[1rem] font-semibold">Khách hàng</span>
					<span>{inforOrder?.fullname} </span>
				</div>
				<div className=" relative text-[1rem] font-medium before:content-['•']  before:absolute h-9 flex justify-between gap-10  ">
					<span className="ml-3 text-[1rem] font-semibold">Số điện thoại</span>
					<span>{inforOrder?.phonenumber}</span>
				</div>
				<div className=" relative text-[1rem] font-medium before:content-['•']  before:absolute h-11  flex justify-between  ">
					<span className="ml-3 text-[1rem] font-semibold">Địa chỉ nhận hàng</span>
					<div>
						<div>{`${inforOrder?.province},${inforOrder?.district},${inforOrder?.ward}`}</div>
						<div>{inforOrder?.specificAddress}</div>
					</div>
				</div>
				<div className=" relative text-[1rem] font-medium before:content-['•']  before:absolute h-9 flex justify-between gap-10  ">
					<span className="ml-3 text-[1rem] font-semibold">Tạm tính</span>
					<span className="text-red-500 font-semibold">
						{formatMoney(inforOrder.total)} ₫
					</span>
				</div>
				<div className=" relative text-[1rem] font-medium before:content-['•']  before:absolute h-9 flex justify-between gap-10  ">
					<span className="ml-3 text-[1rem] font-semibold">Phí vận chuyển</span>
					<span className="text-red-500 font-semibold">{formatMoney(shippingFee)}₫</span>
				</div>
				<div className=" relative text-[1rem] font-medium before:content-['•']  before:absolute h-9 flex justify-between gap-10  ">
					<span className="ml-3 text-[1rem] font-semibold"> Giảm giá</span>
					<span className="text-red-500 font-semibold">
						- {formatMoney(inforOrder.voucher)}₫
					</span>
				</div>
				<div className=" relative text-[1rem] font-medium before:content-['•']  before:absolute h-9 flex justify-between gap-10  ">
					<span className="ml-3 text-[1rem] font-semibold">Tổng tiền</span>
					<span className="text-red-500 font-semibold">
						{formatMoney(inforOrder.total - shippingFee - inforOrder.voucher)}₫
					</span>
				</div>
			</div>
			<hr />
			<div className="mt-4">
				<h2 className="text-2xl font-semibold mb-2">Chọn hình thức thanh toán</h2>
				<div className="flex gap-4">
					{/* <input type="radio" defaultChecked /> */}
					<Checkbox isDisabled defaultSelected />
					<img src={shipCod} alt="" className="w-6 h-6" />
					<span>Thanh toán khi giao hàng (COD)</span>
				</div>
			</div>
			<div>
				<hr className="my-4" />
				<Button
					className="block w-full"
					color="primary"
					variant="shadow"
					size="lg"
					radius="sm"
					onClick={handleSubmitOrder}
				>
					Đặt hàng
				</Button>
			</div>
		</div>
	);
}
export default Payment;
