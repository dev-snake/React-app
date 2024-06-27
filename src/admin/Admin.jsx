import Menu from './Menu/Menu';
import { Outlet } from 'react-router-dom';
export default function Admin() {
	return (
		<section className="max-w-[1500px] mx-auto mt-20 bg-white rounded-md">
			<Menu />
			<Outlet />
		</section>
	);
}
