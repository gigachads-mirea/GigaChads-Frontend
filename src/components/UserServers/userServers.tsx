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
	console.log(data, 'data');
	return (
		<Grid xs={4}>
			<Card css={{height: '80vh'}}>
				<Card.Header css={{'font-weight': 'bold'}}>Мои сервера</Card.Header>
				<Card.Divider></Card.Divider>
				<Card.Body>
					<Grid.Container gap={2} justify="flex-start">
						{data && data.map((elem) => {
							return <ServerGame sid={elem?.SID} id={elem.id}/>;
						})}
					</Grid.Container>
				</Card.Body>
			</Card>
		</Grid>
	);
};

export default UserServers;

const ServerGame = ({sid, id}) => {
	const {data} = useGetServersListQuery({filter: {id: sid}});
	const [deleteOwn] = useDeleteServerFromOwnListMutation();
	const [deleteServer] = useDeleteServerMutation();

	if (!data) return null;

	console.log(data);

	return <UserServerCard elem={data[0]} deleteServer={() => {
		deleteOwn(id).then(() => {
			deleteServer(sid);
		});
	}}/>;
};
