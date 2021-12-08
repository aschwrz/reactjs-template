/**
 * Axios usage explained in https://github.com/axios/axios
 */

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { AuthService } from "./auth-service";
import { EnvService } from "./env-service";

export const WebServiceExample = {
    queryExample: () : Promise<AxiosResponse<any>> => {
        const api = EnvService.getApiExample();
        const token = EnvService.getTokenExample();

        /**
         * Prepare header
         * Set Bearer Token
         * Provide cookie if needed
         */
        const config : AxiosRequestConfig = {
            headers: {
                'authorization': 'Bearer ' + token,
                withCredentials: 'true'
            }
        }

        const promise = axios.get(api, config);

        return promise;
    }
}