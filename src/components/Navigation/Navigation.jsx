import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = ({ ...other }) => {

	return (
		<nav className={styles.nav}>
			<ul className={styles.nav_list}>
				<li className={styles.nav_item}>
					<NavLink
						className={({ isActive }) => styles.nav_link + ' ' + (isActive ? styles.active : '')}
						to="/"
						{...other}>
						Main Page
					</NavLink>
				</li>
				<li className={styles.nav_item}>
					<NavLink
						className={({ isActive }) => styles.nav_link + ' ' + (isActive ? styles.active : '')}
						to="/categories"
						{...other}>
						Categories
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => styles.nav_link + ' ' + (isActive ? styles.active : '')}
						to="/products"
						state="all"
						end
						{...other}
					>
						All products
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => styles.nav_link + ' ' + (isActive ? styles.active : '')}
						to="/products/"
						state="sale"
						end
						{...other}
					>
						All sales
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
