import {useRouter} from 'next/router';
import {PageLayout} from '../../components/PageLayout';
import {Button, Card, Collapse, Container, Row, Text, Tooltip} from '@nextui-org/react';
import {AuthHeader} from '../../features/auth/widgets/AuthHeader/AuthHeader';
import React from 'react';
import {
	useAddServerToFavouriteListMutation,
	useDeleteServerFromFavouriteListMutation,
	useGetFavouritesQuery,
	useGetServersListQuery
} from '../../features/servers/queries';

export const Server = () => {
	const {query} = useRouter();
	// @ts-ignore
	const {data} = useGetServersListQuery({filter: {id: query.id}});
	const [mutate] = useAddServerToFavouriteListMutation();
	const {data: faves} = useGetFavouritesQuery(query.id ?? '');
	const notIsFav = faves?.length === 0;
	const [deleteFav] = useDeleteServerFromFavouriteListMutation();
	return (
		<PageLayout>
			<Container fluid justify={'center'} css={{display: 'flex'}}>
				{data && <Card css={{width: '800px', height: '85vh'}}>
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
									<b>Адрес:</b> {data[0].ipAddress}
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
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dignissimos
									ducimus enim esse et excepturi harum illum inventore natus numquam officia officiis,
									omnis perspiciatis qui sapiente soluta tenetur velit vero! Aliquam commodi eveniet
									excepturi maiores non possimus rem? Aperiam consectetur error facere libero magnam
									nihil odio praesentium! Asperiores assumenda culpa cupiditate distinctio dolore
									earum, eveniet explicabo facilis hic incidunt libero maxime nisi porro quam
									repudiandae sapiente sit tempora tenetur velit, veniam voluptatem voluptatibus,
									voluptatum. Ab ad adipisci aliquam, atque consequuntur delectus dolores eaque earum
									et eveniet expedita explicabo hic ipsum labore laboriosam maiores natus non
									obcaecati officiis perferendis placeat rem repellendus saepe sequi sit sunt unde
									vitae! Animi, at beatae blanditiis consectetur consequatur consequuntur deleniti
									dicta dignissimos dolore, enim error, est eveniet hic inventore ipsam itaque labore
									laboriosam laborum libero magnam maiores minima minus nemo pariatur perspiciatis
									quae quaerat qui quis repudiandae rerum ullam vero vitae voluptate? A asperiores at
									eaque id impedit ipsa iusto libero magnam maxime quae quidem, similique tempore
									voluptatum! Blanditiis error eveniet impedit ipsum minus mollitia, numquam quisquam
									quod velit veritatis! Accusantium ad architecto aspernatur consequatur delectus
									ducimus magni mollitia necessitatibus nemo omnis optio, quas quia quo quod
									repellendus sunt vel voluptatum! Inventore iste praesentium rem?
								</Text>
							</Collapse>
						</Collapse.Group>
					</Card.Body>
					<Card.Footer>
						<Row justify="flex-end">
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
								</>
							)}
						</Row>
					</Card.Footer>
				</Card>
				}

			</Container>


		</PageLayout>
	);
};

export default Server;
