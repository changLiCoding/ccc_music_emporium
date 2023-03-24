import React from "react";

export default function StoreLinks({ stores, viewHandler }) {
	return (
		<div>
			<ul className='menu menu-compact lg:menu-normal bg-transparent w-56 p-2 rounded-box'>
				{stores.stores.stores &&
					stores.stores.stores.map((store) => {
						return (
							<li key={store.id}>
								<button
									onClick={() => viewHandler(store.longitude, store.latitude)}
									type='button'
									className=' no-underline link'>
									{store.name}
								</button>
							</li>
						);
					})}
			</ul>
		</div>
	);
}
