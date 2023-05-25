import React from 'react';
import {Card, Grid, Text} from '@nextui-org/react';
import UserServerCard from '../UserServerCard/userServerCard';

const FavServers = ({data, user}) => {
	return (
		<Grid xs={4}>
			<Card css={{ h: "$24", height: "80vh" }}>
				<Card.Header css={{"font-weight": "bold"}}>Избранное</Card.Header>
				<Card.Divider></Card.Divider>
				<Card.Body>
					<Grid.Container gap={2} justify="flex-start">
						{data && data.map((elem)=>{
							return <UserServerCard elem={elem} />
						})}
					</Grid.Container>
				</Card.Body>
			</Card>
		</Grid>
	);
};

export default FavServers;