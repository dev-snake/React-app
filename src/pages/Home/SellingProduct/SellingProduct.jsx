import { Card, Image, Chip, Skeleton } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { formatMoney } from '../../../utils/formatNumber';
import { API } from '../../../service/api/API';
import { useState, useEffect } from 'react';
import { useFetch } from '../../../Hooks/useFetch';
import { toast } from 'sonner';
export default function SellingProduct() {
	const { data, isLoading } = useFetch(API.PRODUCTS);
	const [sellingProduct, setSellingProduct] = useState([]);
	useEffect(() => {
		if (isLoading) {
			toast.loading('Đang tải dữ liệu ...');
		} else {
			toast.dismiss();
			const filter = data.filter((product) =>
				product.variant.reduce((acc, curr) => acc + curr.quantity_sold >= 5, 0)
			);
			console.log(filter);
			setSellingProduct(filter);
		}
	}, [isLoading]);
	return (
		<div className="p-3 mt-4">
			<h1 className="text-center text-2xl font-semibold">Sản phẩm bán chạy</h1>
			<div
				className="grid grid-cols-5 gap-4 mt-4 max-sm:p-4 transition-all
         max-xl:p-5 max-lg:grid-cols-4 max-[855px]:grid-cols-3 max-sm:grid-cols-2 max-[520px]:grid-cols-1 "
			>
				{sellingProduct.map((product) => (
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
								{product.discount}%
							</Chip>
							<div className="flex justify-center">
								<Image
									src={product.image}
									alt="ảnh lỗi"
									radius="sm"
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
		</div>
	);
}
