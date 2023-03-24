export default function handleMapViewMove(markers, view, map) {
	markers.forEach((marker) => {
		const popup = marker.getPopup();
		if (!popup) return;
		if (
			marker.getLngLat().lat.toFixed(4) ===
				parseFloat(view.latitude).toFixed(4) &&
			marker.getLngLat().lng.toFixed(4) ===
				parseFloat(view.longitude).toFixed(4)
		) {
			popup.addTo(map);
		} else {
			popup.remove();
		}
	});
}
