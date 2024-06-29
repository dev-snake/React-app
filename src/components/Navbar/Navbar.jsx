import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Input,
	Dropdown,
	DropdownItem,
	Avatar,
	DropdownMenu,
	DropdownTrigger
} from '@nextui-org/react';
import { useLocation } from 'react-router-dom';
import { SearchIcon } from './SearchIcon';
import { getIsLoggedIn, removeToken } from '../../utils/saveStatus';

// Constants
const navList = [
	{ label: 'Trang chủ', path: '/' },
	{ label: 'Sản phẩm', path: 'products' },
	{ label: 'Ranking', path: 'ranking' }
];

const option1 = [
	{ path: '/auth/login', label: 'Đăng nhập' },
	{ path: '/auth/register', label: 'Đăng Kí' }
];

const option2 = [{ path: '/profile', label: 'Hồ sơ' }];

// Component
export default function Navigation() {
	const { pathname } = useLocation();
	const [isLoggedIn, setIsLoggedIn] = useState(getIsLoggedIn());
	const [path, setPath] = useState({ isPath: false, route: '/admin' });
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		setPath({ isPath: pathname.startsWith(path.route), route: '/admin' });
	}, [path.route, pathname]);

	const handleLogout = () => {
		setIsLoggedIn(false);
		removeToken();
	};

	return (
		<Navbar
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			className="fixed w-full top-0 left-0 right-0 mx-auto z-[1000] "
			maxWidth="2xl"
		>
			{/* Menu toggle for smaller screens */}
			<NavbarContent className="sm:hidden">
				<NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
			</NavbarContent>

			{/* Branding */}
			<NavbarContent justify="start" as="div">
				<NavbarBrand className="mr-4">
					<Link className="font-bold text-inherit" to={'/'}>
						dev_snake
					</Link>
				</NavbarBrand>
			</NavbarContent>

			{/* Navigation items */}
			<NavbarContent className="hidden sm:flex gap-3" justify="center">
				{path.isPath ? (
					<NavbarItem>
						<Link to="/" className="font-semibold text-xl">
							WELCOME TO DEV_SNAKE
						</Link>
					</NavbarItem>
				) : (
					<>
						{navList.map(({ label, path }, index) => (
							<NavbarItem key={index}>
								<Link to={path} className="font-medium">
									{label}
								</Link>
							</NavbarItem>
						))}
					</>
				)}
			</NavbarContent>

			{/* User actions */}
			<NavbarContent as="div" className="items-center" justify="end">
				<Input
					classNames={{
						base: 'max-w-full sm:max-w-[14rem] h-10',
						inputWrapper: 'h-full font-normal text-default-500'
					}}
					placeholder="Type to search..."
					size="sm"
					startContent={<SearchIcon size={18} />}
					type="search"
				/>
				<Dropdown placement="bottom-end" className="mt-10">
					<DropdownTrigger>
						<Avatar
							as="button"
							className="transition-transform"
							color="secondary"
							name="Jason Hughes"
							size="sm"
						/>
					</DropdownTrigger>
					<DropdownMenu variant="flat">
						{isLoggedIn
							? option2.map((item) => (
									<DropdownItem key={item.path}>
										<Link to={item.path}>{item.label}</Link>
									</DropdownItem>
							  ))
							: option1.map((item) => (
									<DropdownItem key={item.path}>
										<Link to={item.path}>{item.label}</Link>
									</DropdownItem>
							  ))}
						{isLoggedIn && (
							<DropdownItem onClick={handleLogout}>Đăng xuất</DropdownItem>
						)}
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>

			{/* Bottom menu */}
			<NavbarMenu>
				{navList.map(({ label, path }, index) => (
					<NavbarMenuItem key={`${label}-${index}`}>
						<Link
							className="w-full"
							color={
								index === 2
									? 'warning'
									: index === navList.length - 1
									? 'danger'
									: 'foreground'
							}
							to={path}
						>
							{label}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
