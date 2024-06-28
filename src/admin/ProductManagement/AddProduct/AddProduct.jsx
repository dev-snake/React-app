import { Button, Input, Checkbox, Select, SelectItem } from '@nextui-org/react';
import { useState } from 'react';
export default function AddProduct() {
	const [state, setState] = useState();
	return (
		<div className="p-3">
			<div className="flex justify-between mt-4">
				<h1 className="text-2xl font-semibold">Thêm sản phẩm mới</h1>
				<Button color="primary" startContent={<i className="fa-solid fa-arrow-left"></i>}>
					Quay lại
				</Button>
			</div>
			<form action="" className="mt-4">
				<Input type="text" label="Tên sản phẩm " size="sm" isRequired />
				<div className="flex gap-3 mt-8">
					<Input
						size="lg"
						label="Giá sản phẩm "
						labelPlacement="outside"
						placeholder="0.00"
						isRequired
					/>
					<Input
						size="lg"
						placeholder="0"
						label={<Checkbox>Giảm giá</Checkbox>}
						labelPlacement="outside"
						className="relative"
					/>

					<Select
						size="lg"
						label="Danh mục sản phẩm"
						labelPlacement="outside"
						placeholder="Danh mục sản phẩm"
						isRequired
					>
						<SelectItem>ê</SelectItem>
						<SelectItem>f</SelectItem>
						<SelectItem>fzxczx</SelectItem>
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
							<Input size="lg" placeholder="Số lượng nhập" />
							<Input type="" size="lg" placeholder="Hình ảnh" isRequired />
							<Button isIconOnly className="bg-red-500 text-white">
								<i className="fa-solid fa-xmark"></i>
							</Button>
						</div>
					</div>
				</div>
				<Button className="mt-10 mb-4 block w-full" color="primary" size="lg">
					Thêm sản phẩm mới
				</Button>
			</form>
		</div>
	);
}
