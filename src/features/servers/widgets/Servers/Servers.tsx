import React from 'react';
import {useGetServersListQuery} from '../../queries';
import {ServersList} from '../ServersList/ServersList';
import {ServersFilter} from '../ServersFilter/ServersFilter';
import styles from './Servers.module.scss';

export const Servers = () => {
	const {data: servers} = useGetServersListQuery();

	return (
		<div className={styles.Servers}>
			<ServersFilter/>
			<ServersList servers={servers}/>
		</div>
	);
};
