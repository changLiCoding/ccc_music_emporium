import React from "react";

export default function NotLoggedInAlert() {
	return (
		<div className="alert alert-error shadow-lg w-full my-10">
			<div className="flex justify-center">
				<span className="flex text-2xl ">
					Not logged in! Please make sure you're logged in before checking out.
				</span>
			</div>
			<label
				htmlFor="my-modal-5"
				className="btn btn-sm flex-initial justify-around"
			>
				X
			</label>
		</div>
	);
}
