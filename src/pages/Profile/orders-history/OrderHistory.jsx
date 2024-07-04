import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Button,
	Tooltip,
	Chip,
	useDisclosure
} from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFetch } from '../../../Hooks/useFetch';
import { API } from '../../../service/api/API';
import { toast } from 'sonner';
import formatDate from '../../../utils/formatDate';
import axios from 'axios';
import Confirm from '../../../admin/ProductManagement/Confirm/Confirm';
import { config } from '../../../config/config';
function OrderHistory() {
	const { data, isLoading } = useFetch(API.PROFILE);
	const [orders, setOrders] = useState([]);
	const [state, setState] = useState({ currentId: '', isConfirm: false });
	const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
	useEffect(() => {
		if (isLoading) {
			toast.loading('Đang tải dữ liệu');
		} else {
			toast.dismiss();
			setOrders(data.orders);
		}
	}, [isLoading]);
	useEffect(() => {
		const cancelOrder = async () => {
			try {
				await axios.put(`${API.CANCEL_ORDER}/${state.currentId}`, {}, config);
				toast.success('Hủy đơn hàng thành công !');
				const res = await axios.get(API.PROFILE, config);
				setOrders(res.data.orders);
			} catch (error) {
				console.log(error);
				toast.error('Đã xảy ra lỗi !');
			}
		};
		if (state.isConfirm) {
			cancelOrder();
			setState((prev) => ({ ...prev, isConfirm: false }));
		}
	}, [state.isConfirm, data]);

	return (
		<div>
			<Confirm
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				setState={setState}
				message="Bạn có chắc muốn hủy đơn hàng không ?"
				btnMessage="Hủy"
			/>
			<p className="capitalize text-xl  font-semibold mb-4">Lịch Sử Mua hàng</p>
			<Table aria-label="My orders history">
				<TableHeader>
					<TableColumn>STT</TableColumn>
					<TableColumn>MÃ ĐƠN HÀNG </TableColumn>
					<TableColumn>NGƯỜI ĐẶT </TableColumn>
					<TableColumn>NGÀY ĐẶT</TableColumn>
					<TableColumn>VOUCHER</TableColumn>
					<TableColumn>TRẠNG THÁI</TableColumn>
					<TableColumn>XEM CHI TIẾT</TableColumn>
					<TableColumn>HỦY ĐƠN</TableColumn>
				</TableHeader>
				<TableBody>
					{orders.map((order, index) => (
						<TableRow key={index}>
							<TableCell>{index + 1}</TableCell>
							<TableCell>{order.orderId}</TableCell>
							<TableCell>{order.fullname}</TableCell>
							<TableCell>{formatDate(order.date)}</TableCell>
							<TableCell>{order.voucher}</TableCell>
							<TableCell>
								{order.status === 0 ? (
									<Chip color="secondary" variant="flat">
										Đang chờ xử lí
									</Chip>
								) : order.status === 1 ? (
									<Chip color="success" variant="flat">
										Đã xác nhận
									</Chip>
								) : order.status === 2 ? (
									<Chip color="primary" variant="flat">
										Đang Vận chuyển
									</Chip>
								) : (
									<Chip color="danger" variant="flat">
										Đã hủy
									</Chip>
								)}
							</TableCell>
							<TableCell>
								<Tooltip
									content="Xem chi tiết đơn hàng"
									className="bg-blue-400 text-white"
								>
									<Button
										isIconOnly
										radius="lg"
										size="sm"
										className="bg-blue-400"
									>
										<Link>
											<i className="fa-solid fa-eye   text-white"></i>
										</Link>
									</Button>
								</Tooltip>
							</TableCell>
							<TableCell>
								<Tooltip content="Hủy đơn hàng" className="bg-red-400 text-white">
									<Button
										isIconOnly
										className="bg-red-400"
										radius="lg"
										size="sm"
										onClick={() => {
											onOpen();
											setState((prev) => ({
												...prev,
												currentId: order.orderId
											}));
										}}
									>
										<i className="fa-solid fa-trash  cursor-pointer text-white"></i>
									</Button>
								</Tooltip>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
export default OrderHistory;
