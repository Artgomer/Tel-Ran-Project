import { base_url } from './url';

export const fetchGetOrder = (content) => {
	fetch(`${base_url}/${content}/send`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(content),
	})
		.then((res) => res.json())
		.then((data) => console.log('Responce answer: ', data))
		.catch((error) => {
			console.error('Error:', error);
		});
};
