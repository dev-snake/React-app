import {
	Table,
	TableBody,
	TableHeader,
	TableColumn,
	TableCell,
	TableRow,
	Pagination,
	Tooltip,
	Button,
	Switch,
	Chip
} from '@nextui-org/react';
import { toast } from 'sonner';
import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import { API } from '../../service/api/API';
import formatDate from '../../utils/formatDate';
import axios from 'axios';
import { config } from '../../config/config';
export default function OrderManagement() {
	const { data, isLoading, mutate } = useFetch(`${API.ORDERS}`);
	const [page, setPage] = useState(1);
	const [isSelected, setIsSelected] = useState(false);
	const rowsPerPage = 4;
	const pages = Math.ceil(data.length / rowsPerPage);
	const items = useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;
		return data.slice(start, end);
	}, [page, data]);
	useEffect(() => {
		if (isLoading) {
			toast.loading('Đang tải dữ liệu');
		} else {
			toast.dismiss();
		}
	}, [isLoading]);
	const handleToogle = async (orderId) => {
		try {
			const response = await axios.put(`${API.CONFIRM_ORDER}/${orderId}`, {}, config);
			toast.success('Xác nhận đơn hàng thành công');
			mutate();
			console.log(response);
		} catch (error) {
			console.log(error);
			toast.error(error);
		}
	};
	return (
		<Table
			className="mt-4 p-3"
			isHeaderSticky
			aria-label="Table of orders"
			bottomContent={
				<div className="flex w-full justify-center">
					<Pagination
						showControls
						showShadow
						variant="faded"
						color="primary"
						page={page}
						total={pages}
						onChange={(page) => setPage(page)}
					/>
				</div>
			}
		>
			<TableHeader className="text-center">
				<TableColumn>Mã ĐƠN HÀNG </TableColumn>
				<TableColumn>NGƯỜI ĐẶT HÀNG</TableColumn>
				<TableColumn>NGÀY ĐẶT HÀNG </TableColumn>
				<TableColumn>TRẠNG THÁI</TableColumn>
				<TableColumn>XÁC NHẬN</TableColumn>
				<TableColumn>XEM ĐƠN HÀNG</TableColumn>
			</TableHeader>
			<TableBody>
				{items.map((order, index) => (
					<TableRow key={index}>
						<TableCell>{order.orderId}</TableCell>
						<TableCell>{order.fullname}</TableCell>
						<TableCell>{formatDate(order.date)}</TableCell>
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
							{order.status === 4 ? (
								<Switch aria-label="Xác nhận" color="primary" isDisabled />
							) : order.status === 1 ? (
								<Switch
									aria-label="Xác nhận"
									color="primary"
									isSelected
									isDisabled
								/>
							) : (
								<Switch
									aria-label="Xác nhận"
									color="primary"
									onChange={() => handleToogle(order.orderId)}
								/>
							)}
						</TableCell>

						<TableCell>
							<Tooltip content="Xem chi tiết" color="primary">
								<Button
									isIconOnly
									radius="lg"
									className="bg-blue-400"
									color="primary"
								>
									<Link to={`${order._id}/order-detail`}>
										<i className="fa-solid fa-eye"></i>
									</Link>
								</Button>
							</Tooltip>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
