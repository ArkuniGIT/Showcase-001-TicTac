import { ThemeProvider } from '@mui/material';
import { FC } from 'react';
import { SWRConfig } from 'swr';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import { RecoilRoot } from 'recoil';
import Startup from 'components/startup/Startup';
import { createSwrConfig } from 'utility/configs/createSwrConfig';
import { createTheme } from 'utility/configs/createTheme';
import { changeAxios } from 'utility/configs/changeAxios';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@mui/material/CssBaseline';

changeAxios(axios);

const swrConfigValue = createSwrConfig();
const theme = createTheme();

const App: FC = () =>
{
    return (
        <>
            <CssBaseline />
            <RecoilRoot>
                <SWRConfig value={swrConfigValue}>
                    <ThemeProvider theme={theme}>
                        <SnackbarProvider maxSnack={3}>
                            <BrowserRouter>
                                <Startup />
                            </BrowserRouter>
                        </SnackbarProvider>
                    </ThemeProvider>
                </SWRConfig>
            </RecoilRoot>
        </>
    );
}

export default App;

