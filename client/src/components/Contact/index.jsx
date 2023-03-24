import { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import Map from "./Map";

const Contact = () => {
	return (
		<div className='flex flex-col w-full border-opacity-50 container'>
			<div className='grid h-20 card bg-base-300 rounded-box place-items-center'>
				Stores Infomation
			</div>
			<div className='divider'>Locations</div>
			<div className='grid card bg-base-300 rounded-box place-items-center'>
				<div className='flex w-full justify-evenly'>
					<div>
						<h2>Store Name</h2>
						<p>Address: 123 Main St</p>
						<p>Phone: 555-555-5555</p>
						<p>Hours: Monday - Friday 9am - 5pm</p>
					</div>
					<Map />
				</div>
			</div>
		</div>
	);
};

export default Contact;
