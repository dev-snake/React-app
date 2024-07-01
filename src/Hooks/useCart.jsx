import { useEffect, useState } from 'react';
const useCart = () => {
	const localStorageCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
	const [cartItems, setCartItems] = useState(localStorageCart);
	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);
	const addToCart = (productId, data) => {
		setCartItems((prev) => {
			const product = data.find((item) => item._id === productId);
			const existProduct = prev.find((item) => item._id === productId);
			if (existProduct) {
				existProduct.quantity += 1;
				return [...prev];
			} else {
				return [...prev, { ...product, quantity: 1 }];
			}
		});
	};
	const increaseQuantity = (productId) => {
		setCartItems((prev) => {
			return prev.map((item) => {
				if (item._id === productId) {
					item.quantity += 1;
				}
				return item;
			});
		});
	};
	const decreaseQuantity = (productId) => {
		setCartItems((prev) => {
			const existProduct = prev.find((item) => item._id === productId);
			if (existProduct.quantity === 1) {
				return prev.filter((item) => item._id !== productId);
			}
			return prev.map((item) => {
				if (item._id === productId) {
					item.quantity -= 1;
				}
				return item;
			});
		});
	};
	const removeItem = (productId) => {
		setCartItems((prev) => prev.filter((item) => item._id !== productId));
	};

	const getTotalPrice = () => {
		return cartItems.reduce((total, { price, quantity }) => total + price * quantity, 0);
	};

	return {
		cartItems,
		addToCart,
		increaseQuantity,
		decreaseQuantity,
		getTotalPrice,
		removeItem
	};
};
export default useCart;
