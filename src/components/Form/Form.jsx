import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button } from '..';
import styles from './Form.module.css';

export const Form = ({
	contentInput,
	contentButton,
	textButton,
	message,
	content,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'all' });

	const onSubmit = (data) => {
		console.debug(data);
		setShowMessage(true);
	};

	const [showMessage, setShowMessage] = useState(false);

	const nameInput = register('name', {
		required: 'field must be filled',
		disabled: showMessage,
	});

	const phoneInput = register('phone', {
		required: 'field must be filled',
		disabled: showMessage,
		pattern: {
			value: /^\+?\d{7,11}$/,
			message: 'phone number format 7 to 11 digits',
		},
	});

	const emailInput = register('email', {
		required: 'field must be filled',
		disabled: showMessage,
		pattern: {
			value: /^\S+@\S+$/i,
			message: 'email format xxx@xxx.x',
		},
	});

	return (
		<>
			<form className={styles.offer_form} onSubmit={handleSubmit(onSubmit)}>
				<div>
					<p className={`${styles.error} ${styles[content]}  ${styles[errors.name && 'active']}`}>
						{errors.name?.message}
					</p>
					<Input
						content={contentInput}
						error_style={errors.name && 'error'}
						placeholder='Name'
						{...nameInput}
					/>
				</div>

				<div>
					<p className={`${styles.error} ${styles[content]}  ${styles[errors.phone && 'active']}`}>
						{errors.phone?.message}
					</p>
					<Input
						content={contentInput}
						error_style={errors.phone && 'error'}
						placeholder='Phone'
						{...phoneInput}
					/>
				</div>

				<div>
					<p className={`${styles.error} ${styles[content]}  ${styles[errors.email && 'active']}`}>
						{errors.email?.message}
					</p>
					<Input
						content={contentInput}
						error_style={errors.email && 'error'}
						placeholder='Email'
						{...emailInput}
					/>
				</div>

				<Button content={contentButton} text={showMessage ? message : textButton} type="submit" />
			</form>
		</>
	);
};
