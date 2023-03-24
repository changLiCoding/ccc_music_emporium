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
		<div className='flex flex-col w-full border-opacity-50 container  my-8'>
			<div className='grid h-20 card bg-base-300 rounded-box place-items-center'>
				Stores Infomation
			</div>
			<div className='divider'>Locations</div>
			<div className='grid card bg-base-300 rounded-box place-items-center'>
				<div className='flex w-full justify-evenly'>
					<StoreLinks
						stores={stores}
						viewHandler={viewHandler}
					/>
					<Map
						stores={stores}
						view={view}
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
