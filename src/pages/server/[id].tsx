import {useRouter} from 'next/router';
import {PageLayout} from '../../components/PageLayout';
import { Container,  Collapse, Text } from '@nextui-org/react';
import {AuthHeader} from '../../features/auth/widgets/AuthHeader/AuthHeader';
import React from 'react';
import {useGetServersListQuery} from '../../features/servers/queries';

export const Server = () => {
	const {query} = useRouter();
	// @ts-ignore
	const {data} = useGetServersListQuery({id: query.id})
	return (
		<PageLayout>
			{ data && <Container fluid>
					<AuthHeader>{data[0].name}</AuthHeader>
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
								<b>Моды:</b> {data[0].isModded ? "Разрешены" : "Запрщены"}
							</Text>
							<Text>
								<b>Античит-система:</b> {data[0].antiCheat ? "Работает" : "Отключен"}
							</Text>
							<Text>
								<b>Статус:</b> {data[0].validated ? "Проверен" : "Отклонён"}
							</Text>
						</Collapse>
						<Collapse title="Описание">
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dignissimos ducimus enim esse et excepturi harum illum inventore natus numquam officia officiis, omnis perspiciatis qui sapiente soluta tenetur velit vero! Aliquam commodi eveniet excepturi maiores non possimus rem? Aperiam consectetur error facere libero magnam nihil odio praesentium! Asperiores assumenda culpa cupiditate distinctio dolore earum, eveniet explicabo facilis hic incidunt libero maxime nisi porro quam repudiandae sapiente sit tempora tenetur velit, veniam voluptatem voluptatibus, voluptatum. Ab ad adipisci aliquam, atque consequuntur delectus dolores eaque earum et eveniet expedita explicabo hic ipsum labore laboriosam maiores natus non obcaecati officiis perferendis placeat rem repellendus saepe sequi sit sunt unde vitae! Animi, at beatae blanditiis consectetur consequatur consequuntur deleniti dicta dignissimos dolore, enim error, est eveniet hic inventore ipsam itaque labore laboriosam laborum libero magnam maiores minima minus nemo pariatur perspiciatis quae quaerat qui quis repudiandae rerum ullam vero vitae voluptate? A asperiores at eaque id impedit ipsa iusto libero magnam maxime quae quidem, similique tempore voluptatum! Blanditiis error eveniet impedit ipsum minus mollitia, numquam quisquam quod velit veritatis! Accusantium ad architecto aspernatur consequatur delectus ducimus magni mollitia necessitatibus nemo omnis optio, quas quia quo quod repellendus sunt vel voluptatum! Inventore iste praesentium rem?
							</Text>
						</Collapse>
					</Collapse.Group>
				</Container>}

		</PageLayout>
	)
};

export default Server;