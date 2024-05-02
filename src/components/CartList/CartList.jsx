// Импортируем хук useSelector из библиотеки react-redux для доступа к состоянию корзины в Redux Store
import { useSelector } from 'react-redux';

//// Импортируем компонент CartItem из файла "../CartItem", который будет отображать каждый элемент корзины
import { CartItem } from '../';
import styles from './CartList.module.css';

// Определяем функциональный компонент CartList, который отображает список элементов корзины
export const CartList = () => {

	// Получаем список элементов корзины из Redux Store с помощью хука useSelector

	const cartList = useSelector((store) => store.cart.cartList);

	// Возвращаем разметку компонента CartList
	return (
		<div className={styles.cart_list}>
			
			{/* Маппим каждый элемент корзины и передаем его в компонент CartItem */}
			{cartList.map((item, index) => (
				<CartItem key={index} {...item} />
			))}
		</div>
	);
};
