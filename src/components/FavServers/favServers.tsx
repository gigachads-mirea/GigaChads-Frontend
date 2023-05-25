import React from 'react';
import {Card, Grid} from '@nextui-org/react';
import UserServerCard from '../UserServerCard/userServerCard';
import {
	useDeleteServerFromFavouriteListMutation,
	useGetFavouritesQuery,
	useGetServersListQuery
} from '../../features/servers/queries';

const FavServers = () => {
	const {data} = useGetFavouritesQuery('');

	return (
		<Grid xs={4}>
			<Card css={{h: '$24', height: '80vh'}}>
				<Card.Header css={{'font-weight': 'bold'}}>Избранное</Card.Header>
				<Card.Divider></Card.Divider>
				<Card.Body>
					<Grid.Container gap={2} justify="flex-start">
						{data && data.map((elem) => {
							return <ServerGame sid={elem.SID}/>;
						})}
					</Grid.Container>
				</Card.Body>
			</Card>
		</Grid>
	);
};

export default FavServers;

const ServerGame = ({sid}) => {
	const {data} = useGetServersListQuery({filter: {id: sid}});
	const [deleteFav] = useDeleteServerFromFavouriteListMutation();

	if (!data) return null;

	return <UserServerCard elem={data[0]} deleteServer={() => {
		deleteFav(data[0].id);
	}}/>;
};
