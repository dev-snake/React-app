import ProductList from '../ProductList/ProductList';
import Promotion from '../Promotion/Promotion';
export default function Products({ children }) {
	return (
		<section className="max-w-[1500px] mx-auto mt-6 w-full">
			<p className="font-semibold uppercase text-center text-2xl">sản phẩm nổi bật</p>
			<ProductList />
			{children}
		</section>
	);
}
