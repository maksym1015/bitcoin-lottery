import React from 'react';
import Link from 'next/link';

import Layout from 'components/layout';
import { Input, Button } from 'components/form/form-control';
import styles from './auth.module.scss';

const SignupPage = () => {
	const [state, setState] = React.useReducer((old, news) => ({ ...old, ...news }), {
		email: '',
		password: '',
		address: ''
	});

	const { email, password, address } = state;

	const handleEmailChange = React.useCallback(e => {
		setState({ email: e.target.value });
	}, []);
	const handlePasswordChange = React.useCallback(e => {
		setState({ password: e.target.value });
	}, []);
	const handleAddressChange = React.useCallback(e => {
		setState({ address: e.target.value });
	}, []);
	const handleSubmit = React.useCallback((e) => {
		e.preventDefault();
		console.log(state);
	}, [state]);

	return (
		<Layout>
			<main className={styles.container}>
				<form className={styles.form}>
					<h1>Welcome</h1>
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
						<Input
							id='password'
							name='password'
							type='password'
							value={password}
							onChange={handlePasswordChange}
							placeholder='Password'
							style={{ padding: '16px 24px' }}
						/>
						<Input
							id='address'
							name='address'
							type='text'
							value={address}
							placeholder='BCH address (optional)'
							onChange={handleAddressChange}
							style={{ padding: '16px 24px' }}
						/>
					</section>
					<section className={styles.actionGroup}>
						<Button className={styles.submit} onClick={handleSubmit}>
							Sign up
							</Button>
					</section>
					<section className={styles.tc}>
						<span>
							By creating a new account I accept the <a href='/help/terms' className={styles.link}>terms and conditions</a>, the <a href='/help/privacy' className={styles.link}>privacy policy </a>and confirm that I am over 18 years of age. It is an offence to gamble if under age. <a href='/help/gamble' className={styles.link}>Gamble Responsibly</a>.
							</span>
					</section>
					<section className={styles.actionLinks}>
						<a className={styles.link} href='/'>
							&lt;&lt;Home
							</a>
						<span>
							Have an account? <a className={styles.link} href='/auth/login'>Log in</a>
						</span>
					</section>
				</form>
			</main>
		</Layout >
	)
}

export default SignupPage;