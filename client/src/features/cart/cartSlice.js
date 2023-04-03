import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getDaysDifference from "../../helpers/getDayDifference";

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

// export const setRent = createAsyncThunk(
// 	"cart/setRent",
// 	async (payload, thunkAPI) => {
// 		console.log(payload);
// 		const { startAt, endAt, product } = payload;
// 		const daysRent = getDaysDifference(startAt, endAt);
// 		const state = thunkAPI.getState();
// 		const newCart = [
// 			...state.cart.cart,
// 			{ ...product, daysRent, startAt, endAt },
// 		];
// 		localStorage.setItem("cart", JSON.stringify(newCart));
// 		console.log("New Cart content: ", newCart);
// 		return newCart;
// 	},
// 	{
// 		// To handle non-serializable values, set the `serializableCheck` field to `false`
// 		serializableCheck: false,
// 	}
// );

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
		setRent: (store, action) => {
			console.log(action);
			const { startAt, endAt, product } = action.payload;
			const daysRent = getDaysDifference(startAt, endAt);
			const newCart = [...store.cart, { ...product, daysRent, startAt, endAt }];
			localStorage.setItem("cart", JSON.stringify(newCart));
			console.log("New Cart content: ", newCart);
			store.cart = newCart;
		},
	},
	// extraReducers: (builder) => {
	// 	builder.addCase(setRent.fulfilled, (state, action) => {
	// 		state.cart = action.payload;
	// 	});
	// },
});

console.log(cartSlice);
export default cartSlice.reducer;
export const { emptyCart, removeFromCart, addCart, setRent } =
	cartSlice.actions;
