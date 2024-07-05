import { Button, Image, Tooltip, Input } from '@nextui-org/react';
import useCart from '../../../Hooks/useCart';
import { formatMoney } from '../../../utils/formatNumber';
import ApplyVoucher from '../apply-voucher/ApplyVoucher';

export default function CartItem() {
	const { cartItems, increaseQuantity, decreaseQuantity, removeItem, getTotalPrice } = useCart();
	const handleIncreaseQuantity = (productId, colorCode) => increaseQuantity(productId, colorCode);
	const handleDecreaseQuantity = (productId, colorCode) => decreaseQuantity(productId, colorCode);
	const handleRemoveItem = (productId, colorCode) => removeItem(productId, colorCode);
	return (
		<>
			<div className="p-1 mt-8 mb-4 mx-2 grid gap-3">
				{cartItems.map((cart, index) => {
					return (
						<div key={index} className="flex flex-col gap-3">
							{cart.color.map((item, i) => (
								<div className="flex justify-between gap-2" key={i}>
									<div className="text-center">
										<Image
											src={item.image}
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
												onClick={() =>
													handleRemoveItem(cart._id, item.code)
												}
											>
												<i className="bx bx-trash bx-flip-horizontal "></i>
											</Button>
										</Tooltip>
									</div>
									<div className="flex-grow text-[16px] ">
										<p className="font-semibold">{cart.name}</p>
										<p className="text-slate-400 mt-2">{item.color}</p>
										<span></span>
									</div>
									<div className="flex flex-col items-end">
										<p className="text-[18px] font-semibold ">
											{formatMoney(item.price)} ₫
										</p>
										<p className="mb-4">
											<del className="text-[14px] font-normal">
												{formatMoney(item.price + 1999)}₫
											</del>
										</p>

										<div className=" h-8 flex flex-nowrap ">
											<Button
												className="w-8 h-full  font-medium"
												radius="none"
												color="danger"
												variant="flat"
												isIconOnly
												onClick={() =>
													handleDecreaseQuantity(cart._id, item.code)
												}
											>
												<i className="fa-solid fa-minus"></i>
											</Button>
											<input
												type="text"
												className="max-w-[50px] outline-none border-[1px] text-center h-full"
												readOnly
												value={item.quantityBuyed}
											/>
											<Button
												className="w-8 font-medium h-full"
												color="primary"
												variant="flat"
												isIconOnly
												radius="none"
												onClick={() =>
													handleIncreaseQuantity(cart._id, item.code)
												}
											>
												<i className="fa-solid fa-plus"></i>
											</Button>
										</div>
									</div>
								</div>
							))}
						</div>
					);
				})}
			</div>
			<div className="p-3">
				<ApplyVoucher totalPrice={formatMoney(getTotalPrice())} cartItems={cartItems} />
			</div>
		</>
	);
}
