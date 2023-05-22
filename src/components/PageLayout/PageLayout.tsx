import React from 'react';
import {Container} from '@nextui-org/react';
import {IPageLayoutProps} from './PageLayout.types';
import Header from '../Header/header';

export const PageLayout: React.FC<IPageLayoutProps> = ({children}) => (
	<>
		<Header/>
		<Container fluid justify={'space-around'} alignItems={'center'} direction={'row'} css={{padding: '20px'}}>
			{children}
		</Container>
	</>
);
