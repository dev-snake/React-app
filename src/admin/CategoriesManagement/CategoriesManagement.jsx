import {
	Table,
	TableBody,
	TableHeader,
	TableCell,
	TableColumn,
	TableRow,
	Button
} from '@nextui-org/react';
import { API } from '../../service/api/API';
import { useFetch } from '../../Hooks/useFetch';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import formatDate from '../../utils/formatDate';
import { Link } from 'react-router-dom';
export default function CategoriesMangagement() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const { data, isLoading } = useFetch(API.CATEGORIES);
	const { data: productList, isLoading: isLoad } = useFetch(API.PRODUCTS);
	useEffect(() => {
		if (isLoading || isLoad) {
			toast.loading('Đang tải dữ liệu ...');
		} else {
			toast.dismiss();
			setCategories(data);
			setProducts(productList);
		}
	}, [isLoading, isLoad]);
	return (
		<div className="p-3">
			<div className="flex justify-between">
				<h1 className="text-2xl font-semibold">Quản lí Danh mục</h1>
				<Button color="primary">
					<Link to={'create'}>Tạo danh mục</Link>
				</Button>
			</div>
			<Table className="mt-4">
				<TableHeader>
					<TableColumn>STT</TableColumn>
					<TableColumn>TÊN DANH MỤC</TableColumn>
					<TableColumn>SL SẢN PHẨM</TableColumn>
					<TableColumn>NGÀY TẠO</TableColumn>
					<TableColumn>NGÀY CẬP NHẬT</TableColumn>
					<TableColumn>THAO TÁC</TableColumn>
				</TableHeader>
				<TableBody>
					{categories.map((category, index) => {
						const product = products.filter(
							(item) => item.categoryId === category.categoryId
						);
						const productCount = product.map((item) =>
							item.variant.reduce((acc, curr) => acc + curr.quantity, 0)
						);
						const totalProduct = productCount.reduce((acc, curr) => acc + curr, 0);
						return (
							<TableRow key={index}>
								<TableCell>{index + 1}</TableCell>
								<TableCell>{category.name}</TableCell>
								<TableCell>{totalProduct}</TableCell>
								<TableCell>{formatDate(category.createdAt)}</TableCell>
								<TableCell>{formatDate(category.updatedAt)}</TableCell>
								<TableCell className="flex gap-3">
									<Button isIconOnly color="primary" variant="flat"></Button>
									<Button isIconOnly color="danger" variant="flat"></Button>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
	);
}
