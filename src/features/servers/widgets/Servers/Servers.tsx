import React from 'react';
import {ServersList} from '../ServersList/ServersList';
import {ServersFilter} from '../ServersFilter/ServersFilter';
import styles from './Servers.module.scss';
import {useGetServersListQuery} from '../../queries';
import {FILTER_DEFAULT_VALUE} from '../ServersFilter/ServersFilter.constants';

export const Servers = () => {
	const [filter, setFilter] = React.useState(FILTER_DEFAULT_VALUE);
	const {data: servers} = useGetServersListQuery({filter: {...filter, validated: true}});
	return (
		<div className={styles.Servers}>
			<ServersFilter onChange={setFilter}/>
			<ServersList servers={servers}/>
		</div>
	);
};
