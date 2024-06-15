import Navbar from '../Navbar/Navbar';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
export default function Header() {
	return (
		<header className=" w-full sticky top-0 left-0 right-0 bg-white z-[100] shadow-sm">
			<Navbar />
			<div className="absolute right-0 bg-white top-20 p-4 rounded-md z-[100] hidden shadow-md transition-all duration-300">
				<a
					routerLink=""
					className="block px-2 py-1 mb-1 capitalize font-semibold tracking-[1.6px] text-[#ff0000]"
				>
					Đăng xuất
				</a>
				<a
					routerLink="profile"
					className="block px-2 py-1 capitalize font-semibold tracking-[1.6px]"
				>
					Hồ sơ
				</a>
				<a
					routerLink="login"
					className="block px-2 py-1 mb-1 capitalize font-semibold tracking-[1.6px]"
				>
					Đăng Nhập
				</a>
				<a
					routerLink="regsiter"
					className="block px-2 py-1 capitalize font-semibold tracking-[1.6px]"
				>
					Đăng kí
				</a>
			</div>
			<HeaderSearch />
		</header>
	);
}
