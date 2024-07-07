import { Input, Button, DateInput } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CalendarDate } from '@internationalized/date';
import { toast } from 'sonner';
import { API } from '../../../service/api/API';
import axios from 'axios';
export default function CreateVoucher() {
	const [voucher, setVoucher] = useState({
		voucher_name: '',
		voucher_code: '',
		discount: '',
		expiry_date: '',
		description: '',
		max_uses: 10,
		applicable_amount: 3000000
	});
	const handleCreateVoucher = () => {
		const { expiry_date, voucher_name, voucher_code, discount, description } = voucher;
		if ([voucher_name, voucher_code, discount, expiry_date, description].includes('')) {
			toast.error('Vui lòng điền đầy đủ thông tin');
			return;
		}
		const date = new Date(expiry_date);
		const newVoucher = { ...voucher, expiry_date: date.toISOString() };
		const newVoucherData = new Promise((resolve, reject) => {
			axios
				.post(API.CREATE_VOUCHER, newVoucher)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
		toast.promise(newVoucherData, {
			loading: 'Đang tạo voucher...',
			success: 'Tạo voucher thành công',
			error: 'Tạo voucher thất bại'
		});
	};
	return (
		<div className="p-3">
			<div className="flex justify-between mt-4">
				<h1 className="text-2xl font-semibold">Tạo mã voucher</h1>
				<Button color="secondary" startContent={<i className="fa-solid fa-arrow-left"></i>}>
					<Link to="/admin/vouchers">Quay lại</Link>
				</Button>
			</div>
			<div className="mt-4">
				<Input
					variant="bordered"
					type="text"
					label="Tiêu đề voucher"
					size="sm"
					isRequired
					onChange={(e) => setVoucher({ ...voucher, voucher_name: e.target.value })}
				/>
				<div className="flex gap-3 mt-8">
					<Input
						variant="bordered"
						size="lg"
						label="Mã giảm giá"
						labelPlacement="outside"
						placeholder="####"
						isRequired
						onChange={(e) => setVoucher({ ...voucher, voucher_code: e.target.value })}
					/>
					<Input
						variant="bordered"
						size="lg"
						type="number"
						label="Giảm giá (%)"
						placeholder="%"
						labelPlacement="outside"
						isRequired
						onChange={(e) => setVoucher({ ...voucher, discount: e.target.value })}
					/>
					<DateInput
						variant="bordered"
						onChange={(e) => setVoucher({ ...voucher, expiry_date: e })}
						label={'Birth date'}
						labelPlacement="outside"
						isRequired
						placeholderValue={new CalendarDate(1995, 11, 6)}
					/>
					<Input
						type="text"
						label="Mô tả"
						labelPlacement="outside"
						placeholder="Mô tả"
						variant="bordered"
						size="lg"
						onChange={(e) => setVoucher({ ...voucher, description: e.target.value })}
					/>
				</div>

				<Button
					className="mt-10 mb-4 block w-full"
					color="primary"
					size="lg"
					radius="sm"
					onClick={handleCreateVoucher}
				>
					Tạo voucher mới
				</Button>
			</div>
		</div>
	);
}
