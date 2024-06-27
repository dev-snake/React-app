import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { router } from './routes/route';
import React, { Suspense } from 'react';

function App() {
	const { routes } = router;
	return (
		<Router>
			<Header />
			<Suspense fallback={<div>Loading...</div>}>
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
			</Suspense>
			<Footer />
		</Router>
	);
}

export default App;
