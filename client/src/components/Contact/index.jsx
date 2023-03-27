import { useState } from "react";
import Map from "./Map";
import StoreLinks from "./StoreLinks";
import useStores from "../../hooks/useStores";

const Contact = () => {
	const stores = useStores();
	const [view, setView] = useState({
		longitude: -79.39941593604091,
		latitude: 43.711066343462775,
	});
	const viewHandler = (longitude, latitude) => {
		setView((preView) => {
			return { ...preView, longitude, latitude };
		});
	};

	return (
		<div className="flex flex-col w-full min-h-[77vh] border-opacity-50 container my-12">
			<div className="grid h-20 card bg-base-300 rounded-box place-items-center font-bold text-3xl mb-6">
				Store Information
			</div>
			<div className="divider text-xl mb-6">Locations</div>
			<div className="grid card bg-base-300 rounded-box place-items-center">
				<div className="container flex flex-col lg:flex-row justify-evenly w-10/12">
					{/* <div className='lg:w-1/5'> */}
					<StoreLinks stores={stores} viewHandler={viewHandler} />
					{/* </div> */}
					<div className="lg:w-3/5">
						<Map stores={stores} view={view} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
