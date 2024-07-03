import { Button, Input, Checkbox, Select, SelectItem, Card } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { API } from '../../../service/api/API';
import axios from 'axios';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

export default function AddProduct() {
	const [variant, setVariant] = useState([
		{ code: '', color: '', quantity: 0, price: 0, image: '', quantity_sold: 0 }
	]);
	const [state, setState] = useState({
		name: '',
		price: 0,
		discount: 0,
		categoryId: 0,
		image: '',
		quantityImported: 0,
		variant: []
	});
	const [isLoading, setIsLoading] = useState(true);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
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
		fetchCategories();
	}, [isLoading]);
	const changeStyle = () => {
		console.log('change style');
	};
	const handleRandomCode = (index, field) => {
		const text = 'ASDFGHJKLQWERTYUIOPZXCVBNM1234567890quwertyuiopasdfghjklzxcvbnm';
		const codeLength = 8;
		let randomCode = '';
		for (let i = 0; i < codeLength; i++) {
			const radomIndex = Math.floor(Math.random() * text.length);
			randomCode += text[radomIndex];
		}
		const newVariant = variant.map((v, i) =>
			index === i ? { ...v, [field]: randomCode + Math.floor(Math.random() * 10000) } : v
		);
		console.log(newVariant);
		setVariant(newVariant);
	};
	const handleSubmit = async () => {
		console.log(state);
		// if (state.name === '' || state.price === 0 || state.categoryId === 0) {
		// 	toast.error('Vui lòng điền đầy đủ thông tin');
		// 	return;
		// }
		try {
			await axios.post(API.PRODUCTS, { ...state, variant });
			toast.success('Thêm sản phẩm thành công!');
			setState({
				name: '',
				price: 0,
				discount: 0,
				categoryId: 0,
				image: '',
				quantityImported: 0,
				variant: []
			});
			setVariant([{ code: '', color: '', quantity: 0, price: 0, image: '' }]);
		} catch (error) {
			console.log(error);
		}
	};

	const addVariant = () => {
		if (variant.length >= 5) return toast.error('Số lượng biến thể tối đa là 5');
		setVariant([...variant, { code: '', color: '', quantity: 0, price: 0, image: '' }]);
	};

	const deleteVariant = (index) => {
		if (variant.length === 1) return toast.error('Sản phẩm phải có ít nhất 1 biến thể');
		setVariant(variant.filter((_, i) => i !== index));
	};

	const handleVariantChange = (index, field, value) => {
		const newVariants = variant.map((v, i) => (i === index ? { ...v, [field]: value } : v));
		setVariant(newVariants);
	};

	return (
		<div className="p-3">
			<div className="flex justify-between mt-4">
				<h1 className="text-2xl font-semibold">Thêm sản phẩm mới</h1>
				<Button color="secondary" startContent={<i className="fa-solid fa-arrow-left"></i>}>
					<Link to="/admin/products">Quay lại</Link>
				</Button>
			</div>
			<form action="" className="mt-4">
				<Input
					variant="bordered"
					type="text"
					label="Tên sản phẩm "
					value={state.name}
					size="sm"
					onChange={(e) => setState({ ...state, name: e.target.value })}
					isRequired
				/>
				<div className="flex gap-3 mt-8">
					<Input
						variant="bordered"
						value={state.price}
						type="number"
						size="lg"
						label="Giá tham khảo"
						labelPlacement="outside"
						placeholder="0.00"
						onChange={(e) => setState({ ...state, price: +e.target.value })}
						isRequired
					/>
					<Input
						variant="bordered"
						max={80}
						min={0}
						type="number"
						value={state.discount}
						size="lg"
						placeholder="0"
						label={<Checkbox>Giảm giá</Checkbox>}
						labelPlacement="outside"
						onChange={(e) => setState({ ...state, discount: +e.target.value })}
					/>
					<Input
						type="text"
						label="Nhập URL ảnh"
						value={state.image}
						labelPlacement="outside"
						placeholder="URL"
						variant="bordered"
						size="lg"
						onChange={(e) => setState({ ...state, image: e.target.value })}
					/>
					<Select
						size="lg"
						label="Danh mục sản phẩm"
						labelPlacement="outside"
						placeholder="Danh mục sản phẩm"
						onChange={(e) => setState({ ...state, categoryId: +e.target.value })}
						isRequired
						variant="bordered"
					>
						{categories.map((category, index) => (
							<SelectItem key={category.categoryId}>{category.name}</SelectItem>
						))}
					</Select>
				</div>
				<div className="mt-8">
					{/* biến thể  */}
					<div className="flex justify-between">
						<h1 className=" text-2xl font-semibold">Các biến thể </h1>
						<div className="flex gap-5 items-center">
							<span className="font-semibold">({variant.length}/5)</span>
							<Button
								isIconOnly
								color="secondary"
								variant="shadow"
								aria-label="plus"
								onClick={addVariant}
							>
								<i className="fa-solid fa-plus"></i>
							</Button>
						</div>
					</div>
					<div className="mt-8 flex flex-col gap-3 ">
						{/* Các biến thể  */}
						{variant.map((item, index) => (
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
									placeholder="Màu sắc"
									variant="bordered"
									onChange={(e) =>
										handleVariantChange(index, 'color', e.target.value)
									}
								/>
								<Input
									size="lg"
									type="number"
									placeholder="Số lượng nhập"
									variant="bordered"
									onChange={(e) =>
										handleVariantChange(index, 'quantity', +e.target.value)
									}
								/>
								<Input
									size="lg"
									type="number"
									placeholder="Giá"
									variant="bordered"
									onChange={(e) =>
										handleVariantChange(index, 'price', +e.target.value)
									}
								/>
								{/* change style convert uplaod file */}
								<Input
									endContent={
										<i
											className="fa-solid fa-arrows-spin cursor-pointer"
											onClick={changeStyle}
										></i>
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

								{/* change style */}
								<Button
									isIconOnly
									className="bg-red-500 text-white"
									onClick={() => deleteVariant(index)}
								>
									<i className="fa-solid fa-xmark"></i>
								</Button>
							</div>
						))}
					</div>
				</div>
				<Button
					className="mt-10 mb-4 block w-full"
					color="primary"
					size="lg"
					radius="sm"
					onClick={handleSubmit}
				>
					Thêm sản phẩm mới
				</Button>
			</form>
		</div>
	);
}
