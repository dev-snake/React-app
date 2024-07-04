import {
	Table,
	TableBody,
	TableHeader,
	TableColumn,
	TableCell,
	TableRow,
	Chip
} from '@nextui-org/react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../../Hooks/useFetch';
import { API } from '../../../service/api/API';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import formatDate from '../../../utils/formatDate';
import { formatMoney } from '../../../utils/formatNumber';
export default function OrderDetail() {
	const { data, isLoading } = useFetch(`${API.ORDERS}`);
	const [order, setOrder] = useState(null);
	const { orderId } = useParams();
	useEffect(() => {
		if (!isLoading) {
			const order = data.find((order) => order._id == orderId);
			setOrder(order);
		}
	}, [isLoading, data, orderId]);
	// console.log(JSON.stringify(order?.products));
	console.log(order);
	return (
		<div className="p-3">
			<div>
				<h3 className="text-xl font-semibold">Chi tiết đơn hàng</h3>
				<div>
					<div className="flex justify-between mt-4">
						<span className="font-semibold">Mã đơn hàng : </span>
						<span> {order?._id}</span>
					</div>
					<div className="flex justify-between mt-4">
						<span className="font-semibold">Người đặt hàng : </span>
						<span> {order?.fullname}</span>
					</div>
					<div className="flex justify-between mt-4">
						<span className="font-semibold">Phương thức thanh toán : </span>
						<span> {order?.methodPayment}</span>
					</div>
					<div className="flex justify-between mt-4">
						<span className="font-semibold">Email : </span>
						<span> {order?.email}</span>
					</div>
					<div className="flex justify-between mt-4">
						<span className="font-semibold">Giảm giá voucher : </span>
						<span className="font-medium text-red-500">
							{' '}
							{formatMoney(order?.voucher)} đ
						</span>
					</div>
					<div className="flex justify-between mt-4">
						<span className="font-semibold">Ngày đặt hàng : </span>
						<span> {formatDate(order?.date)}</span>
					</div>
					<div className="flex justify-between mt-4">
						<span className="font-semibold">Trạng thái đơn hàng : </span>
						<span>
							{order?.status === 0 ? (
								<Chip color="secondary" variant="flat">
									Đang chờ xử lí
								</Chip>
							) : order?.status === 1 ? (
								<Chip color="success" variant="flat">
									Đã xác nhận
								</Chip>
							) : order?.status === 2 ? (
								<Chip color="danger" variant="flat">
									Đã hủy
								</Chip>
							) : (
								<Chip color="primary" variant="flat">
									Đang Vận chuyển
								</Chip>
							)}
						</span>
					</div>
				</div>
				<div className="mt-6">
					<h3 className="text-xl font-semibold">Danh sách sản phẩm</h3>
					<Table className="mt-4" aria-label="table-detail">
						<TableHeader>
							<TableColumn>Tên sản phẩm</TableColumn>
							<TableColumn>Giá</TableColumn>
							<TableColumn>Số lượng</TableColumn>
							<TableColumn>Thành tiền</TableColumn>
						</TableHeader>
						<TableBody>
							{order?.products.map((product, index) => {
								return product.color.map((item, index) => {
									return (
										<TableRow key={index}>
											<TableCell>{`${product.name} - ${item.color}`}</TableCell>
											<TableCell>{formatMoney(item.price)} đ</TableCell>
											<TableCell>{item.quantityBuyed}</TableCell>
											<TableCell>
												{formatMoney(item.quantityBuyed * item.price)} đ
											</TableCell>
										</TableRow>
									);
								});
							})}
						</TableBody>
					</Table>
				</div>
			</div>
		</div>
	);
}
