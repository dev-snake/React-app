import { Card, CardHeader, CardBody, CardFooter, Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
export default function OrderedSuccess() {
	return (
		<Card className="m-3 " radius="none">
			<CardHeader className="mt-5">
				<Button
					isIconOnly
					radius="full"
					size="lg"
					variant="shadow"
					className="bg-[#56b688] mx-auto"
				>
					<i className="fa-solid fa-check text-white"></i>
				</Button>
			</CardHeader>
			<CardBody>
				<h2 className="text-center text-2xl font-semibold ">Đặt hàng thành công !</h2>
			</CardBody>
			<CardFooter>
				<Link to="/" className="block mx-auto mb-5">
					<Button
						color="primary"
						variant="shadow"
						startContent={<i className="fa-solid fa-arrow-rotate-left mr-2"></i>}
					>
						Quay lại trang chủ
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}
