import { getProductInfo } from '../store/productInfoSlice';
import {
	addProductsList,
	addProductsListWhithSale,
} from '../store/productsSlice';
import { base_url } from './url';

export const fetchCategoryListById = (id) => {
	return function (dispatch) {
		fetch(`${base_url}/categories/${id}`)
			.then((res) => res.json())
			.then((data) => dispatch(addProductsList(data)));
	};
};

export const fetchAllProductsList = (type) => {
	return function (dispatch) {
		fetch(`${base_url}/products/all`)
			.then((res) => res.json())
			.then((data) => {
				dispatch(addProductsList({ data, category: {} }));
				if (type === 'sale') {
					dispatch(addProductsListWhithSale());
				}
			});
	};
};

export const fetchProductByID = (product) => {
	return function (dispatch) {
		fetch(base_url + product)
			.then((res) => res.json())
			.then((data) => dispatch(getProductInfo(data)));
	};
};
