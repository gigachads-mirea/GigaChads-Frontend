import React from 'react';
import {AuthHeader} from '../AuthHeader/AuthHeader';
import {Card, Text} from '@nextui-org/react';
import styles from '../Login/Login.module.scss';
import Link from 'next/link';
import {RegisterForm} from '../RegisterForm/RegisterForm';

export const Register = () => {
	return (
		<div>
			<AuthHeader>Регистрация</AuthHeader>
			<Card className={styles.LoginCard}>
				<RegisterForm/>
				<Text size="$xs">Уже есть аккаунт? <Link href={'/login'}>Войти</Link></Text>
			</Card>
		</div>
	);
};
