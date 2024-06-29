import { Button } from '@nextui-org/react';
import useCart from '../../../Hooks/useCart';
import { formatMoney } from '../../../utils/formatNumber';
function ButtonPayment() {
	const { getTotalPrice } = useCart();
	return (
		<>
			<hr className="mt-4" />
			<div className="mt-4">
				<div className="flex justify-between">
					<span className="text-[1rem] font-semibold">Phí vận chuyển :</span>
					<strong className="text-[14px]">40.000₫</strong>
				</div>
				<div className="flex justify-between mt-2">
					<span className="text-[18px] font-semibold">Tổng tiền :</span>
					<strong className="text-[20px]">{formatMoney(getTotalPrice())} ₫</strong>
				</div>
				<div className="mt-2">
					<Button className="block w-full" radius="sm" size="lg" color="primary">
						Đặt hàng ngay
					</Button>
				</div>
			</div>
		</>
	);
}
export default ButtonPayment;
