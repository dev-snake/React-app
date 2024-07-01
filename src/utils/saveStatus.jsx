import { jwtDecode } from 'jwt-decode';
const isTokenExpired = (token) => {
	try {
		const { exp } = jwtDecode(token);
		const currentTime = Date.now() / 1000;
		return exp < currentTime;
	} catch (error) {
		return true;
	}
};
const saveToken = (token, stateLogin) => {
	const saveInfor = {
		token: token,
		isLoggedIn: stateLogin
	};
	return localStorage.setItem('token', JSON.stringify(saveInfor));
};
const removeToken = () => {
	localStorage.removeItem('token');
};
const accessToken = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : {};
const isLoggedIn = () => {
	const token = localStorage.getItem('token');
	if (!token) return false;
	return token && !isTokenExpired(token);
};
export { saveToken, removeToken, isLoggedIn, isTokenExpired, accessToken };
