import { useState } from 'react';
import { Tabs, Tab, Input, Link, Button, Card, Checkbox } from '@nextui-org/react';

export default function Login() {
	return (
		<section className="flex justify-center items-center max-w-[1500px] mx-auto mt-36 mb-64">
			<div className="flex flex-col ">
				<Card className="max-w-full w-[500px] bg-white p-6">
					<h2 className="capitalize font-semibold text-xl">Login</h2>
					<form action="" className="mt-4 flex flex-col gap-4">
						<Input label="Username"></Input>
						<Input label="Password"></Input>
						<div className="flex justify-between">
							<Checkbox> Remember me</Checkbox>
							<Link> Forgot password?</Link>
						</div>
						<Button size="18" color="primary" variant="shadow">
							Login
						</Button>
					</form>
				</Card>
			</div>
		</section>
	);
}
