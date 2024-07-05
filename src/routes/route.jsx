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
const Admin = lazy(() => import('../../src/admin/Admin'));
const DashBoard = lazy(() => import('../admin/Dashboard/Dashboard'));
const ProductManagement = lazy(() => import('../admin/ProductManagement/ProductManagement'));
const AddProduct = lazy(() => import('../admin/ProductManagement/AddProduct/AddProduct'));
const EditProduct = lazy(() => import('../admin/ProductManagement/EditProduct/EditProduct'));
const ProductList = lazy(() => import('../pages/Home/ProductList/ProductList'));
const OrderedSuccess = lazy(() => import('../pages/Cart/orders-success/OrderedSuccess'));
const OrderManagement = lazy(() => import('../admin/OrderManagement/OrderManagement'));
const OrderDetail = lazy(() => import('../admin/OrderManagement/OrderDetail/OrderDetail'));
const ViewDetail = lazy(() => import('../pages/Profile/orders-history/view-detail/ViewDetail'));
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: 'admin',
		element: <Admin />,
		children: [
			{
				path: 'dashboard',
				element: <DashBoard />
			},
			{
				path: 'products',
				element: <ProductManagement />
			},
			{
				path: 'products/create',
				element: <AddProduct />
			},
			{
				path: 'products/:productId/edit',
				element: <EditProduct />
			},
			{
				path: 'orders',
				element: <OrderManagement />
			},
			{
				path: 'orders/:orderId/order-detail',
				element: <OrderDetail />
			}
		]
	},
	{
		path: ':productId',
		element: <PageDetail />
	},
	{
		path: 'products',
		element: <Products />,
		children: [
			{
				path: ':categoryId'
			}
		]
	},
	// {
	// 	path: 'products/:productId',
	// 	element: <PageDetail />
	// },
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
			},
			{
				path: 'order-success',
				element: <OrderedSuccess />
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
			},
			{
				path: 'order-history/:orderId/view-detail',
				element: <ViewDetail />
			}
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
]);
