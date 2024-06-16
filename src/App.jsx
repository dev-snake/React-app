import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { router } from './routes/route';
function App() {
	// console.log(router);
	return (
		<Router>
			<Header />
			<Routes>
				{router.routes.map(({ path, element, children }) => (
					<Route path={path} element={element} key={path}>
						{children &&
							children.map(({ path, element }) => (
								<Route path={path} element={element} key={path} />
							))}
					</Route>
				))}
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
