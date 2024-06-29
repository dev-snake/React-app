const saveToken = (token) => {
	localStorage.setItem('token', token);
};
const removeToken = () => {
	localStorage.removeItem('token');
};
const isLoggedIn = () => {
	return JSON.parse(localStorage.getItem('isLoggedIn') || false);
};
export { saveToken, removeToken, isLoggedIn };
