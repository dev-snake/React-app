import axios from 'axios';
import { useState, useEffect } from 'react';
import { config } from '../config/config';
export const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const fetchData = async () => {
		try {
			const { data } = await axios.get(url, config);
			setData(data);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	const mutate = () => {
		fetchData();
	};

	return { data, isLoading, error, mutate, setData };
};
