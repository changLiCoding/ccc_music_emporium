import { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import Map from "./Map";

const Contact = () => {
	return (
		<div className='flex flex-col w-full border-opacity-50'>
			<div className='grid h-20 card bg-base-300 rounded-box place-items-center'>
				Stores Infomation
			</div>
			<div className='divider'>Locations</div>
			<div className='grid card bg-base-300 rounded-box place-items-center'>
				<Map />
			</div>
		</div>
	);
};

export default Contact;

// {/* <div className='flex w-full flex-col justify-center'>
//   <h2 className='text-xl'>
//     Heading
//     <span className='badge badge-lg'>NEW</span>
//   </h2>
//
// </div> */}
