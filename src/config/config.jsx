import { accessToken } from '../utils/saveStatus';
export const config = {
	headers: { Authorization: `Bearer ${accessToken.token}` }
};
