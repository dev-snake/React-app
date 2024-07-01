import { useState, Fragment, useEffect } from 'react';
import ImageSale from '../../../assets/images/saleVoucher.png';
import ButtonPayment from '../ButtonPayment/ButtonPayment';
import { Button, Input } from '@nextui-org/react';
import { API } from '../../../service/api/API';
import { useFetch } from '../../../Hooks/useFetch';
import SpinnerUi from '../../../components/common/Spinner';
import formatDate from '../../../utils/formatDate';
import useCart from '../../../Hooks/useCart';
export default function ApplyVoucher() {
	const { data, isLoading } = useFetch(`${API.VOUCHERS}`);
	const [isShow, setIsShow] = useState(false);
	const [voucherApplied, setVoucherApplied] = useState([]);
	const voucherLocalstorage = localStorage.getItem('voucher');
	const handleClickApply = (voucherId) => {
		const voucher = data.find((voucher) => voucher._id === voucherId);
		localStorage.setItem('voucher', JSON.stringify([voucher]));
		setVoucherApplied([voucher]);
	};
	useEffect(() => {
		// console.log(voucherLocalstorage);
	}, [voucherApplied]);
	const handleClickShow = () => {
		setIsShow(!isShow);
	};
	if (isLoading) {
		return <SpinnerUi />;
	}
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
						<FormVoucher data={data} applyVoucher={handleClickApply} />
					</div>
				</div>
			</div>
		</>
	);
}
function FormVoucher({ data, applyVoucher }) {
	return (
		<Fragment>
			<div className="bg-slate-50 p-2 flex gap-2 rounded-md items-center">
				<Input
					type="text"
					className="grow-[2] outline-none p-2"
					placeholder="Nhập mã giảm giá/Phiếu mua hàng"
				/>
				<Button color="primary">Áp dụng</Button>
			</div>
			<div className="mt-2 grid gap-2">
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
			</div>
		</Fragment>
	);
}
