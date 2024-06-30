import { jwtDecode } from 'jwt-decode';
const isTokenExpired = (token) => {
	try {
		const { exp } = jwtDecode(token);
		const currentTime = Date.now() / 1000;
		console.log(exp < currentTime);
		return exp < currentTime;
	} catch (error) {
		return true;
	}
};
const saveToken = (token) => {
	localStorage.setItem('token', token);
};
const removeToken = () => {
	localStorage.removeItem('token');
};
const isLoggedIn = () => {
	const token = localStorage.getItem('token');
	if (!token) return false;
	return token && !isTokenExpired(token);
};
export { saveToken, removeToken, isLoggedIn, isTokenExpired };
