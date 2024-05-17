import { createTheme } from '@mui/material';

export const theme = createTheme({
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
