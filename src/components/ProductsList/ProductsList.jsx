import { useEffect, useState } from 'react';
import { Pagination, ProductItem } from '../';
import styles from './ProductsList.module.css';

export const ProductsList = ({ products, wrap = true }) => {
	    // Состояние для хранения текущей страницы
	const [currentPage, setCurrentPage] = useState(1);
	    // Количество продуктов на странице
	const quantity = 8;

    // Расчет индексов для отображаемых продуктов
	let lastElem = currentPage * quantity;
	let firstElem = lastElem - quantity;
	    // Количество страниц
	let pagesNumber = Math.ceil(products.length / quantity);

    // Фильтрация продуктов на основе текущей страницы
	const productsListPage = products.slice(firstElem, lastElem);

	useEffect(() => {

		        // Проверка текущей страницы при изменении списка продуктов
		if (Math.ceil(products.length / quantity) < currentPage) {
			setCurrentPage(Math.ceil(products.length / quantity) || 1);
		}
	}, [products, currentPage]);

	return (
		<>
		            {/* Список продуктов */}
			<ul className={styles.products_list + ' ' + (!wrap && styles.nowrap)}>
				{productsListPage?.map((elem, index) => (
					// Компонент для отображения отдельного продукта
					<ProductItem key={index} {...elem} />
				))}
			</ul>
			
			{/* Пагинация, если количество страниц больше 1 */}
			{pagesNumber > 1 && (
				<Pagination
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					pagesNumber={pagesNumber}
				/>
			)}
		</>
	);
};
