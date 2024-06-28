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
	Spinner
} from '@nextui-org/react';
import Confirm from './Confirm/Confirm';
import { toast } from 'sonner';
import Navigation from './Navigation/Navigation';
import { useState, useMemo, useEffect } from 'react';
import { useFetch } from '../../Hooks/useFetch';
import { API } from '../../service/api/API';
import { formatMoney } from '../../utils/formatNumber';
import AddProduct from './AddProduct/AddProduct';
import EditProduct from './EditProduct/EditProduct';
export default function ProductManagement() {
	const { data, isLoading } = useFetch(`${API.PRODUCTS}`);
	const {
		isOpen: isAddProductOpen,
		onOpen: onAddProductOpen,
		onClose: onAddProductClose,
		onOpenChange: onAddProductOpenChange
	} = useDisclosure();
	const {
		isOpen: isConfirmOpen,
		onOpen: onConfirmOpen,
		onClose: onConfirmClose,
		onOpenChange: onConfirmOpenChange
	} = useDisclosure();
	const {
		isOpen: isEditOpen,
		onOpen: onEditOpen,
		onClose: onEditClose,
		onOpenChange: onEditOpenChange
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
		if (state.isConfirm) {
			const handleDelete = async () => {
				toast.success('Deleted Successfully', { duration: 3000 });
				setState({ currentId: null, isConfirm: false });
			};
			handleDelete();
		}
	}, [state.isConfirm]);

	return (
		<div className="p-2 mt-4">
			<Navigation onAddProduct={onAddProductOpen} />
			<Confirm
				isOpen={isConfirmOpen}
				onOpenChange={onConfirmOpenChange}
				setState={setState}
			/>
			<EditProduct isOpen={isEditOpen} onOpenChange={onEditOpenChange} />
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
					<TableColumn>IMAGE</TableColumn>
					<TableColumn>NAME</TableColumn>
					<TableColumn>QUANTITY_IMPORTED</TableColumn>
					<TableColumn>QUANTITY_SOLD</TableColumn>
					<TableColumn>PRICE</TableColumn>
					<TableColumn>CATEGORY</TableColumn>
					<TableColumn>STATUS</TableColumn>
					<TableColumn>ACTION</TableColumn>
				</TableHeader>
				<TableBody
					items={items}
					emptyContent={isLoading ? <Spinner /> : 'No data available'}
				>
					{items.map(
						(
							{ name, price, image, quantityImported, quantity_sold, category, _id },
							index
						) => (
							<TableRow key={index}>
								<TableCell>
									<Image src={image} alt="" width={100} />
								</TableCell>
								<TableCell>{name}</TableCell>
								<TableCell>{quantityImported}</TableCell>
								<TableCell>{quantity_sold}</TableCell>
								<TableCell>{formatMoney(price)} đ</TableCell>
								<TableCell>{category}</TableCell>
								<TableCell>Còn hàng</TableCell>
								<TableCell>
									<div className="relative flex items-center gap-2">
										<Tooltip content="Edit Product">
											<i
												className="fa-regular fa-pen-to-square p-3 bg-blue-400 text-white rounded-[1rem] cursor-pointer"
												onClick={() => {
													onEditOpen();
												}}
											></i>
										</Tooltip>
										<Tooltip content={`Delete :  ${name}`}>
											<i
												className="fa-solid fa-trash bg-red-400 p-3 text-white rounded-[1rem] cursor-pointer"
												onClick={() => {
													onConfirmOpen();
													setState((prev) => ({
														...prev,
														currentId: _id
													}));
												}}
											></i>
										</Tooltip>
									</div>
								</TableCell>
							</TableRow>
						)
					)}
				</TableBody>
			</Table>
		</div>
	);
}
