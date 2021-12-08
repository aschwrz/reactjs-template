/**
 * AuthService offers the possibility to integrate an external authentication.
 * 
 * Example: keycloak integration with 'react-keycloak' (https://github.com/react-keycloak/react-keycloak)
*/

import React from "react";

export const AuthService = {
    authenticate: (setAuthentication : React.Dispatch<React.SetStateAction<boolean>>) => {
        setAuthentication(true);
    }
}