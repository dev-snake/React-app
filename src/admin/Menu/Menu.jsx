import { ButtonGroup, Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { navList } from './data';
import { useLocation } from 'react-router-dom';
export default function Menu() {
	const location = useLocation();
	const path = location.pathname.split('/')[2];
	return (
		<div className="p-2">
			<ButtonGroup size="md" color="default" variant="shadow">
				{navList.map((item, index) => (
					<Button key={index} color={path === item.path ? 'primary' : 'default'}>
						<Link to={item.path}> {item.label}</Link>
					</Button>
				))}
			</ButtonGroup>
		</div>
	);
}
