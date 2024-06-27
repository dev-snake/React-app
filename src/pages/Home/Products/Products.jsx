import { useFetch } from '../../../Hooks/useFetch';
import { API } from '../../../service/api/API';
import { Link } from 'react-router-dom';
import { formatMoney } from '../../../utils/formatNumber';
import { Card, Image, CardHeader, Button, Chip } from '@nextui-org/react';
export default function Products() {
	const { data, isLoading, error } = useFetch(`${API.PRODUCTS}`);

	return (
		<section className="max-w-[1300px] mx-auto mt-6 w-full">
			<p className="font-semibold uppercase text-center text-2xl">sản phẩm nổi bật</p>

			<div
				className="grid grid-cols-5 gap-4 mt-4 max-sm:p-4 transition-all
			 max-xl:p-5 max-lg:grid-cols-4 max-[855px]:grid-cols-3 max-sm:grid-cols-2 max-[520px]:grid-cols-1 "
			>
				{data.map((product) => (
					<Card
						className="w-full bg-white rounded-2xl p-2 transition"
						key={product._id}
						isPressable
					>
						<div className="relative p-2 w-full">
							<Chip
								className="left-0 rounded-md font-medium absolute z-[100]"
								color="danger"
								variant="shadow"
							>
								{product.sale}%
							</Chip>
							<div className="flex justify-center">
								<Image
									src={product.image}
									alt="ảnh lỗi"
									className="h-[250px] mx-auto hover:scale-90 transition-all bg-transparent block text-center"
									loading="lazy"
								/>
							</div>
							<Link to={`/${product._id}`}>
								<p className="font-medium text-[1rem]">{product.name}</p>
							</Link>
							<p className="font-medium text-[1rem]">
								Giá:
								<span className="text-red-500 font-semibold">
									{formatMoney(product.price)} VNĐ
								</span>
							</p>

							<span className="text-[#ff8a00] font-semibold">
								0.0 <i className="bx bxs-star text-[#ff8a00]"></i> (đánh giá)
							</span>
						</div>
					</Card>
				))}
			</div>

			<div className="w-full flex justify-center mt-8 mb-8">
				<a className="px-4 py-2 font-semibold border-2 border-slate-300 rounded-xl outline outline-2 outline-offset-2 hover:outline-sky-500 transition-all outline-none">
					Xem tất cả sản phẩm
				</a>
			</div>
		</section>
	);
}
