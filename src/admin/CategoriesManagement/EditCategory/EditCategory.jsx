import { Input, Button } from '@nextui-org/react';
import { useParams } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';
import { toast } from 'sonner';
import { API } from '../../../service/api/API';
import { useFetch } from '../../../Hooks/useFetch';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function EditCategory() {
	const navigate = useNavigate();
	const { data, isLoading } = useFetch(API.CATEGORIES);
	const { categoryId } = useParams();
	const [category, setCategory] = useState({ name: '' });
	useLayoutEffect(() => {
		if (isLoading) {
			toast.loading('Đang tải dữ liệu ...');
		} else {
			toast.dismiss();
			const category = data.find((item) => item.categoryId === +categoryId);
			if (!category) {
				toast.error('Danh mục không tồn tại');
			} else {
				setCategory(category);
				console.log(category);
			}
		}
	}, [isLoading, categoryId]);
	const handleUpdateCategory = async () => {
		try {
			const res = await axios.put(`${API.CATEGORIES}/${categoryId}/edit`, category);
			toast.success('Cập nhật danh mục thành công');
			navigate('/admin/categories');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="p-3">
			<h1>Edit Danh mục</h1>
			<div className="mt-3">
				<Input
					variant="bordered"
					type="text"
					label="Edit danh mục"
					onChange={(e) => setCategory({ ...category, name: e.target.value })}
					value={category.name}
					size="sm"
					isRequired
				/>
				<Button className="mt-3 w-full" color="primary" onClick={handleUpdateCategory}>
					Cập nhật mới
				</Button>
			</div>
		</div>
	);
}
