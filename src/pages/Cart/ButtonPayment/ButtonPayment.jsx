import { Button, Chip } from '@nextui-org/react';
import { formatMoney } from '../../../utils/formatNumber';
import useCart from '../../../Hooks/useCart';
function ButtonPayment({ totalPrice }) {
	const { getTotalPrice } = useCart();
	const voucher = JSON.parse(localStorage.getItem('voucher') || '[]');
	return (
		<>
			<hr className="mt-4" />
			<div className="mt-4">
				{voucher.length > 0 && (
					<div className="flex justify-between mb-2">
						<span className="text-[1rem] font-semibold">
							Mã giảm giá :
							<Chip
								color="primary"
								radius="sm	"
								className="p-1 ml-2 cursor-pointer"
								size="sm"
								variant="shadow"
								endContent={<i className="fa-regular fa-circle-xmark"></i>}
							>
								{voucher[0].voucher_code}
							</Chip>
						</span>
						<strong className="text-[14px]">
							- {formatMoney(voucher[0].discount)} đ
						</strong>
					</div>
				)}
				<div className="flex justify-between">
					<span className="text-[1rem] font-semibold">Phí vận chuyển :</span>
					<strong className="text-[14px]">40.000₫</strong>
				</div>
				<div className="flex justify-between mt-2">
					<span className="text-[18px] font-semibold">Tổng tiền :</span>
					<strong className="text-[20px]">
						{totalPrice || formatMoney(getTotalPrice())} ₫
					</strong>
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
