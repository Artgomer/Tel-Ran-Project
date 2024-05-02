import styles from './Alert.module.css';
import { Button } from './../UI/Button/Button';
import { forwardRef, useEffect, useState } from 'react';
import CloseIcon from "../../assets/svg/close.svg?react";
import { fetchGetOrder } from '../../api/order';
import { useDispatch } from 'react-redux';
import { removeAllProductsFromCart } from '../../store/cartSlice';

export const Alert = forwardRef(
	({ message, text, content, setShowMessage }, ref) => {
		const [isExploding, setIsExploding] = useState(false);
		const dispatch = useDispatch();

		useEffect(() => {
			const scrollbarWidth =
				window.innerWidth - document.documentElement.clientWidth;
			document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
			document.body.style.overflow = 'hidden';

			return () => {
				document.documentElement.style.paddingRight = '';
				document.body.style.overflow = 'auto';
			};
		}, []);

		const cleanCart = () => {
			fetchGetOrder(content);
			setIsExploding(true);
			setShowMessage(false);
			if (content === 'order') {
				dispatch(removeAllProductsFromCart());
			}
		};

		return (
			<div
				className={styles.allert_wrapper}
				ref={ref}
				style={{
					top: window.scrollY,
					height: '100vh',
				}}
			>
				<div className={styles.alert}>
					<CloseIcon
						className={styles.close_btn}
						onClick={() => setShowMessage(false)}
					/>
					<p className={styles.alert_message}>{message}</p>
					<Button text={text} content={content} onClick={() => cleanCart()} />
					{isExploding && content === 'sale' && (
						<p>Hello</p>
						// <ConfettiExplosion
						// 	style={{
						// 		force: 1,
						// 		duration: 5000,
						// 		particleCount: 250,
						// 		height: '50vh',
						// 	}}
						// />
					)}
				</div>
			</div>
		);
	}
);
