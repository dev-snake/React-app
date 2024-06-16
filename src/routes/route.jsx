import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Ranking from '../pages/Rank/Ranking';
import NotFound from '../pages/NotFound/NotFound';
import Profile from '../pages/Profile/Profile';
import Login from '../pages/auth/Login/Login';
import Register from '../pages/auth/Register/Register';
import ChangePassword from '../pages/Profile/ChangePw/ChangePassword';
import UserInfor from '../pages/Profile/UserInfor/UserInfor';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: 'products',
		element: <Products />
	},
	{
		path: 'products/:productId',
		element: <Home />
	},
	{
		path: 'ranking',
		element: <Ranking />
	},
	{
		path: 'auth/login',
		element: <Login />
	},
	{
		path: 'auth/register',
		element: <Register />
	},
	{
		path: 'profile',
		element: <Profile />,
		children: [
			{
				path: 'change-password',
				element: <ChangePassword />
			},
			{
				path: 'user-infor',
				element: <UserInfor />
			}
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
]);
