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
	DropdownTrigger,
	Button
} from '@nextui-org/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchIcon } from './SearchIcon';
import { removeToken, isLoggedIn, isTokenExpired, accessToken } from '../../utils/saveStatus';
import { navList, option1, option2 } from './data';

export default function Navigation() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [path, setPath] = useState({ isPath: false, route: '/admin' });
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	useEffect(() => {
		setPath({ isPath: pathname.startsWith(path.route), route: '/admin' });
	}, [path.route, pathname]);
	useEffect(() => {
		if (accessToken.token && isTokenExpired(accessToken.token)) {
			removeToken();
			navigate('auth/login');
		}
	}, []);
	const handleLogout = () => {
		removeToken();
		navigate('auth/login');
	};
	return (
		<Navbar
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			className="fixed w-full top-0 left-0 right-0 mx-auto z-[1000] "
			maxWidth="2xl"
		>
			<NavbarContent className="sm:hidden">
				<NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
			</NavbarContent>

			<NavbarContent justify="start" as="div">
				<NavbarBrand className="mr-4">
					<Link className="font-bold text-inherit" to={'/'}>
						dev_snake
					</Link>
				</NavbarBrand>
			</NavbarContent>

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
				<Button isIconOnly color="primary" size="sm" variant="flat">
					<Link to={'cart/cart-item'}>
						<i className="fa-solid fa-cart-shopping"></i>
					</Link>
				</Button>
				<Dropdown placement="bottom-end" className="mt-10">
					<DropdownTrigger>
						<Avatar size="sm" />
					</DropdownTrigger>
					<DropdownMenu variant="flat">
						{isLoggedIn()
							? option2.map((item) => (
									<DropdownItem key={item.path} startContent={item.icon}>
										<Link to={item.path}>{item.label}</Link>
									</DropdownItem>
							  ))
							: option1.map((item) => (
									<DropdownItem key={item.path}>
										<Link to={item.path}>{item.label}</Link>
									</DropdownItem>
							  ))}
						{isLoggedIn() && (
							<DropdownItem
								color="danger"
								onClick={handleLogout}
								startContent={<i className="fa-solid fa-right-from-bracket"></i>}
							>
								Đăng xuất
							</DropdownItem>
						)}
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>

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
