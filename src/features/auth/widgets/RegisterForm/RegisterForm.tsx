import React from 'react';
import {useForm} from 'react-hook-form';
import {Button, Input} from '@nextui-org/react';
import styles from './RegisterForm.module.scss';
import {useRouter} from 'next/router';

export const RegisterForm = () => {
	const {register, handleSubmit} = useForm();
	const router = useRouter();

	const onHandleSubmit = React.useCallback(() => {

	}, []);

	return (
		<form onSubmit={handleSubmit(onHandleSubmit)} className={styles.LoginForm}>
			<Input {...register('email')} placeholder={'Почта'} type={'email'}/>
			<Input {...register('password')} placeholder={'Пароль'} type={'password'}/>
			<Button type={'submit'} onClick={() => {
				router.push({
					query: {
						logged: '1'
					},
					pathname: 'account'
				});
			}}>Зарегистрироваться</Button>
		</form>
	);
};
