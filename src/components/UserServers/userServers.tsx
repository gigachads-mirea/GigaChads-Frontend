import React from 'react';
import {Card, Grid} from '@nextui-org/react';
import UserServerCard from '../UserServerCard/userServerCard';
import {
	useAddServerToOwnListMutation,
	useDeleteServerFromOwnListMutation,
	useDeleteServerMutation,
	useGetOwnsQuery,
	useGetServersListQuery,
} from '../../features/servers/queries';

const UserServers = () => {
	const [deleteServerFromList, {}] = useDeleteServerFromOwnListMutation();
	const {data} = useGetOwnsQuery('');
	const [updateUserServersList, {}] = useAddServerToOwnListMutation();

	return (
		<Grid xs={4}>
			<Card css={{height: '80vh'}}>
				<Card.Header css={{'font-weight': 'bold'}}>Мои сервера</Card.Header>
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

export default UserServers;

const ServerGame = ({sid}) => {
	const {data} = useGetServersListQuery({filter: {id: sid}});
	const [deleteOwn] = useDeleteServerFromOwnListMutation();
	const [deleteServer] = useDeleteServerMutation();

	if (!data) return null;

	return <UserServerCard elem={data[0]} deleteServer={() => {
		deleteOwn(data[0].id).then(() => {
			deleteServer(sid);
		});
	}}/>;
};
