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
	const { data, isLoading } = useFetch(`${API.PRODUCTS}`);
	const { data: categories, isLoading: isLoad } = useFetch(`${API.CATEGORIES}`);
	const [categoriesList, setCategoriesList] = useState([]);
	const [productEdit, setProductEdit] = useState({
		name: '',
		price: 0,
		discount: 0,
		categoryId: 0,
		image: '',
		quantityImported: 0,
		variant: []
	});
	const { productId } = useParams();
	useEffect(() => {
		if (!isLoading && !isLoad) {
			const productEdit = data.find((product) => product._id === productId);
			setProductEdit(productEdit);
			setCategoriesList(categories);
		}
	}, [productId, isLoading, isLoad]);

	const handleVariantChange = (index, field, value) => {
		const newVariant = productEdit.variant.map((item, i) =>
			index === i ? { ...item, [field]: value } : item
		);
		setProductEdit({ ...productEdit, variant: newVariant });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const newProduct = new Promise((resolve, reject) => {
			axios
				.put(`${API.PRODUCTS}/${productId}`, productEdit)
				.then((res) => resolve(res.data))
				.catch((err) => reject(err));
		});
		toast.promise(newProduct, {
			loading: 'Đang cập nhật sản phẩm',
			success: 'Cập nhật sản phẩm thành công',
			error: (err) => `${err}`
		});
		navigate('/admin/products');
	};

	return (
		<>
			<div className="p-3">
				<div className="flex justify-between mt-4">
					<h1 className="text-2xl font-semibold">Cập nhật sản phẩm</h1>
					<Button
						color="secondary"
						startContent={<i className="fa-solid fa-arrow-left"></i>}
					>
						<Link to="/admin/products">Quay lại</Link>
					</Button>
				</div>
				<form action="" className="mt-4" onSubmit={handleSubmit}>
					<Input
						value={productEdit.name}
						variant="bordered"
						type="text"
						label="Tên sản phẩm "
						size="sm"
						isRequired
					/>
					<div className="flex gap-3 mt-8">
						<Input
							value={productEdit.price}
							variant="bordered"
							type="number"
							size="lg"
							label="Giá tham khảo"
							labelPlacement="outside"
							placeholder="0.00"
							isRequired
						/>
						<Input
							value={productEdit.discount}
							variant="bordered"
							max={80}
							min={0}
							type="number"
							size="lg"
							placeholder="0"
							label={<Checkbox>Giảm giá</Checkbox>}
							labelPlacement="outside"
						/>
						<Input
							value={productEdit.image}
							type="text"
							label="Nhập URL ảnh"
							labelPlacement="outside"
							placeholder="URL"
							variant="bordered"
							size="lg"
						/>
						<Select
							size="lg"
							label="Danh mục sản phẩm"
							labelPlacement="outside"
							placeholder="Danh mục sản phẩm"
							isRequired
							variant="bordered"
						>
							{categoriesList.map((category, index) => (
								<SelectItem key={category.categoryId}>{category.name}</SelectItem>
							))}
						</Select>
					</div>
					<div className="mt-8">
						{/* biến thể  */}
						<div className="flex justify-between">
							<h1 className=" text-2xl font-semibold">Các biến thể </h1>
							<div className="flex gap-5 items-center">
								<span className="font-semibold">
									({productEdit.variant.length}/5)
								</span>
								<Button
									isIconOnly
									color="secondary"
									variant="shadow"
									aria-label="plus"
								>
									<i className="fa-solid fa-plus"></i>
								</Button>
							</div>
						</div>
						<div className="mt-8 flex flex-col gap-3 ">
							{/* Các biến thể  */}
							{productEdit.variant.map((item, index) => (
								<div key={index} className=" flex gap-5 items-center">
									<Input
										endContent={
											<i
												className="fa-solid fa-shuffle cursor-pointer"
												onClick={() => handleRandomCode(index, 'code')}
											></i>
										}
										size="lg"
										placeholder="Mã sản phẩm "
										variant="bordered"
										value={item.code}
										onChange={(e) =>
											handleVariantChange(index, 'code', e.target.value)
										}
										isRequired
									/>
									<Input
										size="lg"
										value={item.color}
										placeholder="Màu sắc"
										variant="bordered"
										onChange={(e) =>
											handleVariantChange(index, 'color', e.target.value)
										}
									/>
									<Input
										size="lg"
										type="number"
										value={item.quantity}
										placeholder="Số lượng nhập"
										variant="bordered"
										onChange={(e) =>
											handleVariantChange(index, 'quantity', +e.target.value)
										}
									/>
									<Input
										size="lg"
										type="number"
										value={item.price}
										placeholder="Giá"
										variant="bordered"
										onChange={(e) =>
											handleVariantChange(index, 'price', +e.target.value)
										}
									/>
									<Input
										endContent={
											<i className="fa-solid fa-arrows-spin cursor-pointer"></i>
										}
										size="lg"
										placeholder="Nhập URL ảnh"
										variant="bordered"
										value={item.image}
										onChange={(e) =>
											handleVariantChange(index, 'image', e.target.value)
										}
										isRequired
									/>
								</div>
							))}
						</div>
					</div>
					<Button
						className="mt-10 mb-4 block w-full"
						color="primary"
						size="lg"
						radius="sm"
						type="submit"
					>
						Cập nhật sản phẩm
					</Button>
				</form>
			</div>
		</>
	);
}
