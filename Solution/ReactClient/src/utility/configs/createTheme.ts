import { createTheme as createMuiTheme } from '@mui/material';

export const createTheme = () =>
{
    return createMuiTheme({
        typography: {
            h1: {
                fontSize: "3rem",
            }
        }
    });
}
