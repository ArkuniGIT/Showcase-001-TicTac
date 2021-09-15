import { AxiosInstance } from "axios";
import Cookies from "js-cookie";
import { createAppwrite } from "./createAppwrite";

export const changeAxios = (axios: AxiosInstance) =>
{
    axios.defaults.baseURL = process.env.REACT_APP_PUBLIC_API_ENDPOINT;

    axios.interceptors.response.use(
        (response) =>
        {
            return response;
        },
        (error) =>
        {
            if (error.response.status !== 401)
            {
                return new Promise((resolve, reject) =>
                {
                    reject(error);
                });
            }

            const appwrite = createAppwrite();
            const tokenPromise = appwrite.account.createJWT<{ jwt: string }>();

            return tokenPromise
                .then((token) =>
                {
                    const config = error.config;
                    config.headers['Authorization'] = `Bearer ${token.jwt}`;
                    
                    Cookies.set("jwt", token.jwt);

                    return new Promise((resolve, reject) =>
                    {
                        axios
                            .request(config)
                            .then(response =>
                            {
                                resolve(response);
                            })
                            .catch((error) =>
                            {
                                reject(error);
                            })
                    });

                })
                .catch((error: Error) =>
                {
                    Promise.reject(error);
                });
        });
}