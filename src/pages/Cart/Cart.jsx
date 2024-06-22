import ApplyVoucher from './apply-voucher/ApplyVoucher';
import CartItem from './cart-item/CartItem';
import Steps from './steps/Steps';
import { Outlet } from 'react-router-dom';
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
