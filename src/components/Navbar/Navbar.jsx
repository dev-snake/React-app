import { useState, useEffect } from 'react';
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
export default function Navigation() {
	let { pathname } = useLocation();
	const [path, setPath] = useState({ isPath: false, route: '/admin' });
	useEffect(() => {
		if (pathname.startsWith(path.route)) {
			setPath((prevPath) => ({ ...prevPath, isPath: true }));
		} else {
			setPath((prevPath) => ({ ...prevPath, isPath: false }));
		}
	}, [path.route, pathname]);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = ['Profile', 'Dashboard', 'Activity', 'Analytics', 'Log Out'];
	const navList = [
		{ label: 'Trang chủ', path: '/' },
		{ label: 'Sản phẩm', path: 'products' },
		{ label: 'Ranking', path: 'ranking' }
	];
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
					<Link className=" font-bold text-inherit" to={'/'}>
						dev_snake
					</Link>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className="hidden sm:flex gap-3" justify="center">
				{path.isPath ? (
					<NavbarItem>
						<Link to={'/'} className="font-semibold text-xl">
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
						mainWrapper: 'h-full',
						input: 'text-small',
						inputWrapper:
							'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20'
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
						{/* <DropdownItem key="profile" className="h-14 gap-2">
							<p className="font-semibold">Signed in as</p>
							<p className="font-semibold">zoey@example.com</p>
						</DropdownItem>
						<DropdownItem key="settings">My Settings</DropdownItem>
						<DropdownItem key="team_settings">Team Settings</DropdownItem>

						<DropdownItem key="logout" color="danger">
							<Link> Log Out</Link>
						</DropdownItem> */}
						<DropdownItem key="login">
							<Link to={'auth/login'}> Đăng nhập </Link>
						</DropdownItem>

						<DropdownItem key="register">
							<Link to={'auth/register'}> Đăng kí</Link>
						</DropdownItem>
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
									: index === menuItems.length - 1
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
