import React from 'react';
import {Button, Card, Grid, Row, Text} from '@nextui-org/react';

const UserServerCard = ({elem}) => {
	return (
		<Grid xs={8}>
			<Card css={{ mw: "250px" }}>
				<Card.Header>
					<Text b>Card Title</Text>
				</Card.Header>
				<Card.Divider />
				<Card.Body css={{ py: "$10" }}>
					<Text>
						Game: {elem.game}
					</Text>
					<Text>
						IP: {elem.ipAddress}
					</Text>
				</Card.Body>
				<Card.Divider />
				<Card.Footer>
					<Row justify="flex-end">
						<Button size="xs" light css={{color: "red"}} >
							Удалить
						</Button>
						<Button size="xs" light css={{color: "blue"}} >
							Подробнее
						</Button>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	);
};

export default UserServerCard;