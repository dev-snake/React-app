import ImageTest from '../../../assets/images/m1wden.png';
export default function CartItem() {
	return (
		<div className="p-1 mt-8 mb-4 mx-2 grid gap-3">
			<div className="flex justify-between gap-2">
				<div className="text-center">
					<img
						src={ImageTest}
						alt=""
						className="w-[88px] h-[88px] border-[1px] p-2 rounded-sm"
					/>
					<button className="text-[#6D6E72] text-[14px] p-1">
						<i className="bx bx-trash bx-flip-horizontal  mr-1"></i>
						Xóa
					</button>
				</div>
				<p className="flex-grow text-[16px] font-semibold">
					Tấm lót chuột Razer Firefly V2 Pro
				</p>
				<div className="flex flex-col items-end">
					<p className="text-[18px] font-semibold ">2.990.000 ₫</p>
					<p className="mb-4">
						<del className="text-[14px] font-normal">2.990.000₫</del>
					</p>

					<div className=" h-8 flex flex-nowrap ">
						<button className="w-8 h-full border-r-[1px] border-y-[1px] border-l-[1px] rounded-s-sm font-medium ">
							-
						</button>
						<input
							type="text"
							className="max-w-[50px] outline-none border-[1px] text-center h-full"
							readOnly
							value={'1'}
						/>
						<button className="w-8 border-l-[1px] border-y-[1px] border-r-[1px] rounded-e-sm h-full font-medium">
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
