import {
	Table,
	TableBody,
	TableHeader,
	TableColumn,
	TableCell,
	TableRow,
	Pagination,
	Image,
	Tooltip,
	useDisclosure,
	Spinner,
	SelectItem,
	Select,
	Chip,
	Code
} from '@nextui-org/react';
import Confirm from './Confirm/Confirm';
import { toast } from 'sonner';
import Navigation from './Navigation/Navigation';
import { useState, useMemo, useEffect } from 'react';
import { useFetch } from '../../Hooks/useFetch';
import { API } from '../../service/api/API';
import { formatMoney } from '../../utils/formatNumber';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function ProductManagement() {
	const { data, isLoading, mutate } = useFetch(`${API.PRODUCTS}`);
	const {
		isOpen: isConfirmOpen,
		onOpen: onConfirmOpen,
		onClose: onConfirmClose,
		onOpenChange: onConfirmOpenChange
	} = useDisclosure();
	const [state, setState] = useState({ currentId: '', isConfirm: false });
	const [page, setPage] = useState(1);
	const rowsPerPage = 4;
	const pages = Math.ceil(data.length / rowsPerPage);
	const items = useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;
		return data.slice(start, end);
	}, [page, data]);
	useEffect(() => {
		const deleteProduct = async () => {
			try {
				await axios.delete(`${API.PRODUCTS}/${state.currentId}`);
				toast.success('Đã xóa thành công !');
				onConfirmClose();
				mutate();
			} catch (error) {
				toast.error('Đã xảy ra lỗi !');
			}
		};
		if (state.isConfirm) {
			deleteProduct();
			setState((prev) => ({ ...prev, isConfirm: false }));
		}
	}, [state.isConfirm, data]);

	return (
		<div className="p-2 mt-4">
			<Navigation />
			<Confirm
				isOpen={isConfirmOpen}
				onOpenChange={onConfirmOpenChange}
				setState={setState}
			/>
			<Table
				className="mt-4"
				isHeaderSticky
				bottomContent={
					<div className="flex w-full justify-center">
						<Pagination
							showControls
							showShadow
							color="primary"
							page={page}
							total={pages}
							onChange={(page) => setPage(page)}
						/>
					</div>
				}
			>
				<TableHeader className="text-center">
					<TableColumn>HÌNH ẢNH</TableColumn>
					<TableColumn>TÊN SẢN PHẨM</TableColumn>
					<TableColumn>SỐ LƯỢNG NHẬP</TableColumn>
					<TableColumn>SỐ LƯỢNG BÁN</TableColumn>
					<TableColumn>GIÁ</TableColumn>
					<TableColumn>DANH MỤC</TableColumn>
					<TableColumn>TRẠNG THÁI</TableColumn>
					<TableColumn>ACTION</TableColumn>
				</TableHeader>
				<TableBody
					items={items}
					emptyContent={isLoading ? <Spinner /> : 'No data available'}
				>
					{items.map((item, index) => (
						<TableRow key={index}>
							<TableCell>
								<Image src={item.image} alt="" width={100} />
							</TableCell>
							<TableCell>{item.name}</TableCell>
							<TableCell>
								{item.variant.reduce((acc, item) => acc + item.quantity, 0)}
							</TableCell>
							<TableCell>
								<Select
									label="SL bán"
									size="sm"
									className="max-w-xs"
									variant="underlined"
								>
									{item.variant.map((variant, index) => (
										<SelectItem key={variant.color}>
											<div className="flex justify-between">
												<Chip
													size="sm"
													radius="sm"
													color="danger"
													variant="flat"
												>
													{variant.color}
												</Chip>
												{variant.quantity_sold}
											</div>
										</SelectItem>
									))}
								</Select>
							</TableCell>
							<TableCell>{formatMoney(item.price)} đ</TableCell>
							<TableCell>
								{item.categoryId === 1
									? 'Chuột Gaming'
									: item.categoryId === 2
									? 'Bàn phím cơ'
									: item.categoryId === 3
									? 'Tai nghe'
									: item.categoryId === 4
									? 'Keycap'
									: 'Dây cáp'}
							</TableCell>
							<TableCell>
								{item.variant.reduce((acc, item) => acc + item.quantity, 0) > 0 ? (
									<Chip color="success" variant="flat">
										Còn hàng
									</Chip>
								) : (
									<Chip color="danger" variant="flat">
										Hết hàng
									</Chip>
								)}
							</TableCell>
							<TableCell>
								<div className="relative flex items-center gap-2">
									<Tooltip content="Edit Product">
										<Link to={`${item._id}/edit`}>
											<i className="fa-regular fa-pen-to-square p-3 bg-blue-400 text-white rounded-[1rem] cursor-pointer"></i>
										</Link>
									</Tooltip>
									<Tooltip content={`Delete :  ${item.name}`}>
										<i
											className="fa-solid fa-trash bg-red-400 p-3 text-white rounded-[1rem] cursor-pointer"
											onClick={() => {
												onConfirmOpen();
												setState((prev) => ({
													...prev,
													currentId: item._id
												}));
											}}
										></i>
									</Tooltip>
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
