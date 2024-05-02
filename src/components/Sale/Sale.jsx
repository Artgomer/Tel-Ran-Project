import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsList } from '../';
import { fetchAllProductsList } from '../../api/products';
import styles from './Sale.module.css';

export const Sale = () => {
	//Инициализируем хук для отправки действий в Redux Store
	let dispatch = useDispatch();

    // Вызываем хук useEffect, который будет вызывать fetchAllProductsList('sale') при первом рендеринге компонента
	useEffect(() => dispatch(fetchAllProductsList('sale')), [dispatch]);
    
	// Получаем из Redux Store список продуктов с помощью хука useSelector
	const products = useSelector((store) => store.products.productslist)
	    
		// Фильтруем продукты, оставляя только те, у которых есть скидка (discont_price)
		.filter((product) => product.discont_price)
		
        // Выбираем первые 4 продукта из отфильтрованного списка
		.slice(0, 4);

	return (
		<section id="sale" className={styles.sale}>
			<div className="container">
				<h2 className="title">Sale</h2>
				<ProductsList products={products} wrap={false} />
			</div>
		</section>
	);
};
