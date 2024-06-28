import ImageTest from '../../assets/images/m1wden.png';
import TechInfor from './TechInfor/TechInfor';
import SimilarProduct from './SimilarProduct/SimilarProduct';
import Feedback from './Feedback/Feedback';
import { Image, Chip, Button, Card } from '@nextui-org/react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import { API } from '../../service/api/API';
import { formatMoney } from '../../utils/formatNumber';
import { useEffect, useState } from 'react';
export default function PageDetail() {
	const { productId } = useParams();
	const { data, isLoading } = useFetch(`${API.PRODUCTS}`);
	const [productDetail, setProductDetail] = useState(null);
	useEffect(() => {
		if (!isLoading) {
			const product = data.find((item) => item._id === productId);
			setProductDetail(product);
		}
	}, [productId, data, isLoading]);
	if (!productDetail) {
		return <div>Product not found</div>;
	}
	return (
		<section className="max-w-[1300px] mx-auto mt-20  shadow-sm rounded-sm ">
			<div
				className="flex bg-white
			 max-[998px]:grid max-[998px]:m-4"
			>
				<Card className="basis-[35%]  h-full m98:border-r-2" radius="none" isPressable>
					<div className="flex justify-center m-4 ">
						<Image
							src={productDetail.image}
							alt=""
							className="w-[372px] h-[372px] object-cover "
						/>
					</div>
					<div className="m-4 flex gap-2">
						<div className="w-16 h-16 focus:border-2 border-blue-500 rounded-sm transition-all ease-in-out mr-2">
							<Image
								src="https://product.hstatic.net/200000722513/product/9ktbn43h_c8d1e233aee24077ae3ccb8061b5c7bc_grande.png"
								alt=""
								className="w-full h-full"
							/>
						</div>
						<div className="w-16 h-16 focus:border-2 border-blue-500 rounded-sm transition-all ease-in-out mr-2">
							<Image
								src="https://product.hstatic.net/200000722513/product/bfo6ep9j_37d6891e25d94d7fa37cd147bc3464e8_grande.png"
								alt=""
								className="w-full h-full"
							/>
						</div>
						<div className="w-16 h-16 focus:border-2 border-blue-500 rounded-sm transition-all ease-in-out mr-2">
							<Image
								src="https://product.hstatic.net/200000722513/product/32q6ue9b_dd64156f5869455da6d4172f9faa0fa0_compact.png"
								alt=""
								className="w-full h-full"
							/>
						</div>
						<div className="w-16 h-16 focus:border-2 border-blue-500 rounded-sm transition-all ease-in-out mr-2">
							<Image
								src="https://product.hstatic.net/200000722513/product/32q6ue9b_dd64156f5869455da6d4172f9faa0fa0_compact.png"
								alt=""
								className="w-full h-full"
							/>
						</div>
					</div>
				</Card>
				<div className="flex-grow-[2] p-4">
					<span className="text-2xl font-medium">{productDetail.name}</span>
					<span className="block text-xl mt-2">0 Xem đánh giá</span>
					<span className="flex items-center gap-5 mt-2">
						<span className="text-2xl font-semibold">
							{formatMoney(productDetail.price)} ₫
						</span>
						<del className="text-[18px]">
							{formatMoney(productDetail.orginal_price)}₫
						</del>
						<Chip color="danger" radius="sm">
							{productDetail.sale} %
						</Chip>
					</span>
					<div className="flex gap-4 mt-4">
						<button>
							<img
								src="https://product.hstatic.net/200000722513/product/bfo6ep9j_37d6891e25d94d7fa37cd147bc3464e8_grande.png"
								alt=""
								className="w-12 h-12 border-2 rounded-sm"
							/>
							<span className="text-xs font-medium">Đen</span>
						</button>
						<button>
							<img
								src="https://product.hstatic.net/200000722513/product/ci9f8k75_e9e8bebbbb164f648e7bf94d561919f7_grande.png"
								alt=""
								className="w-12 h-12 border-2 rounded-sm"
							/>
							<span className="text-xs font-medium">Trắng</span>
						</button>
					</div>
					<div>
						<Button
							color="primary"
							radius="md"
							className="m98:max-w-[400px] h-12  block w-full text-white font-medium rounded-sm mt-4 max-[998px]:w-full max-[998px]:block"
						>
							Mua hàng
						</Button>
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
				<SimilarProduct />
			</div>
			<Feedback />
		</section>
	);
}
