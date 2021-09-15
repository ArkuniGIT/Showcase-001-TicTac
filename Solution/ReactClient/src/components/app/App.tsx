import { ThemeProvider } from '@material-ui/core';
import { FC } from 'react';
import { SWRConfig } from 'swr';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import { RecoilRoot } from 'recoil';
import Startup from 'components/startup/Startup';
import { createAxiosConfig } from 'utility/createAxiosConfig';
import { createSwrConfig } from 'utility/createSwrConfig';
import { createTheme } from 'utility/createTheme';
import { changeAxios } from 'utility/changeAxios';

changeAxios(axios);

const swrConfigValue = createSwrConfig();
const theme = createTheme();

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

