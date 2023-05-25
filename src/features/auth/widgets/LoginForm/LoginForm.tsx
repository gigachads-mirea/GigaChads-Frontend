import React from 'react';
import {useForm} from 'react-hook-form';
import {Button, Input} from '@nextui-org/react';
import styles from './LoginForm.module.scss';
import {useRouter} from 'next/router';

export const LoginForm = () => {
	const {register, handleSubmit} = useForm();
	const router = useRouter();

	const onHandleSubmit = React.useCallback(() => {

	}, []);

	return (
		<form onSubmit={handleSubmit(onHandleSubmit)} className={styles.LoginForm}>
			<Input {...register('login')} placeholder={'Почта'}/>
			<Input {...register('password')} placeholder={'Пароль'} type={'password'}/>
			<Button type={'submit'} onClick={() => {
				router.push({
					query: {
						logged: '1'
					},
					pathname: 'account'
				});
			}}>Войти</Button>
		</form>
	);
};
