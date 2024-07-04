import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#86A27C',
        },
    },
    typography: {
        fontFamily: 'var( --font-family-default)',
        button: {
            textTransform: 'none',
        },
    },
    shape: {
        borderRadius: 4,
    },
    spacing: 4,
});
