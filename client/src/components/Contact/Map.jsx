import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
	"pk.eyJ1IjoibGljaGFuZzAwNCIsImEiOiJjbGZsZTdxajQwMTBkM3Fxem1xOGE4bHZhIn0.NX4YQSsBGEHQ1V_Ytk0Usg";

export default function Map() {
	const [map, setMap] = useState(null);
	const [location, setLocation] = useState({
		longitude: -79.39941593604091,
		latitude: 43.711066343462775,
		address: "San Francisco, CA",
	});
	const openHours = "9am - 5pm";
	useEffect(() => {
		// Initialize the map
		const newMap = new mapboxgl.Map({
			container: "map",
			style: "mapbox://styles/lichang004/clclili1n000014qtrnk6heqc",
			center: [location.longitude, location.latitude],
			zoom: 15,
		});

		// Add a marker for the store location
		new mapboxgl.Marker()
			.setLngLat([location.longitude, location.latitude])
			.addTo(newMap);

		// Save the map to state
		setMap(newMap);

		return () => {
			// Clean up the map when the component unmounts
			newMap.remove();
		};
	}, [location]);

	useEffect(() => {
		// Add a popup to the marker with the store open hours
		if (map) {
			const popup = new mapboxgl.Popup().setText(`Open hours: ${openHours}`);
			new mapboxgl.Marker()
				.setLngLat([location.longitude, location.latitude])
				.setPopup(popup)
				.addTo(map);
		}
	}, [map, location, openHours]);

	return (
		<div className='flex'>
			<div>
				<h2>Store Name</h2>
				<p>Address: 123 Main St</p>
				<p>Phone: 555-555-5555</p>
				<p>Hours: Monday - Friday 9am - 5pm</p>
			</div>
			<div
				id='map'
				style={{ width: "600px", height: "400px" }}></div>
		</div>
	);
}
