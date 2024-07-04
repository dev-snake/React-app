import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
export default function Profile() {
	return (
		<section className="max-w-[1500px] mt-20 mx-auto mb-10">
			<div className="w-full grid md:flex gap-8">
				<Sidebar />
				<div className="max-sm:p-4 w-full bg-white p-2 rounded-md">
					<Outlet />
				</div>
			</div>
		</section>
	);
}
