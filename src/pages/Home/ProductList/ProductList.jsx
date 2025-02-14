import { useFetch } from '../../../Hooks/useFetch';
import { useEffect, useState } from 'react';
import { API } from '../../../service/api/API';
import { Link } from 'react-router-dom';
import { formatMoney } from '../../../utils/formatNumber';
import { Card, Image, Chip, Skeleton } from '@nextui-org/react';
import { useParams, useSearchParams } from 'react-router-dom';
export default function ProductList() {
	const { data, isLoading } = useFetch(`${API.PRODUCTS}`);
	const { categoryId } = useParams();
	const [searchParams] = useSearchParams();
	const [products, setProducts] = useState([]);
	useEffect(() => {
		if (!isLoading && data.length > 0) {
			setProducts(data);
		}
		if (categoryId && searchParams.get('sort_by') === null) {
			const filter = data.filter((product) => product.categoryId === +categoryId);
			setProducts(filter);
		}
		if (searchParams.get('sort_by') !== null) {
			const sort_type = searchParams.get('sort_by');
			if (sort_type === 'asc') {
				const filter = data.sort((a, b) => a.price - b.price);
				setProducts(filter);
			} else {
				const filter = data.sort((a, b) => b.price - a.price);
				setProducts(filter);
			}
		}
	}, [categoryId, isLoading, searchParams]);
	if (isLoading) {
		return (
			<div
				className="grid grid-cols-5 gap-4 mt-4 max-sm:p-4 transition-all
         max-xl:p-5 max-lg:grid-cols-4 max-[855px]:grid-cols-3 max-sm:grid-cols-2 max-[520px]:grid-cols-1 "
			>
				{Array.from({ length: 10 }).map((_, index) => (
					<Card className="space-y-5 p-4" radius="lg" key={index}>
						<Skeleton className="rounded-lg">
							<div className="h-24 rounded-lg bg-default-300"></div>
						</Skeleton>
						<div className="space-y-3">
							<Skeleton className="w-3/5 rounded-lg">
								<div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
							</Skeleton>
							<Skeleton className="w-4/5 rounded-lg">
								<div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
							</Skeleton>
							<Skeleton className="w-2/5 rounded-lg">
								<div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
							</Skeleton>
						</div>
					</Card>
				))}
			</div>
		);
	}
	return (
		<>
			<div
				className="grid grid-cols-5 gap-4 mt-4 max-sm:p-4 transition-all
         max-xl:p-5 max-lg:grid-cols-4 max-[855px]:grid-cols-3 max-sm:grid-cols-2 max-[520px]:grid-cols-1 "
			>
				{products.map((product) => (
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
		</>
	);
}
