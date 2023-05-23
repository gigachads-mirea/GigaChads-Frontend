import React from 'react';
import {Button, Input, Text, Tooltip} from '@nextui-org/react';
import {IServersFilterProps} from './ServersFilter.types';
import styles from './ServersFilter.module.scss';

export const ServersFilter: React.FC<IServersFilterProps> = () => {
	return (
		<div className={styles.ServersFilter}>
			<Input clearable placeholder={'Начните вводить'} css={{width: '100%'}}/>
			<Tooltip placement={'bottom'} content={<Text css={{p: '$10'}}>Тут будут фильтры</Text>}>
				<Button>Наведи на меня </Button>
			</Tooltip>
			<Tooltip
				placement={'bottom'}
				content={<Text css={{p: '$10'}}>Тут тоже, а еще справа</Text>}
			>
				<Button>И на меня </Button>
			</Tooltip>
		</div>
	);
};
