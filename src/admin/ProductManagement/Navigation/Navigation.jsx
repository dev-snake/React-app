import { Button, Input } from '@nextui-org/react';
import { Link } from 'react-router-dom';
export default function Navigation() {
	return (
		<div className="flex justify-between gap-3">
			<Input
				className="w-full sm:max-w-[20%]"
				placeholder="Search by name..."
				startContent={<i className="fa-solid fa-magnifying-glass"></i>}
				variant="flat"
			/>
			<Button color="primary" endContent={<i className="fa-solid fa-plus"></i>}>
				<Link to={'create'}>Thêm sản phẩm mới</Link>
			</Button>
		</div>
	);
}
