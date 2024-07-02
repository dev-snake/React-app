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
import { useSearchParams } from 'react-router-dom';
export default function CollectionFilter() {
	const [categories, setCagegories] = useState([]);
	const [selectedKeys, setSelectedKeys] = useState(new Set(['Bộ lọc']));
	const [searchParams, setSearchParams] = useSearchParams();
	const selectedValue = useMemo(
		() => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
		[selectedKeys]
	);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const { data } = await axios.get(`${API.CATEGORIES}`);
				setCagegories(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchCategories();
	}, []);
	useEffect(() => {
		switch (selectedValue) {
			case 'Sắp xếp tăng dần':
				setSearchParams({ ...searchParams, sort_by: 'asc' });
				break;
			case 'Sắp xếp giảm dần':
				setSearchParams({ ...searchParams, sort_by: 'desc' });
				break;
			default:
				setSearchParams({});
		}
	}, [selectedValue]);
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
					<DropdownItem key="Bộ lọc">Bộ lọc</DropdownItem>
					<DropdownItem key="Sắp xếp tăng dần">Sắp xếp tăng dần</DropdownItem>
					<DropdownItem key="Sắp xếp giảm dần">Sắp xếp giảm dần</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	);
}
