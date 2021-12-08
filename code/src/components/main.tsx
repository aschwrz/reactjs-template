import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CustomTheme } from '../theme/theme';
import { Subcomponent } from './subcomponent/subcomponent';
import { AuthService } from '../service/auth-service';
import { NoAuth } from './auth/no-auth';

export const Main = () => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    // Application Startup
    useEffect(() => {
        AuthService.authenticate(setIsAuthenticated);
    }, [])

    // Rendering
    return (

        // Theming explained in  https://mui.com/customization/default-theme/
        <ThemeProvider theme={CustomTheme.getTheme()}>

            {/* Routing explained in https://reactrouter.com/ */}
            <BrowserRouter>
                {isAuthenticated
                    ? <>
                        <Routes>
                            <Route path="/" element={<Subcomponent />} />
                        </Routes>
                    </>
                    : <NoAuth />
                }
            </BrowserRouter>
        </ThemeProvider>
    )
}