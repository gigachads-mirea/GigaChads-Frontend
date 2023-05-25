import React from 'react';
import {Button, Card, Grid, Row, Text, Tooltip} from '@nextui-org/react';
import {useRouter} from 'next/router';

const ServerCard = ({server}) => {
	const {query, push} = useRouter();

	const goToPage = (pathname: string) => () => push({pathname, query});
	return (
		<Grid xs={4}>
			<Card css={{width: '500px', height: '300px'}}>
				<Card.Header>
					<Text b>{server.name}</Text>
				</Card.Header>
				<Card.Divider/>
				<Card.Body css={{py: '$10'}}>
					<Text>
						<Text b>
							Owner:
						</Text>
						{' ' + server.owner}
					</Text>
					<Text>
						<Text b>
							Ip address:
						</Text>
						{' ' + server.ipAddress}
					</Text>
					<Text>
						<Text b>
							Current online:
						</Text>
						{' ' + server.currentOnline} players
					</Text>
					<Text>
						<Text b>
							Ping:
						</Text>
						{' ' + server.ping}
					</Text>
					<Text>
						<Text b>
							Rating:
						</Text>
						{' ' + server.rating}
					</Text>
				</Card.Body>
				<Card.Divider/>
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
						<Button size="sm" color="primary" auto light onClick={goToPage(`/server/${server.id}`)}>
							Перейти
						</Button>
					</Row>
				</Card.Footer>
			</Card></Grid>
	);
};

export default ServerCard;
