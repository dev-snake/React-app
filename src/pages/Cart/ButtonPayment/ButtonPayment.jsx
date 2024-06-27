import { Button } from '@nextui-org/react';
function ButtonPayment() {
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
					<strong className="text-[20px]">40.000₫</strong>
				</div>
				<div className="mt-2">
					<Button className=" h-16 bg-blue-500 text-white w-full py-4 rounded-[4px] text-[18px]  tracking-[1.6px]">
						Đặt hàng ngay
					</Button>
				</div>
			</div>
		</>
	);
}
export default ButtonPayment;
