import { useAddressData } from '../../../Hooks/useAddress';
import { Input, Select, SelectItem, Checkbox } from '@nextui-org/react';
import ButtonPayment from '../ButtonPayment/ButtonPayment';
import SpinnerUi from '../../../components/common/Spinner';
function CartInfor() {
	return (
		<div className="p-3">
			<h2 className="font-semibold text-[1rem]">Thông tin khách mua hàng</h2>
			<form action="">
				<div className="flex gap-10 mt-2">
					<div>
						<Checkbox defaultSelected>Anh</Checkbox>
					</div>
					<div>
						<Checkbox>Chị </Checkbox>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-10 mt-4">
					<div className="relative">
						<Input type="text" label="Họ và tên" size="md" isRequired />
					</div>
					<div className="relative">
						<Input type="text" label="Số điện thoại" size="md" isRequired />
					</div>
				</div>
				<div className="mt-4">
					<h2 className="font-semibold text-[1rem]">Chọn cách nhận hàng</h2>
					<div className="mt-2">
						<Checkbox defaultSelected isDisabled>
							Giao hàng tận nơi
						</Checkbox>
					</div>
					<OrderAddress />
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
				</div>
			</form>
		</div>
	);
}

function OrderAddress() {
	const { data, isLoading, error, fetchDistricts, fetchWards } = useAddressData();
	const handleProvinceChange = (event) => {
		const provinceId = event.target.value;
		console.log(provinceId);
		fetchDistricts(provinceId);
	};
	const handleDistrictChange = (event) => {
		const districtId = event.target.value;
		fetchWards(districtId);
	};
	if (isLoading) {
		return <SpinnerUi />;
	}
	if (error) {
		console.log(error);
		return <div>Error : {error}</div>;
	}

	return (
		<div className="grid sm:grid-cols-2  gap-x-8 gap-y-4 mt-4 rounded-md">
			<Select items={data.provinces} onChange={handleProvinceChange} size="lg">
				{data.provinces.map((province, index) => (
					<SelectItem key={province.province_id}>{province.province_name}</SelectItem>
				))}
			</Select>
			<Select onChange={handleDistrictChange} size="lg">
				{data.districts.map((district) => (
					<SelectItem key={district.district_id}>{district.district_name}</SelectItem>
				))}
			</Select>
			<Select size="lg">
				{data.wards.map((ward) => (
					<SelectItem key={ward.ward_id}>{ward.ward_name}</SelectItem>
				))}
			</Select>
			<div>
				<Input type="text" size="sm" label="Nhập địa chỉ cụ thể " />
			</div>
		</div>
	);
}
export default CartInfor;
