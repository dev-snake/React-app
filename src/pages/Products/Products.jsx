import CollectionFilter from './CollectionFilter/CollectionFilter';
import ProductList from '../Home/ProductList/ProductList';
export default function PageAllProducts() {
	return (
		<section className="max-w-[1500px] mx-auto mt-20 mb-20 bg-white p-4 rounded-md">
			<CollectionFilter />
			<ProductList />
		</section>
	);
}
