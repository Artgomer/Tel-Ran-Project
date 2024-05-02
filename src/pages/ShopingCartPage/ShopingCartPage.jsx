import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CartList, Order } from '../../components';
import styles from './ShopingCartPage.module.css';

export const ShopingCartPage = () => {
	const totalSumm = useSelector((store) => store.cart.totalSumm);

	return (
		<section className={styles.cart_page}>
			<div className="container">
				<div className={styles.cart_title}>
					<h1 className="title">Shopping cart</h1>
					<NavLink to="/products" state="all" className={styles.back_link}>
						<p>Back to the store</p>
					</NavLink>
				</div>
				<div className={styles.cart_wrapper}>
					{totalSumm === 0 &&
						<div>
							<p className={styles.empty_cart}>Looks like you have no items in your basket currently.</p>
							<NavLink to="/products" state="all" className={styles.back_btn}>Continue shopping</NavLink>
						</div>}
					{totalSumm !== 0 &&
						<>
							<div className={styles.cart_content}>
								<CartList />
							</div>
							<div className={styles.order_block}>
								<Order totalSumm={totalSumm} />
							</div>
						</>
					}
				</div>
			</div>
		</section>
	);
};
