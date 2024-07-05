import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageTest from '../../assets/images/m1wden.png';
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
import { useFetch } from '../../Hooks/useFetch';
import { API } from '../../service/api/API';
import { formatMoney } from '../../utils/formatNumber';
import { toast } from 'sonner';
export default function Navigation() {
	const { data, isLoading } = useFetch(`${API.PRODUCTS}`);
	const [searchList, setsearchList] = useState([]);
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
		if (isLoading) {
			toast.loading('Đang tải dữ liệu');
		} else {
			toast.dismiss();
		}
	}, [isLoading]);
	useEffect(() => {
		const inputSearch = document.getElementById('input-search');
		const boxSearch = document.getElementById('box-search');
		inputSearch.addEventListener('focus', () => {
			boxSearch.classList.remove('hidden');
		});
		inputSearch.addEventListener('blur', () => {
			boxSearch.classList.add('hidden');
		});
		return () => {
			inputSearch.removeEventListener('focus', () => {
				boxSearch.classList.remove('hidden');
			});
			inputSearch.removeEventListener('blur', () => {
				boxSearch.classList.add('hidden');
			});
		};
	});
	const handleLogout = () => {
		removeToken();
		navigate('auth/login');
	};
	const handleSearch = (e) => {
		const filter = data.filter((item) => item.name.toLowerCase().includes(e.target.value));
		setsearchList(filter);
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

			<NavbarContent as="div" className="items-center relative" justify="end">
				<Input
					id="input-search"
					radius="sm"
					className="w-1/2 "
					placeholder="Type to search..."
					size="md"
					startContent={<SearchIcon size={18} />}
					type="search"
					onChange={handleSearch}
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
				<div className="absolute  top-14 left-[34.1%] w-full hidden" id="box-search">
					<div className=" bg-white shadow w-1/2 p-1 rounded-sm sm:flex flex-col ">
						{searchList.length <= 0 ? (
							<span className="text-center text-slate-400 p-2">
								Không có sản phẩm nào ...
							</span>
						) : (
							searchList.map(({ name, price, image, _id }) => (
								<>
									<div className="flex justify-between items-center ">
										<div className="p-1">
											<Link
												to={_id}
												className="text-[11px] font-semibold block lowercase"
											>
												{name}
											</Link>
											<span className="text-[10px] font-semibold mr-2 tracking-[1.6px] text-red-500">
												{formatMoney(price)}đ
											</span>
											<del className="text-[10px]  tracking-[1.6px] text-slate-400">
												{formatMoney(price + 999)}đ
											</del>
										</div>
										<img
											src={image}
											alt=""
											className="w-10 h-10 border-[1px]"
										/>
									</div>
									<hr />
								</>
							))
						)}
					</div>
				</div>
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
