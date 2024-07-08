import { API } from '../../service/api/API';
import { useFetch } from '../../Hooks/useFetch';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import formatDate from '../../utils/formatDate';
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
export default function VoucherManagement() {
	const { data, isLoading } = useFetch(API.VOUCHERS);
	const [vouchers, setVouchers] = useState([]);
	useEffect(() => {
		if (isLoading) {
			toast.loading('Đang tải dữ liệu ...');
		} else {
			toast.dismiss();
			setVouchers(data);
		}
	}, [isLoading]);
	return (
		<div className="p-3">
			<div className="flex justify-between items-center">
				<h1 className="font-semibold text-2xl">Quản lí vouchers</h1>
				<Button color="primary">
					<Link to="create">Tạo mã</Link>
				</Button>
			</div>
			<div className="mt-8 grid grid-cols-5 gap-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
				{vouchers.map((voucher, index) => (
					<div
						className="h-40 bg-white shadow-lg relative  flex justify-start gap-4"
						key={index}
					>
						<div className="bg-[#4c79e2] text-center text-white flex items-center justify-center w-10">
							<span className="transform -rotate-90 text-[1rem]">
								{voucher.voucher_code}
							</span>
						</div>
						<div className="w-full ">
							<div className="flex">
								<div>
									<p className="text-lg font-medium">{voucher.voucher_name}</p>
									<p className="text-sm">
										HSD: {formatDate(voucher.expiry_date)}
									</p>
								</div>
								<div className="absolute right-0 p-2 bg-red-500 cursor-pointer">
									<i className="fa-solid fa-xmark text-white "></i>
								</div>
							</div>
							<div className="border-[1px] border-dotted mt-2"></div>
							<div className="text-xs mt-2">{voucher.description}</div>
							<div className="text-xs mt-2">Số lượng dùng : {voucher.max_uses}</div>
							<div className="text-xs mt-2">
								Số lượng đã dùng : {voucher.usage_count}
							</div>
						</div>
					</div>
				))}{' '}
			</div>
		</div>
	);
}
