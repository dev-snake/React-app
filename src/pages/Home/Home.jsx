import { Fragment } from 'react';
import Banner from '../../components/Banner/Banner';
import Products from './Products/Products';
import SellingProduct from './SellingProduct/SellingProduct';
import FAQ from './FAQ/FAQ';
export default function Home() {
	return (
		<Fragment>
			<Banner />
			<Products>
				<SellingProduct />
				<FAQ />
			</Products>
		</Fragment>
	);
}
