import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { router } from './routes/route';
import axios from 'axios';
import { useEffect } from 'react';
function App() {
	const { routes } = router;
	return (
		<Router>
			<Header />
			<Routes>
				{routes.map(({ path, element, children }) => (
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
