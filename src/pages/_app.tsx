import React from 'react';
import {Provider} from 'react-redux';
import {NextUIProvider} from '@nextui-org/react';

import {store} from '../config/store/store';

import type {AppProps} from 'next/app';

export default ({Component, pageProps}: AppProps) => (
	<NextUIProvider>
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	</NextUIProvider>
);
