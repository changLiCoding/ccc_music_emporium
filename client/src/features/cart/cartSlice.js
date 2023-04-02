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
			isLoading: true,
	  }
	: { cart: [], totalCartPrice: 0, isLoading: true };

const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {
		emptyCart: (store) => {
			store.cart = [];
			store.totalCartPrice = 0;
		},
		addCart: (store, action) => {
			console.log("Add cart from Redux");
			console.log(action);
			console.log("See what is in product: ", action.payload.product);
			const newCart = [...store.cart, action.payload.product];
			localStorage.setItem("cart", JSON.stringify(newCart));
			store.cart = newCart;
		},
		removeFromCart: (store, action) => {
			console.log(action);
			const newCartArr = store.cart.filter((product, index) => {
				return index !== action.payload;
			});
			store.cart = newCartArr;
			localStorage.setItem("cart", JSON.stringify(store.cart));
		},
	},
});

console.log(cartSlice);
export default cartSlice.reducer;
export const { emptyCart, removeFromCart, addCart } = cartSlice.actions;
