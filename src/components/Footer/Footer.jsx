import { Contacts, Map } from '../';
import styles from './Footer.module.css';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<Contacts />
				<Map />
			</div>
		</footer>
	);
};
