import React from 'react';
import {PageLayout} from '../../components/PageLayout';
import {Button, Card, Collapse, Row, Text, Tooltip} from '@nextui-org/react';
import {
	useAddServerToCompareListMutation,
	useAddServerToFavouriteListMutation,
	useDeleteServerFromCompareListMutation,
	useDeleteServerFromFavouriteListMutation,
	useGetCompareQuery,
	useGetFavouritesQuery,
	useGetServersListQuery
} from '../../features/servers/queries';
import {AuthHeader} from '../../features/auth/widgets/AuthHeader/AuthHeader';
import {useRouter} from 'next/router';

export const AccountPage = () => {
	const {data} = useGetCompareQuery('');
	return (
		<PageLayout>
			<div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
				{data && data.map((elem) => {
					return <ServerGame sid={elem.id}/>;
				})}
			</div>
		</PageLayout>
	);
};

export default AccountPage;

const ServerGame = ({sid}) => {
	const {query} = useRouter();

	const {data} = useGetServersListQuery({filter: {id: sid}});
	const [mutate] = useAddServerToFavouriteListMutation();
	const {data: faves} = useGetFavouritesQuery(sid ?? '');
	const notIsFav = faves?.length === 0;
	const [deleteFav] = useDeleteServerFromFavouriteListMutation();

	const {data: compareList} = useGetCompareQuery(sid ?? '');
	const [deleteCompare] = useDeleteServerFromCompareListMutation();
	const [addCompare] = useAddServerToCompareListMutation();

	const isCompare = compareList?.length === 0;

	if (!data) return null;

	return (
		<Card css={{width: '450px'}}>
			<Card.Header>
				<AuthHeader>{data[0].name}</AuthHeader>
			</Card.Header>
			<Card.Body css={{overflow: 'auto'}}>
				<Collapse.Group accordion={false}>
					<Collapse title="Главная информация">
						<Text>
							<b>Владелец:</b> {data[0].owner}
						</Text>
						<Text>
							<b>Игра:</b> {data[0].game}
						</Text>
						<Text>
							<b>Адрес:</b> {data[0].host}
						</Text>
						<Text>
							<b>Вместимость:</b> {data[0].capacity}
						</Text>
						<Text>
							<b>Ссылка:</b> {data[0].url}
						</Text>
					</Collapse>

					<Collapse title="Подробности">
						<Text>
							<b>Текущий онлайн:</b> {data[0].currentOnline}
						</Text>
						<Text>
							<b>Пинг:</b> {data[0].ping}
						</Text>
						<Text>
							<b>Регион:</b> {data[0].region}
						</Text>
						<Text>
							<b>Моды:</b> {data[0].isModded ? 'Разрешены' : 'Запрщены'}
						</Text>
						<Text>
							<b>Античит-система:</b> {data[0].antiCheat ? 'Работает' : 'Отключен'}
						</Text>
						<Text>
							<b>Статус:</b> {data[0].validated ? 'Проверен' : 'Отклонён'}
						</Text>
					</Collapse>
					<Collapse title="Описание">
						<Text>
							{data[0].description}
						</Text>
					</Collapse>
				</Collapse.Group>
			</Card.Body>
			<Card.Footer>
				<Row justify="flex-end" style={{display: 'flex', gap: '10px'}}>
					<Tooltip
						content={'Текст скопирован'}
						trigger="click"
						color="success"
					>
						<Button auto size="sm" light onClick={() => {
							navigator.clipboard.writeText('Абобус!');
						}}>
							Поделиться
						</Button>
					</Tooltip>
					{query['logged'] && (
						<>
							{notIsFav && (
								<Button size="sm" color="secondary" onClick={() => {
									mutate(query.id);
								}}
								>
									В избранное
								</Button>
							)}

							{!notIsFav && (
								<Button size="sm" color="secondary" onClick={() => {
									deleteFav(faves[0].id);
								}}
								>
									Удалить из избранного
								</Button>
							)}

							{isCompare && (
								<Button size="sm" color="success" onClick={() => {
									addCompare(query.id);
								}}
								>
									В сравнение
								</Button>
							)}

							{!isCompare && (
								<Button size="sm" color="success" onClick={() => {
									deleteCompare(compareList[0].id);
								}}
								>
									Удалить сравнения
								</Button>
							)}
						</>
					)}
				</Row>
			</Card.Footer>
		</Card>
	);
};
