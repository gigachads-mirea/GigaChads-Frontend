import React from 'react';
import {Button, Card, Container, Input, Switch, Text, Textarea} from '@nextui-org/react';
import {PageLayout} from '../../components/PageLayout';
import {AuthHeader} from '../../features/auth/widgets/AuthHeader/AuthHeader';
import {useForm} from 'react-hook-form';
import styles from './formPage.module.scss';
import {useAddServerToOwnListMutation, useCreateServerMutation} from '../../features/servers/queries';
import {useRouter} from 'next/router';

export const FormPage = () => {

	const {push, query} = useRouter();
	const {register, handleSubmit, setValue} = useForm();
	const [mutate] = useCreateServerMutation();
	const [addToOwn] = useAddServerToOwnListMutation();

	const onHandleSubmit = React.useCallback((data: any) => {
		mutate({
			...data,
			'owner': 'abobus',
			'currentOnline': Math.ceil(Math.random() * 100 % 300),
			'ping': Math.ceil(Math.random() * 100 % 60),
			'rating': Math.ceil(Math.random() * 10 % 5),
			'validated': false,
		}).then((e: any) => {
			addToOwn(e?.data?.id).then(() => {
				push({pathname: `/server/${e?.data?.id}`, query});
			});
		});
	}, []);

	//       "id": 6,
	//       "name": "Super server 1", +
	//       "owner": "Kopatych2002",
	//       "url": "https://nextjs.org/blog/layouts-rfc", +
	//       "ipAddress": "127.0.0.6", +
	//       "capacity": 4000, +
	//       "currentOnline": 27,
	//       "region": "RU", +
	//       "ping": 22,
	//       "antiCheat": true, +
	//       "isModded": true, +
	//       "rating": 4.1,
	//       "game": "Krunker", +
	// "description": "", +
	//       "validated": false

	return (
		<PageLayout>
			<Container fluid css={{display: 'flex', 'justifyContent': 'center'}}>
				<Card css={{mw: '700px'}}>
					<AuthHeader>Добавьте свой сервер</AuthHeader>
					<Card.Body>
						<form onSubmit={handleSubmit(onHandleSubmit)} className={styles.form}>
							<Input {...register('name')} placeholder={'Название'}
								   css={{width: '70%', padding: '5px'}}/>
							<Input {...register('game')} placeholder={'Игра'}
								   css={{width: '70%', padding: '5px'}}/>
							<Input {...register('url')} placeholder={'Сайт'} css={{width: '70%', padding: '5px'}}/>
							<Input {...register('host')} placeholder={'Адрес'} css={{width: '70%', padding: '5px'}}/>
							<Input {...register('capacity')} placeholder={'Вместимость'}
								   css={{width: '70%', padding: '5px'}}/>
							<Input {...register('login')} placeholder={'Регион'} css={{width: '70%', padding: '5px'}}/>
							<br/>
							<div style={{
								display: 'flex',
								justifyContent: 'flex-start',
								width: '70%',
								alignItems: 'center',
								gap: '20px'
							}}>
								<Switch onChange={(ev) => {
									setValue('antiCheat', ev.target.checked);
								}} title={'Античит'}/>
								<Text style={{height: '25px'}}>Античит</Text>
							</div>
							<div style={{
								display: 'flex',
								justifyContent: 'flex-start',
								width: '70%',
								alignItems: 'center',
								gap: '20px'
							}}>
								<Switch onChange={(ev) => {
									setValue('isModded', ev.target.checked);
								}} title={'Античит'}/>
								<Text style={{height: '25px'}}>С модами</Text>
							</div>
							<br/>
							<br/>
							<Textarea {...register('description')} placeholder={'Описание'} css={{width: '70%'}}
							/>
							<Button type={'submit'} css={{margin: '30px 0 0 0'}}>Отправить</Button>
						</form>
					</Card.Body>
				</Card>
			</Container>
		</PageLayout>

	);
};

export default FormPage;
