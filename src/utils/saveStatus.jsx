const saveIsLoggedIn = (isLoggedIn) => {
	localStorage.setItem('isLoggedIn', isLoggedIn);
};

const getIsLoggedIn = () => {
	return JSON.parse(localStorage.getItem('isLoggedIn'));
};

const saveToken = (token) => {
	localStorage.setItem('token', token);
};
const removeToken = () => {
	localStorage.removeItem('token');
};
export { saveToken, saveIsLoggedIn, getIsLoggedIn, removeToken };
