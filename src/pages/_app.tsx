import React from 'react';
import {Provider} from 'react-redux';
import {createTheme, NextUIProvider} from '@nextui-org/react';

import {store} from '../config/store/store';

import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';

const darkTheme = createTheme({
	type: 'dark',
});

export default ({Component, pageProps}: AppProps) => {
	const {query} = useRouter();

	const darkTheme = createTheme({
		type: query['dark'] === '1' ? 'dark' : 'light',
	});

	return (
		<NextUIProvider theme={darkTheme}>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</NextUIProvider>
	);
};
