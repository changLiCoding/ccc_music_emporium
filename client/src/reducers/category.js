const MAKE_A_TO_Z = "make-a-to-z";
const MAKE_Z_TO_A = "make-z-to-a";
const PRICE_HIGH_TO_LOW = "price-high-to-low";
const PRICE_LOW_TO_HIGH = "price-low-to-high";
const QUERY_PRODUCT_BY_CATEGORY = "query-product-by-category";

export default function reducer(state, action) {
	switch (action.type) {
		case QUERY_PRODUCT_BY_CATEGORY:
			return;
		case MAKE_A_TO_Z:
			return;

		case MAKE_Z_TO_A:
			return;
		case PRICE_HIGH_TO_LOW:
			return;
		case PRICE_LOW_TO_HIGH:
			return;
		default:
			throw new Error(`
      Tried to reduce with unsupported action type: ${action.type}
      `);
	}
}
