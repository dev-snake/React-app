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
export default function OrderManagement() {
	const { data, isLoading, mutate } = useFetch(`${API.ORDERS}`);
	const [page, setPage] = useState(1);
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
			console.log(data);
		}
	}, [isLoading]);
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
				<TableColumn>ACTION</TableColumn>
			</TableHeader>
			<TableBody>
				{items.map((order, index) => (
					<TableRow key={index}>
						<TableCell>{order._id}</TableCell>
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
								<Chip color="danger" variant="flat">
									Đã hủy
								</Chip>
							) : (
								<Chip color="primary" variant="flat">
									Đang Vận chuyển
								</Chip>
							)}
						</TableCell>
						<TableCell>
							<Switch aria-label="Xác nhận" color="primary" />
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
