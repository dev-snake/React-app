export default function formatDate(date) {
	const d = new Date(date);
	const day = d.getDate();
	const month = d.getMonth() + 1;
	const year = d.getFullYear();
	return `${year}/${month}/${day}`;
}
