import { Input, Link, Button, Card, Checkbox, CardHeader } from '@nextui-org/react';
import { useFormValidation, validate } from '../../../Hooks/useFormValidation';

export default function Register() {
	const initialState = {
		fullname: '',
		email: '',
		username: '',
		password: ''
	};
	const { values, errors, handleChange, handleBlur, handleSubmit } = useFormValidation(
		initialState,
		validate
	);

	return (
		<section className="flex justify-center items-center max-w-[1500px] mx-auto mt-36 mb-64">
			<div className="flex flex-col">
				<Card className="max-w-full w-[500px] bg-white p-6">
					<CardHeader className="capitalize font-semibold text-xl">Đăng kí</CardHeader>
					<form className="mt-4 flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
						<Input
							label="Họ và tên"
							type="text"
							name="fullname"
							value={values.fullname}
							onChange={handleChange}
							onBlur={handleBlur}
							isInvalid={!!errors.fullname}
							errorMessage={errors.fullname}
						/>
						<Input
							label="Email"
							type="email"
							name="email"
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							isInvalid={!!errors.email}
							errorMessage={errors.email}
						/>
						<Input
							label="Username"
							type="text"
							name="username"
							value={values.username}
							onChange={handleChange}
							onBlur={handleBlur}
							isInvalid={!!errors.username}
							errorMessage={errors.username}
						/>
						<Input
							label="Password"
							type="password"
							name="password"
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
							isInvalid={!!errors.password}
							errorMessage={errors.password}
						/>
						<div className="flex justify-between">
							<Checkbox> Remember me</Checkbox>
							<Link> Forgot password?</Link>
						</div>
						<Button type="submit" size="lg" color="primary" variant="shadow">
							Đăng kí
						</Button>
					</form>
				</Card>
			</div>
		</section>
	);
}
