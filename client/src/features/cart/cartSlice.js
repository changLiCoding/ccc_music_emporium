import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
	? {
			cart: JSON.parse(localStorage.getItem("cart")),
			totalCartPrice: JSON.parse(localStorage.getItem("cart")).reduce(
				(prev, curr) => {
					return curr.daysRent
						? prev + curr.daysRent * curr.rent_rate_in_cents
						: prev + curr.price_in_cents;
				},
				0
			),
	  }
	: { cart: [], totalCartPrice: 0 };

const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
});

console.log(cartSlice);
export default cartSlice.reducer;
