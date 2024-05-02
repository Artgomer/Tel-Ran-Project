import styles from './Pagination.module.css';

export const Pagination = ({ currentPage, setCurrentPage, pagesNumber }) => {
	const numbersPageList = [];

	for (let i = 1; i < pagesNumber + 1; i++) {
		numbersPageList.push(i);
	}

	return (
		<div>
			<ul className={styles.pages_list}>
				{numbersPageList.map((number) => (
					<li className={styles.page_item} key={number}>
						<button
							className={`${styles.num_btn} ${
								currentPage === number && styles['active']
							}`}
							onClick={() => setCurrentPage(number)}
						>
							{number}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
