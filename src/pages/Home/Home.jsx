import { Fragment } from 'react';
import Banner from '../../components/Banner/Banner';
import Products from './Products/Products';
export default function Home() {
	return (
		<Fragment>
			<Banner />
			<Products />
		</Fragment>
	);
}
