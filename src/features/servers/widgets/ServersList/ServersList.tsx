import React from 'react';
import {Grid} from '@nextui-org/react';
import {IServer} from '../../../../config/types';
import ServerCard from '../../../../components/ServerCard/ServerCard';

export const ServersList: React.FC<{ servers?: IServer[] }> = (props) => {
	const {servers} = props;

	return (
		<div>
			<Grid.Container gap={1} justify={'center'}>
				{servers && servers.map((server) => (
					<ServerCard server={server}/>
				))}
			</Grid.Container>
		</div>
	);
};
