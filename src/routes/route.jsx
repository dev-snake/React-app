import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import About from '../pages/About/About';
export const publicRoutes = [
	{
		path: '/',
		component: Home
	},
	{
		path: 'about-me',
		component: About
	},
	{
		path: '*',
		component: NotFound
	}
];
