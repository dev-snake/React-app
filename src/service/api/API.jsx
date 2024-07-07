import { BASE_URL } from '../../utils/apiUrl';
const API = {
	ADDRESS: {
		PROVINCES: 'https://vapi.vnappmob.com/api/province/',
		DISTRICTS: 'https://vapi.vnappmob.com/api/province/district',
		WARDS: 'https://vapi.vnappmob.com/api/province/ward'
	},
	// API PRODUCTS :
	PRODUCTS: `${BASE_URL}/products`,
	USERS: `${BASE_URL}/users`,
	PROFILE: `${BASE_URL}/users/profile`,
	SEND_COMMENT: `${BASE_URL}/products/send-comment`,
	// API ORDERS :
	ORDERS: `${BASE_URL}/orders`,
	CREATE_ORDER: `${BASE_URL}/orders/create-order`,
	CANCEL_ORDER: `${BASE_URL}/orders/cancel-order`,
	CONFIRM_ORDER: `${BASE_URL}/orders/confirm-order`,
	// API CATEGORIES :
	CATEGORIES: `${BASE_URL}/categories`,
	// API VOUCHERS :
	VOUCHERS: `${BASE_URL}/vouchers`
};
export { API };
