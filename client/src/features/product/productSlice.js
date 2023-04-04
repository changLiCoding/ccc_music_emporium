import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import handleAddToCartNotify from "../../helpers/handleAddToCartNotify";

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async (payload) => {
		const { name, nameType } = payload;
		const response = await axios.get("http://localhost:8080/api/products");
		const products = response.data.products;
		return nameType === "category"
			? products.filter((product) => product.category_name === name)
			: products.filter((product) => product.sub_category_name === name);
	}
);

export const updateProductReduxQuantity = createAsyncThunk(
	"products/updateProductReduxQuantity",
	async (payload, thunkAPI) => {
		const { cartProduct, updatedType, message } = payload;
		console.log("Thunk API content :", thunkAPI);
		console.log("payload content: ", payload);
	}
);

const initialState = { products: [], isLoading: false, error: null };

const productSlice = createSlice({
	name: "products",
	initialState: initialState,
	reducers: {
		make_a_to_z: (store) => {
			const newProducts = store.products.sort((a, b) =>
				a.make.localeCompare(b.make)
			);
			store.products = newProducts;
		},
		make_z_to_a: (store) => {
			const newProducts = store.products.sort((a, b) =>
				b.make.localeCompare(a.make)
			);
			store.products = newProducts;
		},
		price_high_to_low: (store) => {
			const newProducts = store.products.sort(
				(a, b) => b.price_in_cents - a.price_in_cents
			);
			store.products = newProducts;
		},
		price_low_to_high: (store) => {
			const newProducts = store.products.sort(
				(a, b) => a.price_in_cents - b.price_in_cents
			);
			store.products = newProducts;
		},
	},
	extraReducers: {
		[fetchProducts.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchProducts.fulfilled]: (state, action) => {
			console.log("FETCHPRODUCTS FULFILLED ACTION AND PAYLOAD", action);
			state.isLoading = false;
			state.products = action.payload;
		},
		[fetchProducts.rejected]: (state) => {
			state.isLoading = false;
		},
		[updateProductReduxQuantity.pending]: (state) => {
			state.isLoading = true;
		},
		[updateProductReduxQuantity.fulfilled]: (state, action) => {
			console.log(
				"updateProductReduxQuantity FULFILLED ACTION AND PAYLOAD",
				action
			);
			state.isLoading = false;
			state.products = action.payload;
		},
		[updateProductReduxQuantity.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export default productSlice.reducer;
export const {
	selectByCategory,
	make_a_to_z,
	make_z_to_a,
	price_high_to_low,
	price_low_to_high,
} = productSlice.actions;
