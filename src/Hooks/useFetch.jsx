import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
	// const [data, setData] = useState({
	// 	products: [],
	// 	default: {
	// 		name: '',
	// 		price: 0,
	// 		image: ''
	// 	}
	// });
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get(url);
				setData(data);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	return { data, isLoading, error };
};
