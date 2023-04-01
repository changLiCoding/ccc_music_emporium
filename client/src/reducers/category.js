const MAKE_A_TO_Z = "make-a-to-z";
const MAKE_Z_TO_A = "make-z-to-a";
const PRICE_HIGH_TO_LOW = "price-high-to-low";
const PRICE_LOW_TO_HIGH = "price-low-to-high";
const QUERY_PRODUCT_BY_CATEGORY = "query-product-by-category";

export default function reducer(state, action) {
	switch (action.type) {
		case QUERY_PRODUCT_BY_CATEGORY:
			return [...action.products];
		case MAKE_A_TO_Z:
			return [...state].sort((a, b) => a.make.localeCompare(b.make));

		case MAKE_Z_TO_A:
			return [...state].sort((a, b) => b.make.localeCompare(a.make));
		case PRICE_HIGH_TO_LOW:
			return [...state].sort((a, b) => b.price_in_cents - a.price_in_cents);
		case PRICE_LOW_TO_HIGH:
			return [...state].sort((a, b) => a.price_in_cents - b.price_in_cents);
		default:
			throw new Error(`
      Tried to reduce with unsupported action type: ${action.type}
      `);
	}
}
