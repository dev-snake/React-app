import { Button, Image, Tooltip, Input } from '@nextui-org/react';
import useCart from '../../../Hooks/useCart';
import { formatMoney } from '../../../utils/formatNumber';
export default function CartItem() {
	const { cartItems, increaseQuantity, decreaseQuantity, removeItem } = useCart();
	const handleIncreaseQuantity = (productId) => increaseQuantity(productId);
	const handleDecreaseQuantity = (productId) => decreaseQuantity(productId);
	const handleRemoveItem = (productId) => removeItem(productId);
	console.log(cartItems);
	return (
		<div className="p-1 mt-8 mb-4 mx-2 grid gap-3">
			{cartItems.map((cart, index) => (
				<div className="flex justify-between gap-2" key={index}>
					<div className="text-center">
						<Image
							src={cart.image}
							alt=""
							className="w-[88px] h-[88px] border-[1px] p-2 rounded-sm"
						/>
						<Tooltip content="Xóa sản phẩm" color="danger">
							<Button
								isIconOnly
								className="mt-2"
								color="danger"
								variant="flat"
								size="sm"
								onClick={() => handleRemoveItem(cart._id)}
							>
								<i className="bx bx-trash bx-flip-horizontal "></i>
							</Button>
						</Tooltip>
					</div>
					<p className="flex-grow text-[16px] font-semibold">{cart.name}</p>
					<div className="flex flex-col items-end">
						<p className="text-[18px] font-semibold ">{formatMoney(cart.price)} ₫</p>
						<p className="mb-4">
							<del className="text-[14px] font-normal">
								{formatMoney(cart.price + 1999)}₫
							</del>
						</p>

						<div className=" h-8 flex flex-nowrap ">
							<Button
								className="w-8 h-full  font-medium"
								radius="none"
								color="danger"
								variant="flat"
								isIconOnly
								onClick={() => handleDecreaseQuantity(cart._id)}
							>
								<i className="fa-solid fa-minus"></i>
							</Button>
							<input
								type="text"
								className="max-w-[50px] outline-none border-[1px] text-center h-full"
								readOnly
								value={cart.quantity}
							/>
							<Button
								className="w-8 font-medium h-full"
								color="primary"
								variant="flat"
								isIconOnly
								radius="none"
								onClick={() => handleIncreaseQuantity(cart._id)}
							>
								<i className="fa-solid fa-plus"></i>
							</Button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
