import React from 'react';
import {Button, Card, Grid, Row, Text} from '@nextui-org/react';
import Link from 'next/link';

const ServerCard = ({server}) => {
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
						 {' '+server.owner}
					</Text>
					<Text>
						<Text b>
							Ip address:
						</Text>
						{" "+server.ipAddress}
					</Text>
					<Text>
						<Text b>
							Current online:
						</Text>
						{' '+server.currentOnline} players
					</Text>
					<Text>
						<Text b>
							Ping:
						</Text>
						{' '+server.ping}
					</Text>
					<Text>
						<Text b>
							Rating:
						</Text>
						{' '+server.rating}
					</Text>
				</Card.Body>
				<Card.Divider/>
				<Card.Footer>
					<Row justify="flex-end">
						<Button size="sm" light>
							Share
						</Button>
						<Button size="sm" color="primary"  auto as={Link} href={`/server/${server.id}`}>
							Learn more
						</Button>
					</Row>
				</Card.Footer>
			</Card></Grid>
	);
};

export default ServerCard;
