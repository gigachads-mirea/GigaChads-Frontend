import React from 'react';
import { Box } from '../Box/box';

export const Layout = ({ children }) => (
	<Box
		css={{
			maxW: "100%"
		}}
	>
		{children}
		{/*<Content />*/}
	</Box>
);