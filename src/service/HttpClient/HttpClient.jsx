import axios from 'axios';
import { BASE_URL } from '../../utils/apiUrl';
import { accessToken } from '../../utils/saveStatus';
import { API } from '../api/API';
const HttpClient = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	}
});
HttpClient.interceptors.request.use(
	(config) => {
		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);
export const getAllVouchers = () => {
	const { data } = HttpClient.get(`${API.VOUCHERS}`);
	return data;
};
