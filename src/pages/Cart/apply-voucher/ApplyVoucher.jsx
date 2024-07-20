import { useState, Fragment, useEffect } from 'react';
import ImageSale from '../../../assets/images/saleVoucher.png';
import { Button, Input, Chip } from '@nextui-org/react';
import { API } from '../../../service/api/API';
import { useFetch } from '../../../Hooks/useFetch';
import SpinnerUi from '../../../components/common/Spinner';
import formatDate from '../../../utils/formatDate';
import { formatMoney } from '../../../utils/formatNumber';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
export default function ApplyVoucher({ totalPrice, cartItems }) {
	const { data, isLoading } = useFetch(`${API.VOUCHERS}`);
	const [isShow, setIsShow] = useState(false);
	const [voucherApplied, setVoucherApplied] = useState([]);
	const voucher = JSON.parse(localStorage.getItem('voucher') || '[]');
	const handleClickApply = (voucherId) => {
		if (cartItems.length <= 0) {
			localStorage.removeItem('voucher');
			setVoucherApplied([]);
			toast.warning('Vui lòng thêm sản phẩm vào giỏ hàng');
			return;
		}
		const setVoucher = data.find((voucher) => voucher._id === voucherId);
		const CURRENT_DATE = new Date().toISOString();
		const EXPIRY_DATE = setVoucher.expiry_date;
		const APPLICABLE_AMOUNT = setVoucher.applicable_amount;
		const TOTAL_PRICE = +totalPrice.split('.').join('');
		if (setVoucher.usage_count >= setVoucher.max_usage) {
			toast.error('Mã giảm giá đã hết lượt sử dụng');
			return;
		}
		if (TOTAL_PRICE < APPLICABLE_AMOUNT) {
			toast.error('Đơn hàng không đủ điều kiện sử dụng Voucher');
			return;
		}
		if (CURRENT_DATE > EXPIRY_DATE) {
			toast.error('Mã giảm giá đã hết hạn');
			return;
		}
		localStorage.setItem('voucher', JSON.stringify([setVoucher]));
		setVoucherApplied([setVoucher]);
	};
	const handleClickShow = () => {
		setIsShow(!isShow);
	};
	const removeVoucher = () => {
		localStorage.removeItem('voucher');
		setVoucherApplied([]);
	};
	isLoading && <SpinnerUi />;
	return (
		<>
			<div>
				<div className="text-blue-500 inline-block p-2 border-[1px] rounded-md cursor-pointer">
					<i className="fa-solid fa-ticket mr-2 "></i>
					<span className="font-medium mr-2 select-none" onClick={handleClickShow}>
						Sử dụng mã giảm giá
					</span>
					<div
						className={`inline-block transition-transform duration-300 transform ${
							isShow ? 'rotate-180' : 'rotate-0'
						}`}
					>
						<i className="fa-solid fa-angle-down w-3" onClick={handleClickShow}></i>
					</div>
				</div>
				<div className="mt-4">
					{/* Form Enter Voucher */}
					<div
						className={`transition-all duration-300 ease-in-out ${
							isShow
								? 'max-h-screen opacity-100'
								: 'max-h-0 opacity-0 overflow-hidden'
						}`}
					>
						<FormVoucher
							data={data}
							applyVoucher={handleClickApply}
							vouchers={voucherApplied}
						/>
					</div>
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
											endContent={
												<i
													className="fa-regular fa-circle-xmark"
													onClick={removeVoucher}
												></i>
											}
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
								<strong className="text-[20px]">{totalPrice}₫</strong>
							</div>
							<div className="mt-2">
								<Button
									className="block w-full"
									radius="sm"
									size="lg"
									color="primary"
								>
									<Link to="/cart/cart-infor-order-box">Đặt hàng ngay </Link>
								</Button>
							</div>
						</div>
					</>
				</div>
			</div>
		</>
	);
}
function FormVoucher({ data, applyVoucher }) {
	const [voucherInput, setVoucherInput] = useState('');
	const handleVoucherInput = () => {
		if (voucherInput === '') {
			toast.error('Vui lòng nhập mã giảm giá');
			return;
		}
		const voucher = data.find((voucher) => voucher.voucher_code === voucherInput);
		if (!voucher) {
			toast.error('Mã giảm giá không tồn tại');
			return;
		}
		applyVoucher(voucher._id);
	};
	return (
		<Fragment>
			<div className="bg-slate-50 p-2 flex gap-2 rounded-md items-center">
				<Input
					type="text"
					className="grow-[2] outline-none p-2"
					placeholder="Nhập mã giảm giá/Phiếu mua hàng"
					onChange={(e) => setVoucherInput(e.target.value)}
				/>
				<Button color="primary" onClick={handleVoucherInput}>
					Áp dụng
				</Button>
			</div>
			{/* <div className="mt-2 grid gap-2">
				{data?.map((voucher, index) => (
					<div className="border-[1px] p-1 rounded-lg flex gap-2" key={index}>
						<div>
							<img src={ImageSale} alt="" className="w-[72px] h-[72px]" />
						</div>
						<div className="grow-[2]">
							<div>
								<h3 className="text-[13px] font-semibold">
									{voucher.voucher_name}
								</h3>
								<p className="text-[11px]">{voucher.description}</p>
							</div>
							<div className="flex justify-between">
								<div>
									<p className="text-[11px]">
										Mã: <strong>{voucher.voucher_code}</strong>
									</p>
									<p className="text-[10px]">
										HSD: <strong>{formatDate(voucher.expiry_date)}</strong>
									</p>
								</div>
								<div className="self-end">
									<Button
										radius="md"
										size="sm"
										color="primary"
										variant="shadow"
										onClick={() => applyVoucher(voucher._id)}
									>
										Áp mã
									</Button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div> */}
		</Fragment>
	);
}
