import { Fragment } from 'react';
import CartItem from '../cart-item/CartItem';
function CartContainer() {
	return (
		<Fragment>
			<CartItem />
			{/* <hr className="p-1 m-2" />
			<div className="p-1 m-2">
				<ApplyVoucher />
			</div> */}
		</Fragment>
	);
}
export default CartContainer;
