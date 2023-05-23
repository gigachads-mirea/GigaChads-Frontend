import React from 'react';
import {Button, Card, Container, Input, Text, Textarea} from '@nextui-org/react';
import {PageLayout} from '../../components/PageLayout';
import {AuthHeader} from '../../features/auth/widgets/AuthHeader/AuthHeader';
import {useForm} from 'react-hook-form';
import styles from './formPage.module.scss';

export const FormPage = () => {

	const {register, handleSubmit} = useForm();

	const onHandleSubmit = React.useCallback(() => {

	}, []);

	return (
		<PageLayout>
			<Container fluid css={{ display:"flex", "justifyContent": "center" }}>
				<Card css={{ mw: "700px" }}>
					<AuthHeader>Create your server</AuthHeader>
					<Card.Body>
						<form onSubmit={handleSubmit(onHandleSubmit)} className={styles.form}>
							<Input {...register('login')} placeholder={'Название'} css={{ width: "70%", padding: "5px" }}/>
							<Input {...register('login')} placeholder={'Адрес'} css={{ width: "70%", padding: "5px" }}/>
							<Input {...register('login')} placeholder={'Адрес'} css={{ width: "70%", padding: "5px" }}/>
							<Input {...register('login')} placeholder={'Вместимость'} css={{ width: "70%", padding: "5px" }}/>
							<Input {...register('login')} placeholder={'Регион'} css={{ width: "70%", padding: "5px" }}/>
							<Textarea
								label="Описание"
								css={{ width: "70%"}}
							/>
							<Textarea
								label="Специальная информация"
								placeholder="Комментарий"
								css={{ width: "70%"}}
							/>
							<Button type={'submit'} css={{ margin: '30px 0 0 0'}}>Отправить</Button>
						</form>
					</Card.Body>
				</Card>
			</Container>
		</PageLayout>

	);
};

export default FormPage;