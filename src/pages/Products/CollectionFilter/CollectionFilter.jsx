import { useState, useMemo, useEffect } from 'react';
import {
	ButtonGroup,
	Dropdown,
	DropdownTrigger,
	DropdownItem,
	DropdownMenu,
	Button
} from '@nextui-org/react';
export default function CollectionFilter() {
	const [selectedKeys, setSelectedKeys] = useState(new Set(['Bộ lọc']));

	const selectedValue = useMemo(
		() => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
		[selectedKeys]
	);

	return (
		<div className="h-12 flex justify-between items-center max-md:grid gap-2 ">
			<ButtonGroup variant="shadow" size="sm" color="primary">
				<Button>Danh muc 1</Button>
				<Button>Danh muc 2</Button>
				<Button>Danh muc 3</Button>
				<Button>Danh muc 4</Button>
				<Button>Danh muc 5</Button>
			</ButtonGroup>
			<Dropdown>
				<DropdownTrigger>
					<Button
						variant="shadow"
						color="primary"
						className="capitalize inline-block"
						startContent={<i className="fa-solid fa-arrow-down-wide-short"></i>}
						size="sm"
					>
						{selectedValue}
					</Button>
				</DropdownTrigger>
				<DropdownMenu
					aria-label="Single selection example"
					variant="flat"
					disallowEmptySelection
					selectionMode="single"
					selectedKeys={selectedKeys}
					onSelectionChange={setSelectedKeys}
				>
					<DropdownItem key="Từ a - z">Từ a - z</DropdownItem>
					<DropdownItem key="Từ z - a">Từ z - a </DropdownItem>
					<DropdownItem key="Sắp xếp tăng dần">Sắp xếp tăng dần</DropdownItem>
					<DropdownItem key="Sắp xếp giảm dần">Sắp xếp giảm dần</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	);
}
