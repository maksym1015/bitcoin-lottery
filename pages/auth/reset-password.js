import React from 'react';

import Layout from 'components/layout';
import { Input, Button } from 'components/form/form-control';
import styles from './auth.module.scss';

const ResetPassword = () => {
	const [state, setState] = React.useReducer((old, news) => ({ ...old, ...news }), {
		email: ''
	});

	const { email } = state;

	const handleEmailChange = React.useCallback(e => {
		setState({ email: e.target.value });
	}, []);
	const handleSubmit = React.useCallback((e) => {
		e.preventDefault();
		console.log(state);
	}, [state]);

	return (
		<Layout>
			<main className={styles.container}>
				<form className={styles.form}>
					<h1>Forgot your password?</h1>
					<section className={styles.inputGroup}>
						<Input
							id='email'
							name='email'
							type='text'
							value={email}
							onChange={handleEmailChange}
							placeholder='Email Address'
							style={{ padding: '16px 24px' }}
						/>
					</section>
					<section className={styles.actionGroup}>
						<Button className={styles.submit} onClick={handleSubmit}>
							Reset Password
						</Button>
					</section>
					<section className={styles.actionLinks}>
						<a className={styles.link} href='/'>&lt;&lt;Home</a>
						<a className={styles.link} href='/auth/login'>Log in</a>
					</section>
				</form>
			</main>
		</Layout >
	)
}

export default ResetPassword;