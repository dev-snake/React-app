import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { router } from './routes/route';
function App() {
	// console.log(router);
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				{router.routes.map(({ path, element, id, children }) => (
					<Route path={path} element={element} key={id} />
				))}
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
