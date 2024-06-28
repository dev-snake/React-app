import {
	Button,
	Input,
	Dropdown,
	DropdownMenu,
	DropdownItem,
	DropdownTrigger
} from '@nextui-org/react';
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
			<div className="flex gap-10">
				<Dropdown>
					<DropdownTrigger>
						<Button
							endContent={<i className="fa-solid fa-chevron-down"></i>}
							variant="flat"
						>
							Status
						</Button>
					</DropdownTrigger>
					<DropdownMenu>
						<DropdownItem>active</DropdownItem>
						<DropdownItem>cancel</DropdownItem>
						<DropdownItem>Pendding</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Button color="primary" endContent={<i className="fa-solid fa-plus"></i>}>
					<Link to={'create'}>Thêm sản phẩm mới</Link>
				</Button>
			</div>
		</div>
	);
}
