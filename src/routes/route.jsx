import { createBrowserRouter } from 'react-router-dom';
import React, { lazy } from 'react';
// import { Counter } from '../features/counter/counter';
const Home = lazy(() => import('../pages/Home/Home'));
const Products = lazy(() => import('../pages/Products/Products'));
const Ranking = lazy(() => import('../pages/Rank/Ranking'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const Profile = lazy(() => import('../pages/Profile/Profile'));
const Login = lazy(() => import('../pages/auth/Login/Login'));
const Register = lazy(() => import('../pages/auth/Register/Register'));
const ChangePassword = lazy(() => import('../pages/Profile/ChangePw/ChangePassword'));
const UserInfor = lazy(() => import('../pages/Profile/UserInfor/UserInfor'));
const PageDetail = lazy(() => import('../pages/PgDetail/Detail'));
const Cart = lazy(() => import('../pages/Cart/Cart'));
const CartInfor = lazy(() => import('../pages/Cart/cart-infor/CartInfor'));
const CartContainer = lazy(() => import('../pages/Cart/cart-container/CartContainer'));
const Payment = lazy(() => import('../pages/Cart/payment/Payment'));
const OrderHistory = lazy(() => import('../pages/Profile/orders-history/OrderHistory'));
const LookupOrder = lazy(() => import('../pages/Profile/lookup-order/LookupOrder'));
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
			},
			{
				path: 'order-history',
				element: <OrderHistory />
			},
			{
				path: 'lookup-order',
				element: <LookupOrder />
			}
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
]);
