import { useState } from 'react';
import { Input, Link, Button, Card, Checkbox } from '@nextui-org/react';

export default function Register() {
	return (
		<section className="flex justify-center items-center max-w-[1500px] mx-auto mt-36 mb-64">
			<div className="flex flex-col ">
				<Card className="max-w-full w-[500px] bg-white p-6">
					<h2 className="capitalize font-semibold text-xl">Regsiter</h2>
					<form action="" className="mt-4 flex flex-col gap-4">
						<Input label="Email" type="email"></Input>
						<Input label="Username"></Input>
						<Input label="Password"></Input>
						<div className="flex justify-between">
							<Checkbox> Remember me</Checkbox>
							<Link> Forgot password?</Link>
						</div>
						<Button size="18" color="primary" variant="shadow">
							Register
						</Button>
					</form>
				</Card>
			</div>
		</section>
	);
}
