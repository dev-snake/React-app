import { Fragment } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about-me" element={<About />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
