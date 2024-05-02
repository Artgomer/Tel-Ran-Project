import styles from './Map.module.css';

export const Map = () => {
	const newLocal =
		'';

	return (
		<div className={styles.map_wrapper}>
			<iframe
				className={styles.map_container}
				src={newLocal}
				title="map with TEL-RAN address"
			></iframe>
		</div>
	);
};
