import { NavLink } from 'react-router-dom';
import not_found_image from '../../assets/img/notfound.png';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
	return (
		<section className={styles.notfound}>
			<h1 className="title"><span><p>4<img src={not_found_image} alt="0" />4</p></span>Page not found</h1>
			<p>We're sorry, the page you requested could not be found.
				Please go back to the homepage.</p>
			<NavLink to="/" className={styles.back_btn}>Go Home</NavLink>
		</section>
	);
};
