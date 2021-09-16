import { createTheme as createMuiTheme } from '@material-ui/core';
import { Theme } from "@material-ui/core";

export const createTheme = (): Theme =>
{
    return createMuiTheme({
        typography: {
            h1: {
                fontSize: "3rem",
            }
        }
    });
}
