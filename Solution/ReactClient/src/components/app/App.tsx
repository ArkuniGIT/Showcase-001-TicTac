import { createTheme, ThemeProvider } from '@material-ui/core';
import { FC } from 'react';
import { SWRConfig } from 'swr';
import { PublicConfiguration } from 'swr/dist/types';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import { RecoilRoot } from 'recoil';
import Startup from 'components/startup/Startup';

axios.defaults.baseURL = process.env.REACT_APP_PUBLIC_API_ENDPOINT;

const swrConfigValue: Partial<PublicConfiguration> =
{
    fetcher: (url: string) => axios.get(url).then(r => r.data),
}

const theme = createTheme({
    typography: {
        h1: {
            fontSize: "3rem",
        }
    }
});

const App: FC = () =>
{
    return (
        <RecoilRoot>
            <SWRConfig value={swrConfigValue}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Startup />
                    </BrowserRouter>
                </ThemeProvider>
            </SWRConfig>
        </RecoilRoot>
    );
}

export default App;
