import { ButtonGroup, Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
export default function Menu() {
	return (
		<div className="p-2">
			<ButtonGroup size="md" color="primary" variant="shadow">
				<Button>
					<Link to={'products'}>Sản phẩm</Link>
				</Button>
				<Button>Đơn hàng</Button>
				<Button>Danh mục</Button>
				<Button>Người dùng</Button>
				<Button>Thống kê</Button>
			</ButtonGroup>
		</div>
	);
}
