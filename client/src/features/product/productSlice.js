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

const initialState = { products: [], isLoading: false, error: null };

const productSlice = createSlice({
	name: "product",
	initialState: initialState,
	reducers: {},
});

export const fetchProducts = createAsyncThunk(
	"product/fetchProducts",
	async () => {
		const products = await getAllProducts();
		return products;
	}
);

// productSlice.reducer((builder) => {
// 	builder
// 		.addCase(fetchProducts.pending, (state) => {
// 			state.isLoading = true;
// 		})
// 		.addCase(fetchProducts.fulfilled, (state, action) => {
// 			state.isLoading = false;
// 			state.products = action.payload;
// 		})
// 		.addCase(fetchProducts.rejected, (state, action) => {
// 			state.isLoading = false;
// 			state.error = action.error.message;
// 		});
// });

export default productSlice.reducer;
