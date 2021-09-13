import { createTheme, ThemeProvider } from '@material-ui/core';
import React, { FC } from 'react';
import { SWRConfig } from 'swr';
import { PublicConfiguration } from 'swr/dist/types';
import Layout from 'components/layout/Layout';
import Routes from 'components/routes/Routes';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_PUBLIC_API_ENDPOINT;

const swrConfigValue: Partial<PublicConfiguration> =
{
    fetcher: (url: string) => axios.get(url).then(r => r.data),
}

const theme = createTheme();

const App: FC = () =>
{
    return (
        <SWRConfig value={swrConfigValue}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Layout>
                        <Routes />
                    </Layout>
                </BrowserRouter>
            </ThemeProvider>
        </SWRConfig>
    );
}

export default App;
