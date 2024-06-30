import { Fragment } from 'react';
import Banner from '../../components/Banner/Banner';
import Products from './Products/Products';
import { Outlet } from 'react-router-dom';
export default function Home() {
	return (
		<Fragment>
			<Banner />
			<Products />
		</Fragment>
	);
}
