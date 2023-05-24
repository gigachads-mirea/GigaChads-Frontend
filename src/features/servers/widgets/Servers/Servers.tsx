import React from 'react';
import {ServersList} from '../ServersList/ServersList';
import {ServersFilter} from '../ServersFilter/ServersFilter';
import styles from './Servers.module.scss';
import {useGetFullServersListQuery} from '../../queries';

export const Servers = () => {
	const {data: servers} = useGetFullServersListQuery(); //<-----ошибка тут (подправить параметры)

	return (
		<div className={styles.Servers}>
			<ServersFilter/>
			<ServersList servers={servers}/>
		</div>
	);
};
