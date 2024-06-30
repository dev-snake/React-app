import { useState, useMemo, useEffect } from 'react';
import {
	ButtonGroup,
	Dropdown,
	DropdownTrigger,
	DropdownItem,
	DropdownMenu,
	Button
} from '@nextui-org/react';
import axios from 'axios';
import { API } from '../../../service/api/API';
import { Link } from 'react-router-dom';
export default function CollectionFilter() {
	const [categories, setCagegories] = useState([]);
	const [selectedKeys, setSelectedKeys] = useState(new Set(['Bộ lọc']));
	const selectedValue = useMemo(
		() => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
		[selectedKeys]
	);
	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await axios.get(`${API.CATEGORIES}`);
				setCagegories(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchCategories();
	}, []);
	return (
		<div className="h-12 flex justify-between items-center max-md:grid gap-2 ">
			<ButtonGroup variant="shadow" size="sm" color="primary">
				<Button>
					<Link to="/products">Tất cả</Link>
				</Button>
				{categories.map((category, index) => (
					<Button key={index}>
						<Link to={`${category.categoryId}`}> {category.name}</Link>
					</Button>
				))}
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
