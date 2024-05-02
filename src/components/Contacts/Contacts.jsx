import { Link } from 'react-router-dom';
import InstagramIcon from "../../assets/svg/ic-instagram.svg?react";
import WhatsappIcon from "../../assets/svg/ic-whatsapp.svg?react";
import styles from './Contacts.module.css';

export const Contacts = () => {
	return (
		<section className={styles.contacts}>
			<h2 className='title'>Contacts</h2>
			<address className={styles.address}>
				<div className={styles.address_item}>
					<p>Phone</p>
					<div>
						<Link to="tel:+49 999 999 99 99">
							+49 999 999 99 99
						</Link>
					</div>
				</div>
				<div className={styles.address_item}>
					<p>Socials</p>
					<div>
						<Link
							to="https://www.linkedin.com/school/tel-ran-de/"
							target="_blank"
						>
							<InstagramIcon />
						</Link>
						<Link
							to="https://wa.me/+499999999999"
							target="_blank"
						>
							<WhatsappIcon />
						</Link>
					</div>

				</div>
				<div className={styles.address_item}>
					<p>Address</p>
					<div>
						<Link>
							Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
						</Link>
					</div>
				</div>
				<div className={styles.address_item}>
					<p>Working Hours</p>
					<div>
						24 hours a day
					</div>
				</div>
			</address>
		</section>
	);
};
