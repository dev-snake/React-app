import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Ranking from '../pages/Rank/Ranking';
import NotFound from '../pages/NotFound/NotFound';
import Profile from '../pages/Profile/Profile';
import Login from '../pages/auth/Login/Login';
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
		path: 'products/:slug',
		element: <Home />
	},
	{
		path: 'ranking',
		element: <Ranking />
	},
	{
		path: 'profile',
		element: <Profile />,
		children: [
			{
				path: 'login',
				element: <Login />
			}
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
]);
