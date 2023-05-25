import React from 'react';
import {Card, Grid} from '@nextui-org/react';
import UserServerCard from '../UserServerCard/userServerCard';
import {
	useDeleteServerFromListMutation,
	useGetFullServersListQuery, useUpdateUserServersListMutation,
} from '../../features/servers/queries';

const UserServers = ({data, user}) => {
	const [deleteServerFromList, {}] = useDeleteServerFromListMutation();
	const {data:servers} = useGetFullServersListQuery();
	const [updateUserServersList, {}] = useUpdateUserServersListMutation();

	const listHandler = async (id) => {
		const newServersList = servers.filter((elem) => elem.id !== id);
		// let newArray = data
		deleteServerFromList({id});
		const newServerList = user.servers.filter((elem) => elem.id !== id);
		const newFavServersList = user.favServers.filter((elem) => elem.id !== id);
		const newUserData = {...user, servers: newServerList, favServers: newFavServersList};
		updateUserServersList({id: user.id, body:newUserData})
	}

	return (
		<Grid xs={4}>
			<Card css={{ height: "80vh"}}>
				<Card.Header css={{"font-weight": "bold"}}>Мои сервера</Card.Header>
				<Card.Divider></Card.Divider>
				<Card.Body>
					<Grid.Container gap={2} justify="flex-start">
						{data && data.map((elem)=>{
							return <UserServerCard elem={elem} callback={listHandler}/>
						})}
					</Grid.Container>
				</Card.Body>
			</Card>
		</Grid>
	);
};

export default UserServers;