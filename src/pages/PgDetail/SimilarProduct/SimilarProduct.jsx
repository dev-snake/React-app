import { useLayoutEffect, useState, useId } from 'react';
import { Image, Chip } from '@nextui-org/react';
import { Link } from 'react-router-dom';
export default function SimilarProduct({ productId, categoryId, data }) {
	const keyId = useId();
	const [products, setProducts] = useState([]);
	useLayoutEffect(() => {
		const similarProducts = data.filter(
			(item) => item.categoryId === categoryId && item._id !== productId
		);
		setProducts(similarProducts);
	}, [productId]);

	return (
		<div className="bg-white flex-grow p-4 rounded-md">
			<h1 className="text-xl font-semibold ">Sản phẩm tương tự</h1>
			<div className="grid gap-2 mt-4">
				{products.map((product, index) => (
					<div className="flex border-[1px] p-4 gap-4 rounded-md" key={index}>
						<Image src={product.image} alt="" className="w-28 h-28 object-cover" />
						<div>
							<Link to={`/${product._id}`} className=" text-[14px] font-semibold">
								{product.name}
							</Link>
							<p className=" text-[14px] font-semibold mt-2 text-red-500">
								{product.price.toLocaleString()}đ
								<Chip color="danger" variant="flat" className="ml-5" radius="sm">
									{product.discount} %
								</Chip>
							</p>
							<del className="mt-2">{product.price}</del>
							<p className="text-xs mt-1">0 Đánh giá</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
