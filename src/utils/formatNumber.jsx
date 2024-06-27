const formatMoney = (number) => {
	const formatedNumber = new Intl.NumberFormat('VN', { maximumFractionDigits: 3 }).format(number);
	return formatedNumber;
};
export { formatMoney };
