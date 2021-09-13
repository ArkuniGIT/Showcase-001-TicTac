import { createTheme, ThemeProvider } from '@material-ui/core';
import React, { FC } from 'react';
import { SWRConfig } from 'swr';
import { PublicConfiguration } from 'swr/dist/types';
import Layout from 'components/layout/Layout';
import Routes from 'components/routes/Routes';
import { BrowserRouter } from "react-router-dom";

const swrConfigValue: Partial<PublicConfiguration> =
{
    fetcher: (...args: Parameters<typeof fetch>) => fetch(...args).then(response => response.json())
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
