import Navigation from '../Navbar/Navbar';
import { useEffect } from 'react';
import instance from '../../utils/axiosConfig';
export default function Header() {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await instance.get('users/profile');
			} catch (error) {
				console.error('Error occurred', error);
			}
		};
		fetchData();
	}, []);
	return (
		<>
			<Navigation />
		</>
	);
}
