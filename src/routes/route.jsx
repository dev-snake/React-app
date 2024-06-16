import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Ranking from '../pages/Rank/Ranking';
import NotFound from '../pages/NotFound/NotFound';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		children: []
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
		path: '*',
		element: <NotFound />
	}
]);
