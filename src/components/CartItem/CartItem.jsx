// Импортируем хук useDispatch из библиотеки react-redux для отправки действий в Redux Store
import { useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';
import CloseIcon from "../../assets/svg/close.svg?react";
import { ProductPrice } from '../';

//// Импортируем функции для работы с корзиной из Redux Slice "cartSlice"
import {
	addProductToCart,
	decrementProductInCart,
	removeProductFromCartById,
} from '../../store/cartSlice';
import { base_url } from '../../api/url';
import styles from './CartItem.module.css';

// Определяем функциональный компонент CartItem, 
//который представляет элемент корзины с информацией о продукте
export const CartItem = (props) => {

	// Деструктурируем пропсы, чтобы получить информацию о продукте
	const { id, image, title, price, discont_price, amount } = props;

	// Получаем функцию dispatch из хука useDispatch для отправки действий в Redux Store
	const dispatch = useDispatch();

	// Возвращаем разметку элемента корзины
	return (
		<li className={styles.cart_item}>

            {/* Создаем ссылку NavLink для перехода на страницу продукта */}
			<NavLink to={`/products/${id}`} className={styles.item_wrapper}>
				<img src={`${base_url}${image}`} alt={title} />
			</NavLink>

			<div className={styles.item_content}>
				<h2 className={styles.title}>{title}</h2>

				<div className={styles.item_bottom}>
					<div className={styles.counter}>
						<button type="button" className={styles.count_btn} onClick={() => dispatch(decrementProductInCart(id))}>
							-
						</button>

						<p>{amount}</p>
						<button type="button" className={styles.count_btn} onClick={() => dispatch(addProductToCart(props))}>
							+
						</button>

					</div>
					<ProductPrice
						price={price}
						discont_price={discont_price}
						content="cart"
					/>
				</div>
			</div>

			<CloseIcon
				className={styles.del_btn}
				onClick={() => dispatch(removeProductFromCartById(id))}
			/>
		</li>
	);
};
