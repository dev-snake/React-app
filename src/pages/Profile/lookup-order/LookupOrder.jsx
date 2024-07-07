import { Input, Button, Chip } from '@nextui-org/react';
import LookupIcon from './LookupIcon';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { API } from '../../../service/api/API';
import { useFetch } from '../../../Hooks/useFetch';
import formatDate from '../../../utils/formatDate';
export default function LookupOrder() {
	const { data, isLoading } = useFetch(API.ORDERS);
	const [orderCode, setOrderCode] = useState('');
	const [orderInfor, setOrderInfor] = useState(null);
	useEffect(() => {
		if (isLoading) {
			toast.loading('Đang tải dữ liệu đơn hàng !');
		} else {
			toast.dismiss();
			console.log(data);
		}
	}, [isLoading]);
	const handleLookupOrder = () => {
		if (!orderCode) {
			toast.warning('Vui lòng nhập mã đơn hàng !', { duration: 1000 });
			return;
		}
		const order = data.find((item) => item.orderId === orderCode);
		if (!order) {
			toast.error('Không tìm thấy đơn hàng !', { duration: 1000 });
			return;
		}

		setOrderInfor(order);
	};
	return (
		<div>
			<p className="text-xl font-semibold">Tra cứu đơn hàng</p>
			<div className="mt-2">
				<Input
					type="text"
					placeholder="Nhập mã đơn hàng của bạn"
					radius="none"
					variant="underlined"
					endContent={
						<Button
							radius="none"
							color="primary"
							className="absolute right-0"
							onClick={handleLookupOrder}
						>
							Tìm đơn hàng
						</Button>
					}
					onChange={(e) => setOrderCode(e.target.value)}
				/>
			</div>
			<div className="p-2">
				{orderInfor !== null ? (
					<div className="mx-auto p-4 mt-4 flex flex-col gap-4">
						<h2 className="uppercase text-center text-xl font-semibold">
							Thông tin đơn hàng
						</h2>
						<p className="flex justify-between">
							<span className="text-[1rem] font-semibold">Họ và tên :</span>
							<span>{orderInfor.fullname}</span>
						</p>
						<p className="flex justify-between">
							<span className="text-[1rem] font-semibold">Email :</span>
							<span>{orderInfor.email}</span>
						</p>
						<p className="flex justify-between">
							<span className="text-[1rem] font-semibold">Địa chỉ :</span>
							<span> {orderInfor.address}</span>
						</p>
						<p className="flex justify-between">
							<span className="text-[1rem] font-semibold">
								Phương thức thanh toán :
							</span>
							<span>{orderInfor.methodPayment}</span>
						</p>
						<p className="flex justify-between">
							<span className="text-[1rem] font-semibold">Ngày đặt hàng :</span>
							<span>{formatDate(orderInfor.date)}</span>
						</p>
						<p className="flex justify-between">
							<span className="text-[1rem] font-semibold">Trạng thái :</span>
							<span>
								{' '}
								{orderInfor.status === 0 ? (
									<Chip color="secondary" variant="flat">
										Đang chờ xử lí
									</Chip>
								) : orderInfor.status === 1 ? (
									<Chip color="success" variant="flat">
										Đã xác nhận
									</Chip>
								) : orderInfor.status === 2 ? (
									<Chip color="primary" variant="flat">
										Đang Vận chuyển
									</Chip>
								) : (
									<Chip color="danger" variant="flat">
										Đã hủy
									</Chip>
								)}
							</span>
						</p>
					</div>
				) : (
					<div className="text-center p-4">
						<LookupIcon />
						<p className="font-semibold pl-2 py-5">Quý khách chưa có đơn hàng nào !</p>
						<Button
							color="primary"
							startContent={<i className="fa-solid fa-rotate-left"></i>}
						>
							Tiếp tục mua hàng
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}
