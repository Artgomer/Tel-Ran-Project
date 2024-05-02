import { createSlice } from '@reduxjs/toolkit';

const updateLocalStorage = (list, amount, summ) => {
	const data = {
		cartList: list,
		totalAmount: amount,
		totalSumm: summ,
	};

	localStorage.setItem('cart', JSON.stringify(data));
};

const localStorageData = JSON.parse(localStorage.getItem('cart'));

const cartSlice = createSlice({
	name: 'cart',

	initialState: {
		cartList: localStorageData?.cartList || [],
		totalAmount: +localStorageData?.totalAmount || 0,
		totalSumm: +localStorageData?.totalSumm || 0,
	},

	reducers: {
		addProductToCart(state, action) {
			state.totalAmount += state.totalAmount ? 1 : action.payload.amount ?? 1;
			const tempTotalSumm =
				state.totalSumm +
				(action.payload.discont_price || action.payload.price);
			state.totalSumm = +tempTotalSumm.toFixed(2);

			const index = state.cartList.findIndex(
				(item) => item.id === action.payload.id
			);
			if (index === -1) {
				state.cartList.unshift({ ...action.payload, amount: action.payload.amount ?? 1 });
			} else {
				state.cartList[index].amount += 1;
			}
			updateLocalStorage(state.cartList, state.totalAmount, state.totalSumm);
		},

		decrementProductInCart(state, action) {
			const tempProduct = state.cartList.find(
				(item) => action.payload === item.id
			);

			tempProduct.amount = tempProduct.amount - 1;
			state.totalAmount = state.totalAmount - 1;
			const decrTotalSumm =
				state.totalSumm - (tempProduct.discont_price || tempProduct.price);
			state.totalSumm = +decrTotalSumm.toFixed(2);
			state.cartList = state.cartList.filter((item) => item.amount !== 0);
			updateLocalStorage(state.cartList, state.totalAmount, state.totalSumm);
		},

		removeProductFromCartById(state, action) {
			const tempUnit = state.cartList.find((el) => action.payload === el.id);

			const targetSumm =
				state.totalSumm -
				(tempUnit.discont_price || tempUnit.price) * tempUnit.amount;
			state.totalSumm = +targetSumm.toFixed(2);

			state.totalAmount = state.totalAmount - tempUnit.amount;
			tempUnit.amount = 0;

			state.cartList = state.cartList.filter(
				(product) => product.id !== action.payload
			);
			updateLocalStorage(state.cartList, state.totalAmount, state.totalSumm);
		},

		removeAllProductsFromCart(state) {
			state.cartList = [];
			state.totalAmount = 0;
			state.totalSumm = 0;

			updateLocalStorage(state.cartList, state.totalAmount, state.totalSumm);
		},
	},
});

export const {
	addProductToCart,
	decrementProductInCart,
	removeProductFromCartById,
	removeAllProductsFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
