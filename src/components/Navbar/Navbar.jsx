import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className="w-full flex p-4 justify-between max-w-[1300px] mx-auto items-center">
			<Link to="/" className="font-semibold text-xl">
				dev_snake
			</Link>
			<ul className="hidden md:flex gap-2">
				<li>
					<Link to="/" className="p-4 text-[1rem] font-semibold">
						Trang chủ
					</Link>
				</li>
				<li>
					<Link to="/products" className="p-4 text-[1rem] font-semibold">
						Sản phẩm
					</Link>
				</li>
				<li>
					<Link to="/ranking" className="p-4 text-[1rem] font-semibold">
						Xếp hạng
					</Link>
				</li>
			</ul>
			<div>
				<i className="bx bx-search p-2 bg-[#eee] mr-2 rounded-xl font-medium hover:cursor-pointer"></i>
				<Link to="/#">
					<i className="bx bx-cart-alt p-2 bg-[#eee] mr-2 rounded-xl font-medium hover:cursor-pointer"></i>
				</Link>
				<Link to="/#">
					<i className="bx bx-user p-2 bg-[#eee] rounded-xl font-medium hover:cursor-pointer"></i>
				</Link>
			</div>
		</nav>
	);
}
