import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const [isShow, setIsShow] = useState(false);
	const [isFormVisible, setIsFormVisible] = useState(false);
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

	useEffect(() => {
		const boxUser = document.querySelector('.bx-user');

		const handleMouseEnter = () => {
			setIsFormVisible(true);
			setIsShow(false);
		};

		const handleMouseLeave = () => {
			const timeoutId = setTimeout(() => {
				setIsFormVisible(false);
			}, 1000);
			return () => clearTimeout(timeoutId);
		};

		boxUser.addEventListener('mouseenter', handleMouseEnter);
		boxUser.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			boxUser.removeEventListener('mouseenter', handleMouseEnter);
			boxUser.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, []);

	const toggleShow = () => {
		setIsShow(!isShow);
	};

	return (
		<nav className="w-full flex p-4 justify-between max-w-[1300px] mx-auto items-center ">
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
			<div
				className={`absolute right-0 bg-white top-24 p-2 border-2 z-[100] rounded-[4px] mr-[310px]
				before:content-[''] before:absolute before:triangle-up transition-opacity duration-300 ${
					isFormVisible ? 'opacity-100' : 'opacity-0'
				}`}
			>
				<p className="text-[14px] p-2 font-semibold ">
					<i className="fa-solid fa-hands-clapping mr-1"></i> Xin chào, Vui lòng đăng nhập
				</p>
				<div className="w-full grid grid-cols-2 gap-2 p-2  ">
					<button className="p-1 capitalize  tracking-[1.6px] text-[14px] font-medium bg-blue-500 text-white rounded-sm ">
						Đăng Nhập
					</button>
					<button className="p-1 capitalize  tracking-[1.6px] text-[14px] font-medium border-2 border-blue-500 rounded-sm">
						Đăng kí
					</button>
				</div>
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
