import React from 'react';
import {Button, Input, Text, Tooltip} from '@nextui-org/react';
import {IFilterValue, IServersFilterProps} from './ServersFilter.types';
import styles from './ServersFilter.module.scss';
import {FILTER_DEFAULT_VALUE} from './ServersFilter.constants';

export const ServersFilter: React.FC<IServersFilterProps> = (props) => {
	const [filter, setFilter] = React.useState<IFilterValue>(FILTER_DEFAULT_VALUE);

	React.useEffect(() => {
		props.onChange && props.onChange(filter);
	}, [filter]);

	const onTitleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFilter((prevState) => ({...prevState, 'name': event.target.value}));
	};

	return (
		<div className={styles.ServersFilter}>
			<Input clearable placeholder={'Начните вводить'} css={{width: '100%'}} onChange={onTitleChangeHandler}/>
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
