import styles from './ProductPrice.module.css';

export const ProductPrice = ({ price, discont_price, content }) => {
	return (
		<div className={`${styles.price_wrapper} ${styles[content]}`}>
			<p className={`${styles.price} ${styles[content]}`}>
				&#x24;{discont_price || price}
			</p>
			{discont_price &&
				<p className={styles.old_price}>&#x24;{price}</p>
			}
		</div>
	);
};
