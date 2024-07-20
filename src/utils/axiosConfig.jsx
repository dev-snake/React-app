import { jwtDecode } from 'jwt-decode';
import { BASE_URL } from './apiUrl';
import { API } from '../service/api/API';
import { saveToken } from './saveStatus';
import axios from 'axios';
import { CONFIG_REFRESH_TOKEN } from '../config/config';
const instance = axios.create({
	baseURL: BASE_URL,
	timeout: 1000,
	headers: {
		'Content-Type': 'application/json'
	}
});

instance.interceptors.request.use(
	async (config) => {
		const token = localStorage.getItem('token');
		const accessToken = JSON.parse(token);
		if (token) {
			config.headers.Authorization = `Bearer ${accessToken.token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		console.log('Error', error);
		const originalRequest = error.config;
		if (error.response.status === 403 && !originalRequest._retry) {
			originalRequest._retry = true;
			const token = localStorage.getItem('token');
			const parseString = JSON.parse(token);
			if (token) {
				const decodedToken = jwtDecode(parseString.token);
				const now = new Date().getTime();
				if (now > decodedToken.exp) {
					const refreshToken = parseString.refreshToken;
					const res = await axios.post(
						API.REFRESH_TOKEN,
						{ refreshToken },
						CONFIG_REFRESH_TOKEN
					);
					const newAccessToken = res.data.token;
					saveToken(newAccessToken, refreshToken, true);
					originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
					return axios(originalRequest);
				}
			}
		}
		return Promise.reject(error);
	}
);
export default instance;
