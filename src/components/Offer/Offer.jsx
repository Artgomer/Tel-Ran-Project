import { Form } from '../Form/Form';
import imageOffer from '../../assets/img/offer.png';
import styles from './Offer.module.css';

export const Offer = () => {
	return (
		<section className={styles.offer}>
			<div className="container">
				<div className={styles.offer_wrapper}>
					<h4 className={styles.offer_title}>
						5% off on the first order
					</h4>
					<div className={styles.image_wrapper}>
						<img src={imageOffer} alt="offer" />
					</div>
					<div className={styles.offer_form}>
						<Form
							contentInput="sale"
							contentButton="sale_ofer"
							textButton="Get a discount"
							message="Code sent"
							content="sale"
						/>
					</div>

				</div>
			</div>
		</section>
	);
};
