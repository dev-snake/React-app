import ProductList from '../ProductList/ProductList';
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
export default function Products() {
	return (
		<section className="max-w-[1500px] mx-auto mt-6 w-full">
			<p className="font-semibold uppercase text-center text-2xl">sản phẩm nổi bật</p>
			<ProductList />
			<div className="w-full flex justify-center mt-8 mb-8">
				<Link to={'products'}>
					<Button className="" color="primary" variant="shadow">
						Xem tất cả sản phẩm
					</Button>
				</Link>
			</div>
		</section>
	);
}
