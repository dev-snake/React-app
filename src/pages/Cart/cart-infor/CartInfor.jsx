import { useAddressData } from '../../../Hooks/useAddress';
import { Input, Select, SelectItem, Checkbox, Button } from '@nextui-org/react';
import ButtonPayment from '../ButtonPayment/ButtonPayment';
import SpinnerUi from '../../../components/common/Spinner';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';
import { accessToken } from '../../../utils/saveStatus';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'sonner';
function CartInfor() {
	const { getTotalPrice } = useCart();
	const navigate = useNavigate();
	const [selectedSex, setSelectedSex] = useState('Anh');
	const [inforOrder, setInforOrder] = useState({
		sex: 'Anh',
		fullname: '',
		phonenumber: '',
		province: '',
		district: '',
		ward: '',
		specificAddress: '',
		voucher: JSON.parse(localStorage.getItem('voucher') || '[]')[0]?.discount || 0,
		voucherId: JSON.parse(localStorage.getItem('voucher') || '[]')[0]?._id || '',
		methodPayment: 'Thanh toán khi nhận hàng (COD)',
		total: getTotalPrice(),
		products: JSON.parse(localStorage.getItem('cartItems') || '[]')
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		const { fullname, phonenumber, province, district, ward, specificAddress } = inforOrder;
		if ([fullname, phonenumber, province, district, ward, specificAddress].includes('')) {
			toast.error('Vui lòng điền đầy đủ thông tin');
			return;
		}
		localStorage.setItem('inforOrder', JSON.stringify(inforOrder));
		navigate('/cart/payment');
	};
	useEffect(() => {
		if (accessToken.token) {
			const decodedToken = jwtDecode(accessToken.token);
			setInforOrder({
				...inforOrder,
				fullname: decodedToken.fullname,
				phonenumber: decodedToken.phonenumber
			});
		}
	}, []);
	return (
		<div className="p-3">
			<h2 className="font-semibold text-[1rem]">Thông tin khách mua hàng</h2>
			<form action="" onSubmit={handleSubmit}>
				<div className="flex gap-10 mt-2">
					<div>
						<Checkbox
							isSelected={selectedSex === 'Anh'}
							onChange={() => {
								setSelectedSex('Anh');
								setInforOrder({ ...inforOrder, sex: 'Anh' });
							}}
						>
							Anh
						</Checkbox>
					</div>
					<div>
						<Checkbox
							isSelected={selectedSex === 'Chị'}
							onChange={() => {
								setSelectedSex('Chị');
								setInforOrder({ ...inforOrder, sex: 'Chị' });
							}}
						>
							Chị
						</Checkbox>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-10 mt-4">
					<div className="relative">
						<Input
							type="text"
							label="Họ và tên"
							value={inforOrder.fullname}
							size="md"
							onChange={(e) =>
								setInforOrder({ ...inforOrder, fullname: e.target.value })
							}
							isRequired
						/>
					</div>
					<div className="relative">
						<Input
							type="text"
							value={inforOrder.phonenumber}
							label="Số điện thoại"
							size="md"
							onChange={(e) =>
								setInforOrder({ ...inforOrder, phonenumber: e.target.value })
							}
							isRequired
						/>
					</div>
				</div>
				<div className="mt-4">
					<h2 className="font-semibold text-[1rem]">Chọn cách nhận hàng</h2>
					<div className="mt-2">
						<Checkbox defaultSelected isDisabled>
							Giao hàng tận nơi
						</Checkbox>
					</div>
					<OrderAddress inforOrder={inforOrder} setInforOrder={setInforOrder} />
					<div className="mt-4">
						<h2 className="font-semibold text-[1rem]">Dịch vụ giao hàng</h2>
						<div className="mt-2 flex justify-between w-full">
							<div>
								<Checkbox isDisabled defaultSelected>
									Giao hàng tiêu chuẩn
								</Checkbox>
							</div>
							<span>40.000 vnđ</span>
						</div>
					</div>
					<ButtonPayment />
					<div className="mt-2">
						<Link to={'/cart/payment'}>
							<Button
								className="block w-full"
								radius="sm"
								size="lg"
								color="primary"
								type="submit"
							>
								Đặt hàng ngay
							</Button>
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
}

function OrderAddress({ inforOrder, setInforOrder }) {
	const { data, isLoading, error, fetchDistricts, fetchWards } = useAddressData();
	const handleProvinceChange = (event) => {
		const [provinceId, province] = event.target.value.split('_');
		setInforOrder({ ...inforOrder, province });
		fetchDistricts(provinceId);
	};
	const handleDistrictChange = (event) => {
		const [districtId, district] = event.target.value.split('_');
		setInforOrder({ ...inforOrder, district });
		fetchWards(districtId);
	};
	const handleWard = (event) => {
		setInforOrder({ ...inforOrder, ward: event.target.value });
	};
	if (isLoading) {
		return <SpinnerUi />;
	}
	if (error) {
		return <div>Error : {error}</div>;
	}

	return (
		<div className="grid sm:grid-cols-2  gap-x-8 gap-y-4 mt-4 rounded-md">
			<Select
				isRequired
				label="Chọn tỉnh,Thành phố"
				items={data.provinces}
				onChange={handleProvinceChange}
				size="md"
			>
				{data.provinces.map((province, index) => (
					<SelectItem key={`${province.province_id}_${province.province_name}`}>
						{province.province_name}
					</SelectItem>
				))}
			</Select>
			<Select isRequired label="Chọn Quận,Huyện" size="md" onChange={handleDistrictChange}>
				{data.districts.map((district) => (
					<SelectItem key={`${district.district_id}_${district.district_name}`}>
						{district.district_name}
					</SelectItem>
				))}
			</Select>
			<Select isRequired label="Chọn Phường,Xã" size="md" onChange={handleWard}>
				{data.wards.map((ward) => (
					<SelectItem key={ward.ward_name}>{ward.ward_name}</SelectItem>
				))}
			</Select>
			<div>
				<Input
					isRequired
					type="text"
					size="md"
					label="Nhập địa chỉ cụ thể "
					onChange={(e) =>
						setInforOrder({ ...inforOrder, specificAddress: e.target.value })
					}
				/>
			</div>
		</div>
	);
}
export default CartInfor;
