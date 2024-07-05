import { useEffect, useState } from 'react';
import { toast } from 'sonner';
const useCart = () => {
	const localStorageCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
	const [cartItems, setCartItems] = useState(localStorageCart);
	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);
	const addToCart = (productId, data, code) => {
		const product = data.find((item) => item._id === productId);
		const color = product.variant.find((item) => item.code === code);
		const existProduct = cartItems.find((item) => item._id === productId);
		if (existProduct) {
			const findColor = existProduct.color.find((item) => item.code === code);
			if (findColor) {
				const total = findColor.quantityBuyed + findColor.quantity_sold;
				if (total >= findColor.quantity) {
					toast.warning('Sản phẩm đã hết !', { duration: 1000 });
					return;
				}
				findColor.quantityBuyed += 1;
				toast.success('Thêm sản phẩm vào giỏ hàng thành công', { duration: 1000 });
				setCartItems([...cartItems]);
			} else {
				toast.success('Thêm sản phẩm vào giỏ hàng thành công', { duration: 1000 });
				existProduct.color.push({ ...color, quantityBuyed: 1 });
				setCartItems([...cartItems]);
			}
		} else {
			toast.success('Thêm sản phẩm vào giỏ hàng thành công', { duration: 1000 });
			cartItems.push({ ...product, color: [{ ...color, quantityBuyed: 1 }] });
			setCartItems([...cartItems]);
		}
	};
	const increaseQuantity = (productId, codeColor) => {
		const product = cartItems.find((item) => item._id === productId);
		const color = product.color.find((item) => item.code === codeColor);
		if (color.quantityBuyed >= color.quantity) {
			toast.warning('Sản phẩm đã hết !', { duration: 1000 });
			return;
		}
		color.quantityBuyed += 1;
		setCartItems([...cartItems]);
	};
	const decreaseQuantity = (productId, colorCode) => {
		const product = cartItems.find((item) => item._id === productId);
		const color = product.color.find((item) => item.code === colorCode);
		if (color.quantityBuyed === 1) {
			toast.warning('Số lượng sản phẩm phải lớn hơn 0', { duration: 1000 });
			return;
		}
		color.quantityBuyed -= 1;
		setCartItems([...cartItems]);
	};
	const removeItem = (productId, colorCode) => {
		setCartItems((prev) => {
			const product = prev.find((p) => p._id === productId);
			const newColor = product.color.filter((c) => c.code !== colorCode);
			return prev.map((product) =>
				product._id === productId ? { ...product, color: newColor } : product
			);
		});
	};

	const getTotalPrice = () => {
		const total = cartItems.reduce((acc, item) => {
			const totalItem = item.color.reduce((acc, color) => {
				return acc + color.price * color.quantityBuyed;
			}, 0);
			return acc + totalItem;
		}, 0);
		return total;
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
