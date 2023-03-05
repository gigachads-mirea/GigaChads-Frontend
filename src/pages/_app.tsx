import React from 'react';

import type {AppProps} from 'next/app';

export default ({Component, pageProps}: AppProps) => <Component {...pageProps} />;