import React from 'react';
import {Button, Input, Switch, Text, Tooltip} from '@nextui-org/react';
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
			<Input clearable placeholder={'Начните вводить'} css={{width: '100%'}}
				   onChange={onTitleChangeHandler}/>
			<Tooltip placement={'bottom'}
					 content={<div style={{padding: '15px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
						 <Input placeholder={'Игра'}></Input>
						 
						 <div style={{
							 display: 'flex',
							 justifyContent: 'flex-start',
							 width: '250px',
							 alignItems: 'center',
							 gap: '20px',
						 }}>
							 <Switch onChange={(ev) => {
							 }} title={'Античит'}/>
							 <Text style={{height: '25px'}}>В сети</Text>
						 </div>
					 </div>}>
				<Button>Фильтры</Button>
			</Tooltip>
		</div>
	);
};
