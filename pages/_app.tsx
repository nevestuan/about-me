import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { StyledThemeProvider } from '@definitions/styled-components';
import { Provider } from 'react-redux';
import store from '@redux/store';

require('antd/dist/antd.less');
require('@styles/app.less');

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                {/** https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md */}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=no, shrink-to-fit=no"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/fonts/fonts.css"
                />
            </Head>
            <StyledThemeProvider>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </StyledThemeProvider>
        </>
    );
}

export default MyApp;
