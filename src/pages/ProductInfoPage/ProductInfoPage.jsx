import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByID } from '../../api/products';
import { addProductToCart } from '../../store/cartSlice';
import { ProductPrice, Button } from '../../components/';
import { base_url } from '../../api/url';
import styles from './ProductInfoPage.module.css';

export const ProductInfoPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const productInfo = useSelector((store) => store.productInfo);

	useEffect(() => {
		if (productInfo.status === '*') {
			navigate('/*');
		}
	}, [navigate, productInfo]);

	useEffect(() => {
		id && dispatch(fetchProductByID(`/products/${id}`));
	}, [dispatch, id]);

	const { title, image, price, discont_price, description } = productInfo || {};

	const [amount, setAmount] = useState(1);

	const addToCart = (e) => {
		e.preventDefault();
		dispatch(addProductToCart({ ...productInfo, amount }));
	};

	return (
		<section className={styles.product_info}>
			<div className="container">
				<div className={styles.info_wrapper}>
					<div className={styles.info_image}>
						<img src={`${base_url}${image}`} alt={title} />
					</div>

					<div className={styles.info_content}>
						<h1>{title}</h1>
						<ProductPrice
							price={price}
							discont_price={discont_price}
							content="info"
						/>
						<div class={styles.add}>
							<div className={styles.counter}>
								<button type="button" className={styles.count_btn} onClick={() => setAmount(p => p > 1 ? p - 1 : p)}>
									-
								</button>

								<p>{amount}</p>
								<button type="button" className={styles.count_btn} onClick={() => setAmount(p => p + 1)}>
									+
								</button>

							</div>
							<Button text="Add to cart" content="info" onClick={addToCart} />
						</div>
						<div className={styles.description}>
							<h2 className={styles.description_title}>Description</h2>
							<p>{description}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
