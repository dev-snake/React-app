export default function UserInfor() {
	return (
		<>
			<div className="">
				<p className="text-xl font-semibold">Thông tin tài khoản</p>
				<div className="p-2">
					<form className="max-w-[500px] mx-auto">
						<div className="flex items-center gap-10 justify-between mb-2">
							<label htmlFor="" className="text-[1rem] font-medium max-md:hidden">
								Họ :
							</label>
							<input
								type="text"
								className="border-2 p-2 rounded-xl md:max-w-[350px] w-full"
							/>
						</div>
						<div className="flex items-center gap-10 justify-between">
							<label htmlFor="" className="text-[1rem] font-medium max-md:hidden">
								Tên :
							</label>
							<input
								type="text"
								className="border-2 p-2 rounded-xl md:max-w-[350px] w-full"
							/>
						</div>
						<div className="flex gap-10 mt-2">
							<label htmlFor="" className="text-[1rem] font-medium max-md:hidden">
								Giới tính :
							</label>
							<div className="flex gap-10 ml-10">
								<div className="flex items-center gap-2">
									<label>Nam</label>
								</div>
								<div className="flex items-center gap-2">
									<label>Nữ</label>
								</div>
							</div>
						</div>
						<div className="mt-2 flex gap-10 items-center justify-between">
							<label className="text-[1rem] font-medium max-md:hidden">
								Số điện thoại
							</label>
							<input
								type="text"
								className="border-2 p-2 rounded-xl md:max-w-[350px] w-full"
							/>
						</div>
						<div className="mt-2 flex gap-10 items-center justify-between">
							<label className="text-[1rem] font-medium max-md:hidden">Email :</label>
							<input
								type="email"
								className="border-2 p-2 rounded-xl md:max-w-[350px] w-full"
							/>
						</div>
						<div className="mt-2 flex gap-10 items-center justify-between">
							<label className="text-[1rem] font-medium max-md:hidden">
								Địa chỉ :
							</label>
							<input
								type="email"
								className="border-2 p-2 rounded-xl md:max-w-[350px] w-full"
							/>
						</div>
						<div className="mt-2 flex gap-10 items-center justify-between">
							<label className="text-[1rem] font-medium max-md:hidden">
								Ngày sinh
							</label>
							<div className="md:w-[70%] flex justify-between w-full gap-2">
								<select
									id=""
									className="border-2 p-2 rounded-xl outline-none w-full"
								>
									<option value="">Ngày</option>
									<option></option>
								</select>
								<select
									id=""
									className="border-2 p-2 rounded-xl outline-none w-full"
								>
									<option value="">Tháng</option>
									<option></option>
								</select>
								<select
									id=""
									className="border-2 p-2 rounded-xl outline-none w-full"
								>
									<option value="">Năm</option>
									<option></option>
								</select>
							</div>
						</div>
						<div className="md:ml-2 w-full">
							<button
								className="bg-blue-400 p-2 rounded-xl text-white font-semibold md:w-52 mt-2 md:ml-36 cursor-pointer w-full"
								type="submit"
							>
								Lưu thay đổi
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
