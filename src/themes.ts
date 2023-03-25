import {createTheme} from "@mui/material";
import {blue, indigo} from "@mui/material/colors";

export const LIGHT_THEME = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: indigo[900]
        },
        secondary: {
            main: blue[500]
        },
    },
});

export const DARK_THEME = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: indigo[900]
        },
        secondary: {
            main: blue[500]
        },
    },
});
