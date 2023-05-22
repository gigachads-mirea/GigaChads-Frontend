import React from 'react';
import {Button, Card, Grid, Row, Text} from '@nextui-org/react';
import {IServer} from '../../config/types';

const ServerCard = (props: { server: IServer }) => {
	return (
		<Grid xs={4}>
			<Card css={{width: '500px', height: '300px'}}>
				<Card.Header>
					<Text b>Krunker Server</Text>
				</Card.Header>
				<Card.Divider/>
				<Card.Body css={{py: '$10'}}>
					<Text>
						<Text b>
							Owner:
						</Text>
						{' MegaUltraPro3000FonPetrushka'}
					</Text>
					<Text>
						<Text b>
							Ip address:
						</Text>
						{' 127.0.0.1'}
					</Text>
					<Text>
						<Text b>
							Current online:
						</Text>
						{' 47'} players
					</Text>
					<Text>
						<Text b>
							Ping:
						</Text>
						{' '} 255
					</Text>
					<Text>
						<Text b>
							Rating:
						</Text>
						{' 4.6'}
					</Text>
				</Card.Body>
				<Card.Divider/>
				<Card.Footer>
					<Row justify="flex-end">
						<Button size="sm" light>
							Share
						</Button>
						<Button size="sm" color="primary">
							Learn more
						</Button>
					</Row>
				</Card.Footer>
			</Card></Grid>
	);
};

export default ServerCard;