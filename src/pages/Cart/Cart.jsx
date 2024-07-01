import Steps from './steps/Steps';
import { Outlet } from 'react-router-dom';
import ButtonPayment from './ButtonPayment/ButtonPayment';
export default function Cart() {
	return (
		<div className=" w-full mt-20">
			<div className=" max-w-[700px] mx-auto  bg-white shadow-md  p-1 relative max-sm:m-2 rounded-md">
				<Steps />
				<Outlet />
			</div>
		</div>
	);
}
