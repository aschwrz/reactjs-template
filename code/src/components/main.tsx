import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CustomTheme } from '../theme/theme';
import { Subcomponent } from './subcomponent/subcomponent';

export const Main = () => {
    return (

        // Theming explained in  https://mui.com/customization/default-theme/
        <ThemeProvider theme={CustomTheme.getTheme()}>
            {/* Routing explained in https://reactrouter.com/ */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Subcomponent />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}