export default function getDaysDifference(startAt, endAt) {
	const date1 = new Date(startAt);
	const date2 = new Date(endAt);

	const diffInMs = date2.getTime() - date1.getTime();
	return diffInMs / (1000 * 60 * 60 * 24);
}
