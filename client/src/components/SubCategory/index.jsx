import React from "react";
import { useParams } from "react-router-dom";

import InfoBar from "../Category/InfoBar";
import SideBars from "../Category/SideBars";
import SubCategoryCards from "./SubCategoryCards";

export default function SubCategory() {
	const { sub_categories_name, name } = useParams();

	return (
		<main className='flex flex-col mx-auto max-w-auto mb-12'>
			<InfoBar
				category={name}
				subcategory={sub_categories_name}></InfoBar>
			<div className='flex justify-center'>
				<SideBars></SideBars>
				<SubCategoryCards />
			</div>
		</main>
	);
}
