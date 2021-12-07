import { Button, Checkbox } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import React from 'react';
import { CustomTheme } from '../theme/theme';

export const Main = () => {
    return (
        <ThemeProvider theme={CustomTheme.getTheme()}>
            <Box> main </Box>
        </ThemeProvider>
    )
}