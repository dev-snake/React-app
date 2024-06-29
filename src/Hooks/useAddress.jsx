import axios from 'axios';
import { useState, useCallback, useEffect } from 'react';
import { API } from '../service/api/API';
export const useAddressData = () => {
	const [data, setData] = useState({ provinces: [], districts: [], wards: [] });
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${API.ADDRESS.PROVINCES}`);
				setData((prev) => ({ ...prev, provinces: response.data.results }));
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);
	const fetchDistricts = useCallback(async (provinceId) => {
		try {
			const response = await axios.get(`${API.ADDRESS.DISTRICTS}/${provinceId}`);
			console.log(response);
			setData((prev) => ({ ...prev, districts: response.data.results, wards: [] }));
		} catch (err) {
			setError(err.message);
		}
	}, []);

	const fetchWards = useCallback(async (districtId) => {
		try {
			const response = await axios.get(`${API.ADDRESS.WARDS}/${districtId}`);
			setData((prev) => ({ ...prev, wards: response.data.results }));
		} catch (err) {
			setError(err.message);
		}
	}, []);
	return { data, isLoading, error, fetchDistricts, fetchWards };
};
