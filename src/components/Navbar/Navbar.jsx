import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const [isShow, setIsShow] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsShow(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	const toggleShow = () => {
		setIsShow(!isShow);
	};
	console.log(isShow);
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
				<i
					className="bx bx-search p-2 bg-[#eee] mr-2 rounded-xl font-medium hover:cursor-pointer"
					onClick={toggleShow}
				></i>
				<Link to="/#">
					<i className="bx bx-cart-alt p-2 bg-[#eee] mr-2 rounded-xl font-medium hover:cursor-pointer"></i>
				</Link>
				<Link to="/#">
					<i className="bx bx-user p-2 bg-[#eee] rounded-xl font-medium hover:cursor-pointer"></i>
				</Link>
			</div>
			{/* form show auths */}
			<div className="absolute right-0 bg-white top-20 p-4 rounded-md z-[100] hidden shadow-md transition-all duration-300">
				<a className="block px-2 py-1 mb-1 capitalize font-semibold tracking-[1.6px]">
					Đăng Nhập
				</a>
				<a className="block px-2 py-1 capitalize font-semibold tracking-[1.6px]">Đăng kí</a>
			</div>
			{/* Input Search */}
			<div
				className={`fixed top-24  bg-slate-50 p-2 rounded-xl shadow-sm 
					 transition-all duration-300  
					 ${isShow ? 'translate-x-[980px]' : 'translate-x-[2000px]'}
					`}
			>
				<input
					type="text"
					className="p-2 outline-none rounded-xl mr-2 shadow-xl w-60"
					placeholder="Pro cần tìm gì ?"
				/>
				<i className="bx bx-search inline-block p-2 bg-blue-500 text-white rounded-xl cursor-pointer"></i>
			</div>
		</nav>
	);
}
