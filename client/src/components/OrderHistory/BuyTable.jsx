import React from "react";

export default function BuyTable() {
	return (
		<div>
			<table className="table w-10/12">
				{/* head */}
				<thead>
					<tr className="border-[#d1cdcd] border-2">
						<th className="w-40">
							<span></span>
						</th>
						<th>Product</th>
						<th></th>
						<th>Price</th>
					</tr>
				</thead>
				{/* table rows */}
				{}
				{/* foot */}
				<tfoot>
					<tr className="border-[#d1cdcd] border-2">
						<th></th>
						<th></th>
						<th></th>
						<th>
							<p className="text-xl"></p>
						</th>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}
