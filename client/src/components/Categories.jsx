import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
	return (
		<div>
			CATEGORIES PAGE
			<div>
				<ul>
					<li>
						<Link to='/categories/guitars'>Guitars</Link>
					</li>
					<li>
						<Link to='/categories/keyboards'>Keyboard</Link>
					</li>
					<li>
						<Link to='/categories/drums'>Drums</Link>
					</li>
					<li>
						<Link to='/categories/pro%20audio%20%26%20recording'>
							Pro Audio & Recording
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
