import React from "react";

export default function OrderLineItems(props) {
	const { imageUrl, make, model, purchaseDate, price } = props;

	return (
		<tbody>
			{/* row 1 */}
			<tr className="border-[#d1cdcd] border-2">
				<th className="text-center"></th>
				<td>
					<div className="flex items-center space-x-3">
						<div className="avatar">
							<div className="mask mask-squircle w-12 h-12">
								<img src={imageUrl} alt="Avatar Tailwind CSS Component" />
							</div>
						</div>
						<div>
							<div className="font-bold">{make}</div>
							<div className="text-sm opacity-50">{model}</div>
						</div>
					</div>
				</td>
				<td>
					<div className="font-bold">{purchaseDate}</div>
				</td>
				<td className="text-center"></td>
				<th>
					<div className="font-bold">{price}</div>
				</th>
			</tr>
		</tbody>
	);
}
