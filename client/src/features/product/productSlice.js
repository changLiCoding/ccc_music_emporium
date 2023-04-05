import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import handleAddToCartNotify from "../../helpers/handleAddToCartNotify";

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async (payload, thunkAPI) => {
		try {
			const { name, nameType } = payload;
			const response = await axios.get("http://localhost:8080/api/products");
			const products = response.data.products;
			return nameType === "category"
				? products.filter((product) => product.category_name === name)
				: products.filter((product) => product.sub_category_name === name);
		} catch (error) {
			console.error(error);
			return thunkAPI.rejectWithValue(`SOMETHING WENT WRONG: ${error.message}`);
		}
	}
);

export const updateProductReduxQuantity = createAsyncThunk(
	"products/updateProductReduxQuantity",
	async (payload, { dispatch }) => {
		const { cartProduct, updatedType, message } = payload;
		try {
			let productToUpdate = {};
			const response = await axios.post(
				`http://localhost:8080/api/categories/${productToUpdate.category_name}`,
				{
					product: {
						...cartProduct,
						stock_quantity:
							updatedType === "decrement"
								? cartProduct.stock_quantity - 1
								: cartProduct.stock_quantity + 1,
					},
				}
			);
			const newStock = response.data.returnedNewProduct[0].stock_quantity;
			productToUpdate = { ...cartProduct, stock_quantity: newStock };
			// Dispatch success action with updated product quantity
			dispatch(updateProductQuantitySuccess({ productToUpdate, message }));
			// const oldProducts = thunkAPI.getState().products.products;
			// const updatedIndex = oldProducts.findIndex(
			// 	(product) => product.model === cartProduct.model
			// );
			// productToUpdate = { ...oldProducts[updatedIndex] };
			// if (updatedType === "increment") {
			// 	productToUpdate.stock_quantity = productToUpdate.stock_quantity + 1;
			// } else if (updatedType === "decrement") {
			// 	productToUpdate.stock_quantity = productToUpdate.stock_quantity - 1;
			// }
			// const newProducts = [...oldProducts];
			// console.log(oldProducts, oldProducts[updatedIndex]);
			// newProducts[updatedIndex] = productToUpdate;
			// console.log("payload content: ", payload);
			// console.log("RETURN FROM UPDATEPRODUCTREDUXQuantity", oldProducts);
			// console.log("RESPONSE MESSAGES FROM SERVER: ", response.data);
			// message && handleAddToCartNotify(message);
			// return newProducts;
		} catch (error) {
			console.error(error);
			dispatch(updateProductQuantityError({ cartProduct, error }));
		}
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
		updateProductQuantitySuccess: (store, action) => {
			const { message, productToUpdate } = action.payload;
			const productIndex = store.products.findIndex(
				(product) => product.id === productToUpdate.id
			);
			if (productIndex >= 0) {
				const newProducts = [...store.products];
				newProducts.splice(productIndex, 1, { ...productToUpdate });
				store.products = [...newProducts];
				message && handleAddToCartNotify(message);
				console.log("Product quantity updated successfully");
			}
		},
		updateProductQuantityError: (store, action) => {
			const { cartProduct, error } = action.payload;
			console.error("Error updating product quantity:", error);
		},
		// updateProductReduxQuantity: async (state, action) => {
		// 	console.log(action);
		// 	const { cartProduct, updatedType, message } = action.payload;
		// 	const productIndex = state.products.findIndex(
		// 		(product) => product.id === cartProduct.id
		// 	);

		// 	if (productIndex >= 0) {
		// 		const productToUpdate = state.products[productIndex];

		// 		// Update the product quantity in the database
		// 		await axios
		// 			.post(
		// 				`http://localhost:8080/api/categories/${productToUpdate.category_name}`,
		// 				{
		// 					product: {
		// 						...productToUpdate,
		// 						stock_quantity:
		// 							updatedType === "decrement"
		// 								? productToUpdate.stock_quantity - 1
		// 								: productToUpdate.stock_quantity + 1,
		// 					},
		// 				}
		// 			)
		// 			.then((response) => {
		// 				console.log("when to the database???");
		// 				const newStock = response.data.returnedNewProduct[0].stock_quantity;
		// 				console.log("New Stock of the product is : ", newStock);
		// 				// Update the product quantity in the Redux state
		// 				console.log(
		// 					"Here is state.products[productIndex]:",
		// 					state.products[productIndex]
		// 				);
		// 				const newProducts = [...state.products];
		// 				newProducts.splice(productIndex, 1, {
		// 					...state.products[productIndex],
		// 					stock_quantity: newStock,
		// 				});
		// 				state.products = [...newProducts];
		// 				message && handleAddToCartNotify(message);
		// 				console.log(
		// 					"Product quantity updated successfully:",
		// 					response.data
		// 				);
		// 			})
		// 			.catch((error) => {
		// 				console.error("Error updating product quantity:", error);
		// 			});
		// 	}

		// 	// Show the toast message
		// },
		// updateProductReduxQuantity: async (store, action) => {
		// 	try {
		// 		let productToUpdate = {};
		// 		const { cartProduct, updatedType, message } = action.payload;
		// 		const newProducts = [...store.products];
		// 		const updatedIndex = newProducts.findIndex(
		// 			(product) => product.model === cartProduct.model
		// 		);
		// 		productToUpdate = { ...newProducts[updatedIndex] };
		// 		if (updatedType === "increment") {
		// 			productToUpdate.stock_quantity = productToUpdate.stock_quantity + 1;
		// 		} else if (updatedType === "decrement") {
		// 			productToUpdate.stock_quantity = productToUpdate.stock_quantity - 1;
		// 		}

		// 		// console.log(oldProducts, oldProducts[updatedIndex]);
		// 		newProducts[updatedIndex] = productToUpdate;
		// 		console.log("payload content: ", action.payload);
		// 		console.log("RETURN FROM UPDATEPRODUCTREDUXQuantity", newProducts);
		// 		const response = await axios.post(
		// 			`http://localhost:8080/api/categories/${productToUpdate.category_name}`,
		// 			{
		// 				product: { ...productToUpdate },
		// 			}
		// 		);
		// 		console.log("RESPONSE MESSAGES FROM SERVER: ", response.data);
		// 		message && handleAddToCartNotify(message);
		// 		store.products.products = newProducts;
		// 	} catch (error) {
		// 		console.error("Error updating product quantity:", error);
		// 	}
		// },
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				console.log("FETCHPRODUCTS FULFILLED ACTION AND PAYLOAD", action);
				state.isLoading = false;
				state.products = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				console.log(action);
				state.isLoading = false;
			});
		builder
			.addCase(updateProductReduxQuantity.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updateProductReduxQuantity.fulfilled, (state) => {
				state.loading = false;
			})
			.addCase(updateProductReduxQuantity.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
		// [updateProductReduxQuantity.pending]: (state) => {
		// 	state.isLoading = true;
		// },
		// [updateProductReduxQuantity.fulfilled]: (state, action) => {
		// 	console.log(
		// 		"updateProductReduxQuantity FULFILLED ACTION AND PAYLOAD",
		// 		action
		// 	);
		// 	state.isLoading = false;
		// 	state.products = action.payload;
		// },
		// [updateProductReduxQuantity.rejected]: (state, action) => {
		// 	console.log(action);

		// 	state.isLoading = false;
		// },
	},
});

export default productSlice.reducer;
export const {
	updateProductQuantityError,
	updateProductQuantitySuccess,
	selectByCategory,
	make_a_to_z,
	make_z_to_a,
	price_high_to_low,
	price_low_to_high,
} = productSlice.actions;
