import { useFetch } from '../../../Hooks/useFetch';
import { API } from '../../../service/api/API';
import { useEffect } from 'react';
import axios from 'axios';
export default function Products() {
	// const { data, isLoading, error } = useFetch(`${API.PRODUCTS}`);
	useEffect(() => {
		axios
			.get('http://localhost:3000')
			.then(function (response) {
				// handle success
				console.log(response);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	}, []);
	return (
		<>
			<section className="max-w-[1300px] mx-auto mt-6 w-full">
				<p className="font-semibold uppercase text-center text-2xl">sản phẩm nổi bật</p>

				<div className="grid grid-cols-layout-home gap-4 mt-4 max-sm:p-4 transition-all max-xl:p-5">
					<div className="w-full bg-white rounded-2xl p-2 transition">
						<div className="relative p-2">
							<span className="bg-[#FE3A30] text-white px-4 py-1 z-10 absolute tracking-[1.5px] rounded-2xl top-3">
								35%
							</span>
							<img
								alt="ảnh lỗi"
								className="h-[250px] mx-auto hover:scale-90 transition-all"
							/>
							<a>
								<p className="font-medium text-[1rem]">Tên sản phẩm :</p>
							</a>
							<p className="font-medium text-[1rem]">
								Giá :<span className="text-red-500 font-semibold"> VNĐ</span>
							</p>

							<span className="text-[#ff8a00] font-semibold">
								0.0 <i className="bx bxs-star text-[#ff8a00]"></i> (đánh giá)
							</span>
						</div>
					</div>
				</div>

				<div className="w-full flex justify-center mt-8 mb-8">
					<a className="px-4 py-2 font-semibold border-2 border-slate-300 rounded-xl outline outline-2 outline-offset-2 hover:outline-sky-500 transition-all outline-none">
						Xem tất cả sản phẩm
					</a>
				</div>
			</section>
		</>
	);
}
