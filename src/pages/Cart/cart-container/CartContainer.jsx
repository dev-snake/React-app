import { Fragment } from 'react';
import CartItem from '../cart-item/CartItem';
import ApplyVoucher from '../apply-voucher/ApplyVoucher';
function CartContainer() {
	return (
		<Fragment>
			<CartItem />
			<hr className="p-1 m-2" />
			<ApplyVoucher />
		</Fragment>
	);
}
export default CartContainer;
