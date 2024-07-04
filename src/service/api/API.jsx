import { BASE_URL } from '../../utils/apiUrl';
const API = {
	ADDRESS: {
		PROVINCES: 'https://vapi.vnappmob.com/api/province/',
		DISTRICTS: 'https://vapi.vnappmob.com/api/province/district',
		WARDS: 'https://vapi.vnappmob.com/api/province/ward'
	},
	PRODUCTS: `${BASE_URL}/products`,
	USERS: `${BASE_URL}/users`,
	PROFILE: `${BASE_URL}/users/profile`,
	ORDERS: `${BASE_URL}/orders`,
	CANCEL_ORDER: `${BASE_URL}/orders/cancel-order`,
	CATEGORIES: `${BASE_URL}/categories`,
	VOUCHERS: `${BASE_URL}/vouchers`,
	CREATE_ORDER: `${BASE_URL}/orders/create-order`
};
export { API };
