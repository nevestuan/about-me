import React from 'react';
import { AppProps } from 'next/app';
import 'antd/dist/antd.less';
import '@styles/variables.less';
import GlobalStyle from '@styles/globalStyles';
import { StyledThemeProvider } from '@definitions/styled-components';
import { Provider } from 'react-redux';
import store from '@redux/store';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <StyledThemeProvider>
            <Provider store={store}>
                <GlobalStyle />
                <Component {...pageProps} />
            </Provider>
        </StyledThemeProvider>
    );
}

export default MyApp;
