import { Image, Chip, Button, Card, Tooltip, Tabs, Tab } from '@nextui-org/react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import { API } from '../../service/api/API';
import { formatMoney } from '../../utils/formatNumber';
import { useEffect, useState } from 'react';
import useCart from '../../Hooks/useCart';
import { toast } from 'sonner';
import { accessToken } from '../../utils/saveStatus';
import Comments from './Comments/Comments';
import TechInfor from './TechInfor/TechInfor';
import SimilarProduct from './SimilarProduct/SimilarProduct';
import Feedback from './Feedback/Feedback';
export default function PageDetail() {
	const { productId } = useParams();
	const [activeIndex, setActiveIndex] = useState(null);
	const { data, isLoading } = useFetch(`${API.PRODUCTS}`);
	const [productDetail, setProductDetail] = useState(null);
	const { cartItems, addToCart } = useCart();
	const [variant, setVariant] = useState(null);
	useEffect(() => {
		if (!isLoading) {
			const product = data.find((item) => item._id === productId);
			setProductDetail(product);
		}
	}, [productId, data, isLoading]);
	const handleAddToCart = (productId, code) => {
		if (!accessToken.token) {
			toast.error('Vui lòng đăng nhập để mua hàng  !', { duration: 1000 });
			return;
		}
		addToCart(productId, data, code);
	};
	if (!productDetail) {
		return <div>Product not found</div>;
	}
	const changeColor = (index, color) => {
		const filter = productDetail.variant.find((item) => item.color === color);
		setVariant(filter);
		setActiveIndex(index);
	};
	return (
		<section className="max-w-[1300px] mx-auto mt-20  shadow-sm rounded-sm ">
			<div className="flex bg-white max-[998px]:grid max-[998px]:m-4">
				<div className="basis-[35%]  h-full m98:border-r-2">
					<div className="flex justify-center m-4 ">
						<Image
							src={variant !== null ? variant.image : productDetail.variant[0].image}
							radius="none"
							alt=""
						/>
					</div>
					<div className="m-4 flex gap-2">
						{productDetail?.variant.map((item, index) => (
							<div
								className="w-16 h-16 focus:border-2 border-blue-500 rounded-sm transition-all ease-in-out mr-2"
								key={index}
							>
								<img
									src={item.image}
									alt=""
									radius="none"
									className={
										activeIndex === index
											? 'border-2 border-blue-500'
											: 'cursor-pointer'
									}
									onClick={() => changeColor(index, item.color)}
								/>
							</div>
						))}
					</div>
				</div>
				<div className="flex-grow-[2] p-4">
					<span className="text-2xl font-medium">{productDetail.name}</span>
					<span className="flex items-center gap-5 mt-2">
						<span className="text-2xl font-semibold">
							{formatMoney(
								variant !== null ? variant.price : productDetail.variant[0].price
							)}
							₫
						</span>
						<del className="text-[18px]">
							{formatMoney(productDetail.price + 9999)}₫
						</del>
						<Chip color="danger" variant="shadow" radius="sm">
							{productDetail.discount} %
						</Chip>
					</span>
					<div>
						<h1 className="mt-4 font-semibold">Màu sắc : </h1>
						<div className="flex gap-4 mt-4">
							{productDetail?.variant.map((item, index) => (
								<Tooltip
									content={item.color}
									radius="sm"
									color="primary"
									size="lg"
									key={index}
								>
									<Button
										size="sm"
										color={activeIndex === index ? 'primary' : 'default'}
										variant="bordered"
										onClick={() => changeColor(index, item.color)}
									>
										{item.color}
									</Button>
								</Tooltip>
							))}
						</div>
						<div>
							<h1 className="mt-4 font-semibold">
								Số lượng sản phẩm :
								{variant !== null
									? variant.quantity - variant.quantity_sold
									: productDetail.variant[0].quantity}
							</h1>
						</div>
					</div>
					<div className="mt-5">
						{variant?.quantity - variant?.quantity_sold === 0 ? (
							<Button
								color="default"
								radius="md"
								className="m98:max-w-[400px] h-12  block w-full text-white font-medium rounded-sm mt-4 max-[998px]:w-full max-[998px]:block"
							>
								Hết hàng
							</Button>
						) : (
							<Button
								color="primary"
								radius="md"
								className="m98:max-w-[400px] h-12  block w-full text-white font-medium rounded-sm mt-4 max-[998px]:w-full max-[998px]:block"
								onClick={() => {
									const code =
										variant !== null
											? variant.code
											: productDetail.variant[0].code;
									handleAddToCart(productDetail._id, code);
								}}
							>
								Mua hàng
							</Button>
						)}
					</div>
					<div className="mt-4">
						<h1 className="capitalize text-xl font-semibold">Thông tin chung : </h1>
						<p className="text-xl mt-4">
							<span className="font-medium">Nhà sản xuất :</span> Razer
						</p>
						<p className="text-xl">
							<span className="font-medium">Tình trạng : </span>Mới
						</p>
						<p className="text-xl">
							<span className="font-medium">Bảo hành : </span>24 tháng
						</p>
					</div>
				</div>
			</div>
			{/* Products Information */}
			<div className="grid  mt-4 gap-4  m98:flex max-[998px]:p-4">
				<TechInfor />
				<SimilarProduct
					productId={productId}
					categoryId={productDetail.categoryId}
					data={data}
				/>
			</div>
			<div className="mt-4">
				<Tabs color="primary" variant="bordered" size="md">
					<Tab title="Feedback">
						<Feedback />
					</Tab>
					<Tab title="Comment">
						<Comments />
					</Tab>
					<Tab title="Comments"></Tab>
				</Tabs>
			</div>
		</section>
	);
}
