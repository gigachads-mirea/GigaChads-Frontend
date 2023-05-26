import React from 'react';
import {LoginForm} from '../LoginForm/LoginForm';
import {Card, Text} from '@nextui-org/react';
import styles from './Login.module.scss';
import Link from 'next/link';
import {AuthHeader} from '../AuthHeader/AuthHeader';

export const Login = () => {
	return (
		<div>
			<AuthHeader>Авторизация администратора</AuthHeader>
			<Card className={styles.LoginCard}>
				<LoginForm/>
				<Text size="$xs">Нет аккаунта? <Link href={'https://www.youtube.com/watch?v=y74UPiaK7u0'}>Ну и хер с ним</Link></Text>
			</Card>
		</div>
	);
};
