import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllProducts = async () => {
	try {
		const res = await axios.get("http://localhost:8080/api/products");
		return res.data.products;
	} catch (error) {
		console.error(error);
	}
};

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async () => {
		const products = await getAllProducts();
		console.log(products);
		return products;
	}
);
const initialState = { products: [], isLoading: false, error: null };

const productSlice = createSlice({
	name: "products",
	initialState: initialState,
	reducers: {
		selectByCategory: (store, action) => {
			console.log(action.payload);
			store.products = store.products.filter(
				(product) => product.category_name === action.payload
			);
			console.log(store.products);
		},
	},
	extraReducers: {
		[fetchProducts.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchProducts.fulfilled]: (state, action) => {
			// console.log(action);
			state.isLoading = false;
			state.products = action.payload;
		},
		[fetchProducts.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export default productSlice.reducer;
export const { selectByCategory } = productSlice.actions;
