import { Button, Input, Checkbox, Select, SelectItem } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { API } from '../../../service/api/API';
import axios from 'axios';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
export default function AddProduct() {
	const [state, setState] = useState({
		name: '',
		price: 0,
		discount: 0,
		categoryId: 0,
		image: '',
		quantityImported: 0
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
	const handleSubmit = async () => {
		if (
			state.name === '' ||
			state.price === 0 ||
			state.categoryId === 0 ||
			state.image === ''
		) {
			toast.error('Vui lòng điền đầy đủ thông tin');
			return;
		}
		try {
			await axios.post(API.PRODUCTS, state);
			toast.success('Thêm sản phẩm thành công!');
			setState({
				name: '',
				price: 0,
				discount: 0,
				categoryId: 0,
				image: '',
				quantityImported: 0
			});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="p-3">
			<div className="flex justify-between mt-4">
				<h1 className="text-2xl font-semibold">Thêm sản phẩm mới</h1>
				<Button color="primary" startContent={<i className="fa-solid fa-arrow-left"></i>}>
					<Link to="/admin/products">Quay lại</Link>
				</Button>
			</div>
			<form action="" className="mt-4">
				<Input
					type="text"
					label="Tên sản phẩm "
					value={state.name}
					size="sm"
					onChange={(e) => setState({ ...state, name: e.target.value })}
					isRequired
				/>
				<div className="flex gap-3 mt-8">
					<Input
						value={state.price}
						type="number"
						size="lg"
						label="Giá sản phẩm "
						labelPlacement="outside"
						placeholder="0.00"
						onChange={(e) => setState({ ...state, price: +e.target.value })}
						isRequired
					/>
					<Input
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

					<Select
						size="lg"
						label="Danh mục sản phẩm"
						labelPlacement="outside"
						placeholder="Danh mục sản phẩm"
						onChange={(e) => setState({ ...state, categoryId: +e.target.value })}
						isRequired
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
							<Button isIconOnly color="primary" variant="shadow" aria-label="plus">
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
								value={state.quantityImported}
								placeholder="Số lượng nhập"
								onChange={(e) =>
									setState({ ...state, quantityImported: e.target.value })
								}
							/>
							<Input
								type=""
								size="lg"
								value={state.image}
								placeholder="Hình ảnh"
								onChange={(e) => setState({ ...state, image: e.target.value })}
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
					Thêm sản phẩm mới
				</Button>
			</form>
		</div>
	);
}
