import React from 'react';
import {PageLayout} from '../../components/PageLayout';
import {Grid} from '@nextui-org/react';
import UserServers from '../../components/UserServers/userServers';
import FavServers from '../../components/FavServers/favServers';
import Profile from '../../components/Profile/profile';
import {useGetProfileInfoQuery} from '../../features/servers/queries';

export const AccountPage = () => {
	const {data} = useGetProfileInfoQuery({id: 1});
	return (
		<PageLayout>
			<Grid.Container gap={2} justify="center">
				<UserServers/>
				<FavServers/>
				<Profile data={data}/>
			</Grid.Container>
		</PageLayout>
	);
};

export default AccountPage;
