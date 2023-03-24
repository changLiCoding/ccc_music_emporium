import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
	"pk.eyJ1IjoibGljaGFuZzAwNCIsImEiOiJjbGZsZTdxajQwMTBkM3Fxem1xOGE4bHZhIn0.NX4YQSsBGEHQ1V_Ytk0Usg";

export default function Map({ stores, view }) {
	const mapRef = useRef(null);
	const openHours = "9am - 5pm";
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapRef.current,
			style: "mapbox://styles/lichang004/clclili1n000014qtrnk6heqc",
			center: [view.longitude, view.latitude],
			zoom: 9,
		});

		stores.stores.stores &&
			stores.stores.stores.forEach((store) => {
				const marker = new mapboxgl.Marker()
					.setLngLat([parseFloat(store.longitude), parseFloat(store.latitude)])
					.setPopup(
						new mapboxgl.Popup().setHTML(`
		            <div>
		              <h3>${store.name}</h3>
		              <p>${store.location}</p>
		              <p>Open hours: ${openHours}</p>
		            </div>
		          `)
					)
					.addTo(map);
				// marker.togglePopup();
			});
	}, [stores.stores.stores, view.longitude, view.latitude]);

	return (
		<div
			ref={mapRef}
			style={{ width: "60rem", height: "25rem" }}></div>
	);
}