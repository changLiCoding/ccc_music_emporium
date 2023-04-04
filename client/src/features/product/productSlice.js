import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllProducts = async () => {
	try {
		const res = await axios.get("http://localhost:8080/api/products");
		console.log(res.data.products);
		return res.data.products;
	} catch (error) {
		console.error(error);
	}
};

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async (payload) => {
		const { name, nameType } = payload;
		const products = await getAllProducts();
		return nameType === "category"
			? products.filter((product) => product.category_name === name)
			: products.filter((product) => product.sub_category_name === name);
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
			console.log(action);
			state.isLoading = false;
			state.products = action.payload;
		},
		[fetchProducts.rejected]: (state) => {
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
