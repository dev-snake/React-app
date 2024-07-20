import { Link } from 'react-router-dom';
import { accessToken, decodeToken } from '../../../utils/saveStatus';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
export default function Sidebar() {
	const [user, setUser] = useState({ username: '', email: '' });
	useEffect(() => {
		const token = accessToken.token;
		if (token) {
			const user = decodeToken(token);
			setUser(user);
		}
	}, []);
	return (
		<>
			<div className="md:max-w-[360px] w-full max-sm:p-4">
				<div className="bg-white p-4 rounded-2xl w-full">
					<p className="capitalize font-semibold text-2xl text-center">
						<i className="fa-solid fa-face-laugh-wink text-purple-500 text-3xl"></i>
					</p>
					<p className="text-xl font-medium text-center"></p>
					<div className="flex justify-between mt-4">
						<p className="font-semibold">username:</p>
						<p className="font-medium">{user.username}</p>
					</div>
					<div className="flex justify-between">
						<p className="font-semibold">email:</p>
						<p className="font-medium">{user.email}</p>
					</div>
					<div className="flex justify-between">
						<p className="font-semibold">Point:</p>
						<p className="font-medium">
							<i className="fa-solid fa-coins text-orange-500"></i>
						</p>
					</div>
				</div>
				<div className="w-full grid">
					<Link
						to={'user-infor'}
						className="p-4 bg-white rounded-2xl mt-2 font-semibold capitalize text-[1rem] flex items-centern cursor-pointer"
					>
						<i className="bx bx-user mr-4 font-medium"></i>
						<span> Thông tin cá nhân</span>
					</Link>
					<Link
						to={'order-history'}
						className="p-4 bg-white rounded-2xl mt-2 font-semibold capitalize text-[1rem] flex items-centern cursor-pointer"
					>
						<i className="bx bx-time-five mr-4 font-medium"></i>
						<span> Lịch sử Mua hàng</span>
					</Link>
					<Link
						to={'lookup-order'}
						className="p-4 bg-white rounded-2xl mt-2 font-semibold capitalize text-[1rem] flex items-centern cursor-pointer"
					>
						<i className="bx bx-search-alt mr-4 font-medium"></i>
						<span> Tra cứu đơn hàng</span>
					</Link>
					<Link className="p-4 bg-white rounded-2xl mt-2 font-semibold capitalize text-[1rem]">
						<i className="bx bx-store mr-3 font-medium"></i> Đổi điểm
					</Link>
					<Link className="p-4 bg-white rounded-2xl mt-2 font-semibold capitalize text-[1rem] text-[#ff0000]">
						<i className="bx bx-log-out mr-4 font-medium"></i> Đăng xuất
					</Link>
				</div>
			</div>
		</>
	);
}
