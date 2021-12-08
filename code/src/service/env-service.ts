/**
 * env-service abstracts from the environment variable usage. 
 * among other things, this allows the conversion to an environment issuer 
 * backend service usage to enable flexible deployment on different systems.
 * 
 * Please use this detour for the use of environment variables.
 * Please use .env.local for critical content (passwords, keys, certs) and do not check in to the repository.
 * 
 * Env usage explained in https://create-react-app.dev/docs/adding-custom-environment-variables
 */

export const EnvService = {
    getExample: () : string => {
        return process.env.REACT_APP_EXAMPLE!;
    }
}