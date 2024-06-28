import { Button, Input, Checkbox, Select, SelectItem } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { API } from '../../../service/api/API';
import axios from 'axios';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../../../Hooks/useFetch';
export default function EditProduct() {
	const navigate = useNavigate();
	const { data, isLoading: isLoad } = useFetch(`${API.PRODUCTS}`);
	const { productId } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [categories, setCategories] = useState([]);
	const [product, setProduct] = useState({});
	const fetchCategories = async () => {
		try {
			const { data } = await axios.get(API.CATEGORIES);
			setCategories(data);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};
	useEffect(() => {
		fetchCategories();
	}, [isLoading]);
	useEffect(() => {
		if (!isLoad && data.length > 0) {
			const product = data.find((product) => product._id === productId);
			setProduct(product);
		}
	}, [data, productId]);
	const handleSubmit = async () => {
		const { name, price, discount, categoryId, image, quantityImported } = product;
		if (!name || !price || !categoryId || !image || !quantityImported || !discount) {
			toast.error('Vui lòng điền đầy đủ thông tin');
			return;
		}
		try {
			await axios.put(`${API.PRODUCTS}/${productId}`, product);
			toast.success('Cập nhật sản phẩm thành công!');
			navigate('/admin/products');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<div className="p-3">
				<div className="flex justify-between mt-4">
					<h1 className="text-2xl font-semibold">Chỉnh sửa sản phẩm</h1>
					<Button
						color="primary"
						startContent={<i className="fa-solid fa-arrow-left"></i>}
					>
						<Link to="/admin/products">Quay lại</Link>
					</Button>
				</div>
				<form action="" className="mt-4">
					<Input
						type="text"
						label="Tên sản phẩm "
						size="sm"
						value={product.name}
						onChange={(e) => setProduct({ ...product, name: e.target.value })}
						isRequired
					/>
					<div className="flex gap-3 mt-8">
						<Input
							value={product.price}
							type="number"
							size="lg"
							label="Giá sản phẩm "
							labelPlacement="outside"
							placeholder="0.00"
							onChange={(e) => setProduct({ ...product, price: e.target.value })}
							isRequired
						/>
						<Input
							max={80}
							min={0}
							value={product.discount}
							type="number"
							size="lg"
							placeholder="0"
							label={<Checkbox>Giảm giá</Checkbox>}
							labelPlacement="outside"
							onChange={(e) => setProduct({ ...product, discount: e.target.value })}
						/>

						<Select
							size="lg"
							label="Danh mục sản phẩm"
							labelPlacement="outside"
							placeholder="Danh mục sản phẩm"
							isRequired
							onChange={(e) => setProduct({ ...product, categoryId: e.target.value })}
						>
							{categories.map((category, index) => (
								<SelectItem key={index}>{category.name}</SelectItem>
							))}
						</Select>
					</div>
					<div className="mt-8">
						<div className="flex justify-between">
							<h1 className=" text-2xl font-semibold">Các biến thể </h1>
							<div className="flex gap-5 items-center">
								<span className="font-semibold">(1/10)</span>
								<Button
									isIconOnly
									color="primary"
									variant="shadow"
									aria-label="plus"
								>
									<i className="fa-solid fa-plus"></i>
								</Button>
							</div>
						</div>
						<div className="mt-8 ">
							<div className=" flex gap-5 items-center">
								<Input size="lg" placeholder="Mã sản phẩm " isRequired />
								<Input size="lg" placeholder="Tên sản phẩm" />
								<Input
									size="lg"
									type="number"
									placeholder="Số lượng nhập"
									value={product.quantityImported}
									onChange={(e) =>
										setProduct({ ...product, quantityImported: e.target.value })
									}
								/>
								<Input
									type=""
									size="lg"
									placeholder="Hình ảnh"
									value={product.image}
									isRequired
								/>
								<Button isIconOnly className="bg-red-500 text-white">
									<i className="fa-solid fa-xmark"></i>
								</Button>
							</div>
						</div>
					</div>
					<Button
						className="mt-10 mb-4 block w-full"
						color="primary"
						size="lg"
						onClick={handleSubmit}
					>
						Cập nhật sản phẩm
					</Button>
				</form>
			</div>
		</>
	);
}
