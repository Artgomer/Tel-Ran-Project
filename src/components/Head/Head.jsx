import { NavLink } from 'react-router-dom';
import styles from './Head.module.css';

export const Head = () => {
	return (
		<section id="head" className={styles.head}>
			<div className="container">
				<div className={styles.head_content}>
					<h1 className={styles.head_title}>
						Amazing Discounts on Garden Products!
					</h1>
					<NavLink
						to="/products/"
						state="sale"
						className={styles.head_link}
					>
						Check out
					</NavLink>
				</div>
			</div>
		</section>
	);
};
