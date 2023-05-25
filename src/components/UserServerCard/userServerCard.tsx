import React from 'react';
import {Button, Card, Grid, Row, Text} from '@nextui-org/react';
import {useRouter} from 'next/router';

const UserServerCard = ({elem, deleteServer}) => {
	const {query, push} = useRouter();

	const goToPage = (pathname: string) => () => push({pathname, query});
	return (
		<Grid xs={8}>
			<Card css={{mw: '250px'}}>
				<Card.Header>
					<Text b>{elem.name}</Text>
				</Card.Header>
				<Card.Divider/>
				<Card.Body css={{py: '$10'}}>
					<Text>
						Game: {elem.game}
					</Text>
					<Text>
						IP: {elem.ipAddress}
					</Text>
				</Card.Body>
				<Card.Divider/>
				<Card.Footer>
					<Row justify="flex-end">
						<Button size="xs" light css={{color: 'red'}} onClick={deleteServer}>
							Удалить
						</Button>
						<Button size="xs" light css={{color: 'blue'}} onClick={goToPage('/server/' + elem.id)}>
							Подробнее
						</Button>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	);
};

export default UserServerCard;
