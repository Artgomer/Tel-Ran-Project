import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import BasketIcon from "../../assets/svg/basket.svg?react";
import { Burger, Navigation } from '..';
import logo from '../../assets/svg/logo.svg';
import styles from './Header.module.css';

export const Header = () => {
	const totalAmount = useSelector((store) => store.cart.totalAmount);
	const [active, setActive] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			const windowWidth = window.innerWidth;
			if (windowWidth > 762) setActive(false);
		};

		window.addEventListener('resize', handleResize);

		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		const handleScroll = (event) => {
			if (active) {
				event.preventDefault();
				event.stopPropagation();
			}
		};

		const options = { passive: false };

		document.addEventListener('wheel', handleScroll, options);
		document.addEventListener('touchmove', handleScroll, options);

		return () => {
			document.removeEventListener('wheel', handleScroll);
			document.removeEventListener('touchmove', handleScroll);
		};
	}, [active]);

	const toggleActive = () => {
		setActive(!active);
	};

	return (
		<header className={styles.header}>
			<div className={styles.header_content}>
				<div className="container">
					<div className={styles.header_wrapper}>
						<NavLink
							className={styles.logo_wrapper}
							to="/#home"
							onClick={() => setActive(false)}
						>
							<div className={styles.logo}>
								<img src={logo} alt="logo" />
							</div>

						</NavLink>
						<div className={`${styles.menu} ${styles[active && 'active']}`}>
							<Navigation onClick={() => setActive(false)} />
						</div>
						<NavLink
							className={styles.cart_link}
							to="/cart"
							onClick={() => setActive(false)}
						>
							<BasketIcon />
							<p className={styles.cart_total}>{totalAmount}</p>
						</NavLink>
						<Burger onClick={toggleActive} active={active && 'active'} />
					</div>
				</div>
			</div>
		</header>
	);
};
