import React from 'react';
import {LoginForm} from '../LoginForm/LoginForm';
import {Card} from '@nextui-org/react';
import styles from './Login.module.scss';
import {AuthHeader} from '../AuthHeader/AuthHeader';

export const Login = () => {
	return (
		<div>
			<AuthHeader>Авторизация администратора</AuthHeader>
			<Card className={styles.LoginCard}>
				<LoginForm/>
			</Card>
		</div>
	);
};
