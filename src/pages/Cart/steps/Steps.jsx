import { Button, Tooltip } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { Steps as NavSteps } from './Data';
import { useLocation } from 'react-router-dom';
export default function Steps() {
	const location = useLocation();
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
		</div>
	);
}
