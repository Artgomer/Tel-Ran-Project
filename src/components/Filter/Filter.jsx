import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import ArrowDownIcon from "../../assets/svg/arrow-down.svg?react";
import { Input } from '../';
import {
	filterProductsByDiscont,
	filterProductsByPriceRange,
	sortPriceByAsc,
	sortPriceByDesc,
	sortProductsById,
	sortProductsByNameAFrom,
	sortProductsByNameZFrom,
} from '../../store/productsSlice';
import styles from './Filter.module.css';

export const Filter = ({ content }) => {
	//создадим red ы для эллементов
	//ref в React используется для получения ссылки на DOM-элемент или React-компонент в виртуальном DOM.
	const refFrom = useRef();
	const refTo = useRef();
	const refDiscont = useRef();
	const refSelect = useRef();

	//сбрасываем занчение формы при изменение конента
	useEffect(() => {
		refFrom.current.value = '';
		refTo.current.value = '';
		refSelect.current.value = 'default';
		//Если контент не sale снимаем флажок скидки
		if (content !== 'sale') refDiscont.current.checked = false;
	}, [content]);

	//Получим доступ к Redux store
	const dispatch = useDispatch();

	//Обработчик изменение цены 
	const handlePrice = (e) => {
		e.preventDefault();

		const targetInput = e.target.name;
		let newValue = e.target.value;

		//Формируем диапазон цен для фильтрации
		const range = {
			from: targetInput === 'from' ? newValue || 0 : refFrom.current.value || 0,
			to:
				targetInput === 'to'
					? newValue || Infinity
					: refTo.current.value || Infinity,
		};

		//Формируем функцию фильтрации по цене
		dispatch(filterProductsByPriceRange(range));
	};

	// Обработчик изменения флажка скидки
	const handleDiscont = (e) => {

		//Диспатчим экшен для фильтрации при наличии скидки
		dispatch(filterProductsByDiscont(e.target.checked));
	};

	//Обработчик изменения выбора
	const handleSelect = (e) => {
		switch (e.target.value) {
			case 'default':
				dispatch(sortProductsById());
				break;
			case 'priceAsc':
				dispatch(sortPriceByAsc());
				break;
			case 'priceDesc':
				dispatch(sortPriceByDesc());
				break;
			case 'nameA':
				dispatch(sortProductsByNameAFrom());
				break;
			case 'nameZ':
				dispatch(sortProductsByNameZFrom());
				break;
			default:
				break;
		}
	};
	return (
		<div className={styles.filter_wrapper}>
			<div className={styles.price_filter}>
				<span>Price</span>
				<Input
					name="from"
					type="number"
					step=".1"
					min="0"
					ref={refFrom}
					placeholder="from"
					content="filter"
					onChange={handlePrice}
				/>

				<Input
					name="to"
					type="number"
					step=".1"
					min="0"
					ref={refTo}
					placeholder="to"
					content="filter"
					onChange={handlePrice}
				/>
			</div>
			{content !== 'sale' && (
				<div className={styles.discont_filter}>
					<span>Discounted items</span>

					<input
						id="input"
						className={styles.discont}
						ref={refDiscont}
						name="discont"
						type="checkbox"
						content="discont"
						onClick={handleDiscont}
					/>
					<label htmlFor="input" className={styles.checkbox_label} />
				</div>
			)}
			<div className={styles.select_filter}>
				<span>Sorted</span>
				<div className={styles.select_wrapper}>
					<select
						className={styles.select}
						onChange={handleSelect}
						ref={refSelect}
					>
						<option value="default">by default</option>
						<option value="priceAsc">price by ascending</option>
						<option value="priceDesc">price by descending</option>
						<option value="nameA">by product title from A to Z</option>
						<option value="nameZ">by product title from Z to A</option>
					</select>
					<ArrowDownIcon className={styles.select_icon} />
				</div>
			</div>
		</div>
	);
};
