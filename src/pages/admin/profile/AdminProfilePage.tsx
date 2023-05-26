import React from 'react';
import {PageLayout} from '../../../components/PageLayout';
import {Container} from '@nextui-org/react';
import {useGetServersListQuery} from '../../../features/servers/queries';

export const AdminProfilePage = () => {
	// @ts-ignore
	const {data} = useGetServersListQuery({filter: {approved: false}});
	return (
			<PageLayout>
				<Container fluid css={{height: "80vh"}}>
					{data}
				</Container>
			</PageLayout>

	);
};

export default AdminProfilePage;