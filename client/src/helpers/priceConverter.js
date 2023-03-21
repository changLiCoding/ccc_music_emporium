export default function priceConverter(cents) {
	const dollars = cents / 100;
	return dollars.toLocaleString("en-us", {
		style: "currency",
		currency: "USD",
	});
}
