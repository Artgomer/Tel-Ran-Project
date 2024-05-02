import { createSlice } from '@reduxjs/toolkit';

const productInfoSlice = createSlice({
	name: 'productInfo',
	initialState: {},
	reducers: {
		getProductInfo(_, action) {
			return !action.payload || action.payload.status === 'ERR'
				? { status: '*' }
				: { ...action.payload[0] };
		},
	},
});

export const { getProductInfo } = productInfoSlice.actions;
export default productInfoSlice.reducer;
