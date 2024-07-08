import { Button, Input } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { API } from '../../../service/api/API';
import axios from 'axios';
export default function CreateCategory() {
	const [name, setName] = useState('');
	const handleCreateCategory = async () => {
		if (!name) {
			toast.error('Vui lòng điền đầy đủ thông tin');
			return;
		}
		try {
			const res = await axios.post(API.CREATE_CATEGORY, { name });
			if (res.status === 201) {
				toast.success('Tạo danh mục thành công');
			}
			setName('');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="p-3">
			<h1>Thêm danh mục mới</h1>
			<div className="mt-3">
				<Input
					variant="bordered"
					type="text"
					label="Tiêu đề voucher"
					size="sm"
					isRequired
					onChange={(e) => setName(e.target.value)}
				/>
				<Button className="mt-3 w-full" color="primary" onClick={handleCreateCategory}>
					Thêm danh mục mới
				</Button>
			</div>
		</div>
	);
}
