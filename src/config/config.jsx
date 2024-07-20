import { accessToken } from '../utils/saveStatus';
export const config = {
	headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken.token}` }
};
export const CONFIG_REFRESH_TOKEN = {
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${accessToken.refreshToken}`
	}
};
