export default function handleMapViewMove(markers, view, map) {
	markers.forEach((marker) => {
		const popup = marker.getPopup();
		if (!popup) return;
		if (
			parseFloat(marker.getLngLat().lat) === view.latitude &&
			parseFloat(marker.getLngLat().lng) === view.longitude
		) {
			popup.addTo(map);
		} else {
			popup.remove();
		}
	});
}
