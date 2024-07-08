import { Button, Input } from '@nextui-org/react';
import { accessToken, decodeToken } from '../../../utils/saveStatus';
import { useState, useEffect } from 'react';
export default function UserInfor() {
	const [user, setUser] = useState({ username: '', email: '', fullName: '', phonenumber: '' });
	useEffect(() => {
		const token = accessToken.token;
		if (token) {
			const user = decodeToken(token);
			setUser({
				username: user.username,
				email: user.email,
				fullName: user.fullname,
				phonenumber: user.phonenumber
			});
		}
	}, []);
	console.log(user);
	return (
		<div className="">
			<p className="text-xl font-semibold">Thông tin tài khoản</p>
			<div className="max-w-[500px] mx-auto flex flex-col gap-3 mt-5">
				<Input label="Họ và tên" size="sm" variant="underlined" value={user.fullName} />
				<Input label="Username" size="sm" variant="underlined" value={user.username} />
				<Input label="Email" size="sm" variant="underlined" value={user.email} />
				<Input
					label="Số điện thoại"
					size="sm"
					variant="underlined"
					value={user.phonenumber}
				/>
				<Button color="primary" variant="shadow" className="mt-2">
					Cập nhật thông tin
				</Button>
			</div>
		</div>
	);
}
