import { NavLink } from 'react-router-dom';
import { CategoriesList } from '../';
import styles from './Catalog.module.css';

export const Catalog = () => {
	return (
		<section id="catalog" className={styles.catalog}>
			<div className="container">
				<div className={styles.catalog_top}>
					<h2 className="title">Categories</h2>
					<NavLink to="/categories" className={styles.catalog_link}>All categories
					</NavLink>
				</div>
				<CategoriesList listLength={4} wrap={false} />
			</div>
		</section>
	);
};
