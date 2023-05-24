import React from 'react';
import {Card, Grid, Text, Row,Button} from '@nextui-org/react';
import UserServerCard from '../UserServerCard/userServerCard';

const UserServers = ({data}) => {
	return (
		<Grid xs={4}>
			<Card css={{ height: "80vh"}}>
				<Card.Header css={{"font-weight": "bold"}}>Мои сервера</Card.Header>
				<Card.Divider></Card.Divider>
				<Card.Body>
					<Grid.Container gap={2} justify="flex-start">
						{data && data.map((elem)=>{
							return <UserServerCard elem={elem}/>
						})}
					</Grid.Container>
				</Card.Body>
			</Card>
		</Grid>
	);
};

export default UserServers;