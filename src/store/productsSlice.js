import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		pageTitle: {},
		productslist: [],
	},
	reducers: {
		addProductsList(state, action) {
			if (action.payload.category.title) {
				state.pageTitle = action.payload.category.title;
				state.productslist = action.payload.data.map((product) => ({
					...product,
					rangeVisible: true,
					discontVisible: true,
				}));
			} else {
				state.pageTitle = { title: 'All products' };
				state.productslist = action.payload.data.map((product) => ({
					...product,
					rangeVisible: true,
					discontVisible: true,
				}));
			}
		},

		addProductsListWhithSale(state) {
			state.pageTitle = { title: 'Product with Sale' };
			state.productslist = state.productslist.filter(
				(product) => product.discont_price
			);
		},

		filterProductsByPriceRange(state, action) {
			const { from, to } = action.payload;

			state.productslist = state.productslist.map((product) => ({
				...product,
				rangeVisible:
					product.price >= +from &&
					(product.discont_price || product.price) <= +to,
			}));
		},

		filterProductsByDiscont(state, action) {
			state.productslist = state.productslist.map((product) => ({
				...product,
				discontVisible: action.payload
					? product.discont_price ?? false
					: product.discont_price ?? true,
			}));
		},

		sortProductsById(state) {
			state.productslist = [...state.productslist].sort((a, b) => a.id - b.id);
		},

		sortPriceByDesc(state) {
			state.productslist = [...state.productslist].sort((a, b) => {
				const tempA = a.discont_price || a.price;
				const tempB = b.discont_price || b.price;
				return tempA === tempB ? 0 : tempA > tempB ? -1 : 1;
			});
		},

		sortPriceByAsc(state) {
			state.productslist = [...state.productslist].sort((a, b) => {
				const priceA = a.discont_price || a.price;
				const priceB = b.discont_price || b.price;
				return priceA === priceB ? 0 : priceA > priceB ? 1 : -1;
			});
		},

		sortProductsByNameAFrom(state) {
			state.productslist = [...state.productslist].sort((a, b) => {
				const titleA = a.title.toUpperCase();
				const titleB = b.title.toUpperCase();
				return titleA === titleB ? 0 : titleA > titleB ? 1 : -1;
			});
		},

		sortProductsByNameZFrom(state) {
			state.productslist = [...state.productslist].sort((a, b) => {
				const titleA = a.title.toUpperCase();
				const titleB = b.title.toUpperCase();
				return titleA === titleB ? 0 : titleA > titleB ? -1 : 1;
			});
		},
	},
});

export const {
	addProductsList,
	addProductsListWhithSale,
	filterProductsByPriceRange,
	filterProductsByDiscont,
	sortProductsById,
	sortPriceByAsc,
	sortPriceByDesc,
	sortProductsByNameAFrom,
	sortProductsByNameZFrom,
} = productsSlice.actions;
export default productsSlice.reducer;
