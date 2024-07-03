import { Table, TableBody, TableHeader, TableColumn, TableCell, TableRow } from '@nextui-org/react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../../Hooks/useFetch';
import { API } from '../../../service/api/API';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
export default function OrderDetail() {
	const { data, isLoading } = useFetch(`${API.ORDERS}`);
	const [order, setOrder] = useState(null);
	const { orderId } = useParams();
	useEffect(() => {
		if (isLoading) {
			toast.loading('Đang tải dữ liệu');
		} else {
			toast.dismiss();
			const order = data.find((order) => order.id === orderId);
			setOrder(order);
		}
	}, [isLoading, data, orderId]);
	console.log(data);
	return (
		<div className="p-3">
			<div>
				<h3 className="text-xl font-semibold">Chi tiết đơn hàng</h3>
				<div>
					<div className="flex justify-between mt-4">
						<span className="font-semibold">Mã đơn hàng : </span>
						<span> kjflksdjfsl</span>
					</div>
					<div className="flex justify-between mt-4">
						<span className="font-semibold">Người đặt hàng : </span>
						<span> kjflksdjfsl</span>
					</div>
					<div className="flex justify-between mt-4">
						<span className="font-semibold">Phương thức thanh toán : </span>
						<span> kjflksdjfsl</span>
					</div>
					<div className="flex justify-between mt-4">
						<span className="font-semibold">Email : </span>
						<span> kjflksdjfsl</span>
					</div>
					<div className="flex justify-between mt-4">
						<span className="font-semibold">Ngày đặt hàng : </span>
						<span> kjflksdjfsl</span>
					</div>
					<div className="flex justify-between mt-4">
						<span className="font-semibold">Trạng thái đơn hàng : </span>
						<span> kjflksdjfsl</span>
					</div>
				</div>
				<div className="mt-6">
					<h3 className="text-xl font-semibold">Danh sách sản phẩm</h3>
					<Table className="mt-4">
						<TableHeader>
							<TableColumn>Tên sản phẩm</TableColumn>
							<TableColumn>Giá</TableColumn>
							<TableColumn>Số lượng</TableColumn>
							<TableColumn>Thành tiền</TableColumn>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>Product 1</TableCell>
								<TableCell>100.000</TableCell>
								<TableCell>2</TableCell>
								<TableCell>200.000</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</div>
		</div>
	);
}
