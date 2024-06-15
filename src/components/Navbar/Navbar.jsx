export default function Navbar() {
	return (
		<nav className="w-full flex p-4 justify-between max-w-[1300px] mx-auto items-center">
			<a className="font-semibold text-xl">dev_snake</a>
			<ul className="hidden md:flex gap-2">
				<li>
					<a routerLink="" className="p-4 text-[1rem] font-semibold">
						Trang chủ
					</a>
				</li>
				<li>
					<a routerLink="/products" className="p-4 text-[1rem] font-semibold">
						Sản phẩm
					</a>
				</li>
				<li>
					<a routerLink="/ranking" className="p-4 text-[1rem] font-semibold">
						Xếp hạng
					</a>
				</li>
			</ul>
			<div>
				<i className="bx bx-search p-2 bg-[#eee] mr-2 rounded-xl font-medium hover:cursor-pointer"></i>
				<a routerLink="cart">
					<i className="bx bx-cart-alt p-2 bg-[#eee] mr-2 rounded-xl font-medium hover:cursor-pointer"></i>
				</a>
				<i className="bx bx-user p-2 bg-[#eee] rounded-xl font-medium hover:cursor-pointer"></i>
			</div>
		</nav>
	);
}
