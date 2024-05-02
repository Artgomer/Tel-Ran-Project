import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
	name: 'categories',
	initialState: [],
	reducers: {
		addCategoriesList(_, action) {
			return action.payload.map((category) => ({ ...category }));
		},
	},
});

export const { addCategoriesList } = categoriesSlice.actions;
export default categoriesSlice.reducer;
