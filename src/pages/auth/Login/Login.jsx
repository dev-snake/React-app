import { useEffect, useState } from 'react';
import { Input, Link, Button, Card, Checkbox } from '@nextui-org/react';
import { toast } from 'sonner';
import axios from 'axios';
import { API } from '../../../service/api/API';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../../../utils/saveStatus';
export default function Login() {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		username: '',
		password: ''
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		if (user.username === '' || user.password === '') {
			toast.warning('Vui lòng nhập đầy đủ thông tin !');
			return;
		}
		const hanldeLogin = async () => {
			try {
				const response = await axios.post(`${API.USERS}/login`, user);
				saveToken(response.data.token, true);
				toast.success('Đăng nhập thành công !', { duration: 1000 });
				navigate('/');
			} catch (error) {
				toast.error(error.response.data);
			}
		};
		hanldeLogin();
	};

	return (
		<section className="flex justify-center items-center max-w-[1500px] mx-auto mt-36 mb-64">
			<div className="flex flex-col ">
				<Card className="max-w-full w-[500px] bg-white p-6">
					<h2 className="capitalize font-semibold text-xl">Login</h2>
					<form action="" className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
						<Input
							variant="underlined"
							label="Username"
							onChange={(e) => setUser({ ...user, username: e.target.value })}
						></Input>
						<Input
							variant="underlined"
							label="Password"
							onChange={(e) => setUser({ ...user, password: e.target.value })}
						></Input>
						<div className="flex justify-between mt-4">
							<Checkbox> Remember me</Checkbox>
							<Link> Forgot password?</Link>
						</div>
						<Button size="lg" color="primary" variant="shadow" type="submit">
							Login
						</Button>
					</form>
				</Card>
			</div>
		</section>
	);
}
