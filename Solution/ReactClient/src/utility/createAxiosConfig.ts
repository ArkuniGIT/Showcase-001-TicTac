import { AxiosRequestConfig } from "axios";

export const createAxiosConfig = (): AxiosRequestConfig =>
{
    const config: AxiosRequestConfig =
    {
        baseURL: process.env.REACT_APP_PUBLIC_API_ENDPOINT,
    };

    return config;
}