import { ButtonGroup, Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
export default function Menu() {
	return (
		<div className="p-2">
			<ButtonGroup size="md" color="primary" variant="shadow">
				<Button>
					<Link to={'products'}>Products</Link>
				</Button>
				<Button>Orders</Button>
				<Button>Categories</Button>
				<Button>Categories</Button>
				<Button>Categories</Button>
			</ButtonGroup>
		</div>
	);
}
