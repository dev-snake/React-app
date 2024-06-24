import { useAddressData } from '../../../Hooks/useAddress';
function CartInfor() {
	return (
		<div className="p-3">
			<h2 className="font-semibold text-[1rem]">Thông tin khách mua hàng</h2>
			<form action="">
				<div className="flex gap-10 mt-2">
					<div>
						<input type="radio" name="sex" value="1" className="mr-2" />
						<label htmlFor="">Anh</label>
					</div>
					<div>
						<input type="radio" name="sex" value="2" className="mr-2" />
						<label htmlFor="">Chị</label>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-10 mt-4">
					<div className="relative">
						<input
							type="text"
							placeholder=" "
							className="outline-none border-[1px] p-2 w-full transition-all rounded-md form-input focus:border-green-300"
						/>
						<label className="absolute left-2 translate-y-2  transform   select-none pointer-events-none transition-all form-field">
							Nhập họ tên
						</label>
					</div>
					<div className="relative">
						<input
							type="text"
							placeholder=" "
							className="outline-none border-[1px] p-2 w-full transition-all rounded-md form-input focus:border-green-300"
						/>
						<label className="absolute left-2 translate-y-2  transform   select-none pointer-events-none transition-all form-field">
							Số điện thoại
						</label>
					</div>
				</div>
				<div className="mt-4">
					<h2 className="font-semibold text-[1rem]">Chọn cách nhận hàng</h2>
					<div className="mt-2">
						<input type="radio" className="mr-2" defaultChecked />
						<span>Giao hàng tận nơi</span>
					</div>
					<OrderAddress />
					<div className="mt-4">
						<h2 className="font-semibold text-[1rem]">Dịch vụ giao hàng</h2>
						<div className="mt-2 flex justify-between w-full">
							<div>
								<input type="radio" className="mr-2" defaultChecked />
								<span>Giao hàng Tiêu chuẩn</span>
							</div>
							<span>40.000 vnđ</span>
						</div>
					</div>
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
							<button className="bg-blue-500 text-white w-full py-4 rounded-[4px] text-[18px] font-semibold tracking-[1.6px]">
								Đặt hàng ngay
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

function OrderAddress() {
	const { data, isLoading, error, fetchDistricts, fetchWards } = useAddressData();
	const handleProvinceChange = (event) => {
		const provinceId = event.target.value;
		fetchDistricts(provinceId);
	};
	const handleDistrictChange = (event) => {
		const districtId = event.target.value;
		fetchWards(districtId);
	};
	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		console.log(error);
		return <div>Error : {error}</div>;
	}

	return (
		<div className="grid sm:grid-cols-2 p-4 bg-slate-200 gap-x-8 gap-y-4 mt-4 rounded-md">
			<select
				className="border-[1px] p-2 outline-none rounded-md  "
				onChange={handleProvinceChange}
			>
				<option value="">Chọn tỉnh và thành phố</option>
				{data.provinces.map((province) => (
					<option value={province.province_id} key={province.province_id}>
						{province.province_name}
					</option>
				))}
			</select>
			<select
				className="border-[1px] p-2 outline-none rounded-md"
				onChange={handleDistrictChange}
			>
				<option value="">Chọn Quận, huyện</option>
				{data.districts.map((district) => (
					<option value={district.district_id} key={district.district_id}>
						{district.district_name}
					</option>
				))}
			</select>
			<select className="border-[1px] p-2 outline-none rounded-md">
				<option value="">Chọn Phường, Xã</option>
				{data.wards.map((ward) => (
					<option value={ward.ward_id} key={ward.ward_id}>
						{ward.ward_name}
					</option>
				))}
			</select>
			<div>
				<input
					type="text"
					placeholder="Nhập địa chỉ cụ thể"
					className="outline-none border-[1px] p-2 w-full transition-all rounded-md focus:border-green-300"
				/>
			</div>
		</div>
	);
}
export default CartInfor;
