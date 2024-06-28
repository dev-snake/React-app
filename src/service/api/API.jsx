import { BASE_URL } from '../../utils/apiUrl';
const API = {
	ADDRESS: {
		PROVINCES: 'https://vapi.vnappmob.com/api/province/',
		DISTRICTS: 'https://vapi.vnappmob.com/api/province/district',
		WARDS: 'https://vapi.vnappmob.com/api/province/ward'
	},
	PRODUCTS: `${BASE_URL}/products`,
	USERS: `${BASE_URL}/users`,
	CATEGORIES: `${BASE_URL}/categories`
};
export { API };
