import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CartItems(props) {
	const {
		imageUrl,
		make,
		model,
		price,
		handleRemove,
		index,
		startAt,
		endAt,
		type,
		pricePerDay,
	} = props;

	return (
		<tbody>
			{/* row 1 */}
			<tr className="border-[#d1cdcd] border-2">
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
					<div className="font-bold">{type}</div>
				</td>
				<td className="text-center">
					{type === "Rent" ? (
						<div className="dropdown">
							<label
								tabIndex={0}
								className="btn btn-xs btn-outline btn-primary m-1"
							>
								Details
							</label>
							<div
								tabIndex={0}
								className="dropdown-content card card-compact w-64 p-2 shadow bg-accent text-primary"
							>
								<div className="card-body">
									<h3 className="card-title">Rental Info</h3>
									From: {startAt}
									<br></br>
									To: {endAt}
									<br></br>
									Price Per Day: {pricePerDay}
								</div>
							</div>
						</div>
					) : (
						"-"
					)}
				</td>
				<th>
					<div className="font-bold">{price}</div>
				</th>
				<th className="text-center">
					<button onClick={() => handleRemove(index)}>
						<FontAwesomeIcon icon={faTrash} size="xl" />
					</button>
				</th>
			</tr>
		</tbody>
	);
}
