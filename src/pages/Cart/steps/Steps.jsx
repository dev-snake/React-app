import { Button, Tooltip } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { Steps as NavSteps } from './Data';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function Steps() {
	const location = useLocation();
	useEffect(() => {
		console.log('re-render');
	}, [location]);
	const getCurrentStepIndex = () => {
		return NavSteps.findIndex((step) => location.pathname.includes(step.path));
	};

	const currentStepIndex = getCurrentStepIndex();

	return (
		<div className="flex justify-between p-4 m-3  border-[1px]  rounded-sm gap-5 ">
			{NavSteps.map(({ icon, content, path }, index) => (
				<div className="flex flex-col items-center text-center gap-2 " key={index}>
					<Tooltip content={content} color="primary">
						<Button
							radius="full"
							color={index <= currentStepIndex ? 'primary' : 'default'}
							variant="shadow"
							isIconOnly
						>
							<Link to={`${path}`}>{icon}</Link>
						</Button>
					</Tooltip>
				</div>
			))}
			{/* <div className="flex flex-col items-center text-center gap-2 ">
				<Tooltip content="Giỏ hàng" color="primary">
					<Button radius="full" color="primary" variant="shadow" isIconOnly>
						<Link to={'cart-item'}>
							<i className="fa-solid fa-bag-shopping "></i>
						</Link>
					</Button>
				</Tooltip>
			</div> */}
			{/* <div className="flex flex-col items-center text-center gap-2 ">
				<Tooltip content="Thanh toán" color="primary">
					<Button radius="full" color="danger" variant="flat" isIconOnly>
						<Link to={'cart-infor-order-box'}>
							<i className="fa-regular fa-address-card "></i>
						</Link>
					</Button>
				</Tooltip>
			</div>
			<div className="flex flex-col items-center text-center gap-2 ">
				<Tooltip content="Hoàn tất" color="primary">
					<Button radius="full" color="danger" variant="flat" isIconOnly>
						<Link to={'payment'}>
							<i className="fa-solid fa-money-check  "></i>
						</Link>
					</Button>
				</Tooltip>
			</div>
			<div className="flex flex-col items-center text-center gap-2 ">
				<Tooltip content="Đã hoàn tất" color="primary">
					<Button radius="full" color="danger" variant="flat" isIconOnly>
						<i className="fa-regular fa-circle-check "></i>
					</Button>
				</Tooltip>
			</div> */}
		</div>
	);
}
