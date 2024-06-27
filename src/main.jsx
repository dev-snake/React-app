import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/styles/index.css';
import { Provider } from 'react-redux';
import { NextUIProvider } from '@nextui-org/react';
import store from './Redux/store.jsx';
import { Toaster } from 'sonner';
ReactDOM.createRoot(document.getElementById('root')).render(
	<NextUIProvider>
		<Provider store={store}>
			<Toaster
				position="top-right"
				richColors
				toastOptions={{
					style: {
						margin: '50px 40px 0 0'
					}
				}}
			/>
			<App />
		</Provider>
	</NextUIProvider>
);
