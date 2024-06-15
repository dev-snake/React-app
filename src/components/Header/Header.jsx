import Navbar from '../Navbar/Navbar';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
export default function Header() {
	return (
		<header className=" w-full sticky top-0 left-0 right-0 bg-white z-[100] shadow-sm">
			<Navbar />
			<div className="absolute right-0 bg-white top-20 p-4 rounded-md z-[100] hidden shadow-md transition-all duration-300">
				<a className="block px-2 py-1 mb-1 capitalize font-semibold tracking-[1.6px]">
					Đăng Nhập
				</a>
				<a className="block px-2 py-1 capitalize font-semibold tracking-[1.6px]">Đăng kí</a>
			</div>
			<HeaderSearch />
		</header>
	);
}
