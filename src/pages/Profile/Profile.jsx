import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
export default function Profile() {
	return (
		<div>
			<Sidebar />
			<Outlet />
		</div>
	);
}
