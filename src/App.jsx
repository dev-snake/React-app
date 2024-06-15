import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/route';
function App() {
	console.log(publicRoutes);
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				{publicRoutes.map((route, index) => {
					const Page = route.component;
					return <Route path={route.path} element={<Page />} key={index} />;
				})}
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
