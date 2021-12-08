/**
 * Axios usage explained in https://github.com/axios/axios
 * 
 * With json-server, there is a full mockup server prepared to mock
 * apis until they are developed for further usage
 * 
 * json-server usage is explained in https://github.com/typicode/json-server
 * bigger amounts of testdata can be created using a data templating language like jsonnet
 * jsonnet usage is explained in https://jsonnet.org/
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