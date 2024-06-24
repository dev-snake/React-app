import axios from 'axios';
import { useState, useEffect } from 'react';
export const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const response = await axios.get(url);
				setData(response.data);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};
		if (url) {
			fetchData();
		}
		return { data, isLoading, error };
	}, [url]);
};
