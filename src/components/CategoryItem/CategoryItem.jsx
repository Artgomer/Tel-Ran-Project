import { NavLink } from 'react-router-dom';
import { base_url } from '../../api/url';
import styles from './CategoryItem.module.css';

export const CategoryItem = ({ id, image, title }) => {
	return (
		<li className={styles.category_item}>
			<NavLink to={`/categories/${id}`} state="category">
				<div className={styles.img_wrapper}>
					<img src={`${base_url}${image}`} alt="title" />
				</div>
				<h3 className={styles.category_title}>{title}</h3>
			</NavLink>
		</li>
	);
};
