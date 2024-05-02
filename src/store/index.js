import cartSlice from './cartSlice';
import categoriesSlice from './categoriesSlice';
import productInfoSlice from './productInfoSlice';
import productsSlice from './productsSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	categories: categoriesSlice,
	products: productsSlice,
	productInfo: productInfoSlice,
	cart: cartSlice,
});

export const store = configureStore({ reducer: rootReducer });
