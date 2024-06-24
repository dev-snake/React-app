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
import PageDetail from '../pages/PgDetail/Detail';
import Cart from '../pages/Cart/Cart';
import CartInfor from '../pages/Cart/cart-infor/CartInfor';
import CartContainer from '../pages/Cart/cart-container/CartContainer';
import Payment from '../pages/Cart/payment/Payment';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: ':productId',
		element: <PageDetail />
	},
	{
		path: 'products',
		element: <Products />
	},
	{
		path: 'products/:productId',
		element: <PageDetail />
	},
	{
		path: 'ranking',
		element: <Ranking />
	},
	{
		path: 'cart',
		element: <Cart />,
		children: [
			{
				path: 'cart-infor-order-box',
				element: <CartInfor />
			},
			{
				path: 'cart-item',
				element: <CartContainer />
			},
			{
				path: 'payment',
				element: <Payment />
			}
		]
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
