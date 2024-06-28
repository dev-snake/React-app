import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { router } from './routes/route';
import React, { Suspense } from 'react';
import SpinnerUi from './components/common/Spinner';
function App() {
	const { routes } = router;
	return (
		<Router>
			<div className="w-full">
				<Header />
			</div>
			<Suspense fallback={<SpinnerUi />}>
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
