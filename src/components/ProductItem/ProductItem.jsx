// Импортируем хук useDispatch из react-redux для отправки действий в Redux Store
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// Импортируем действие addProductToCart из Redux Slice cartSlice
import { addProductToCart } from '../../store/cartSlice';
// Импортируем компоненты ProductPrice и Button
import { ProductPrice, Button } from '../';
import { base_url } from '../../api/url';
import styles from './ProductItem.module.css';

export const ProductItem = (props) => {
	
	// Деструктурируем свойства из пропсов компонента
	const { id, image, title, price, discont_price } = props;

	//// Инициализируем функцию dispatch для отправки действий в Redux Store
	const dispatch = useDispatch();

	// Функция для добавления товара в корзину
	const addToCart = (e) => {
		e.preventDefault();
		dispatch(addProductToCart(props)); // Отправляем действие addProductToCart в Redux Store с данными о товаре
	};

    // Вычисление скидки в процентах
	const discont =
		discont_price && Math.round(((price - discont_price) * 100) / price);

	return (
		<li className={styles.product_item}>
			<NavLink to={`/products/${id}`}>
				<div className={styles.img_wrapper}>
					{discont && <span className={styles.product_discont}>-{discont}%</span>}
					<img src={`${base_url}${image}`} alt={title} />
					<Button
						text="Add to cart"
						content="product_cart"
						onClick={addToCart}
					/>
				</div>
				<div className={styles.product_content}>
					<h3 className={styles.product_title}>{title}</h3>
					<ProductPrice price={price} discont_price={discont_price} />
				</div>
			</NavLink>
		</li>
	);
};
