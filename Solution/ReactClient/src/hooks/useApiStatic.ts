import { useApi } from "./useApi";

export const useApiStatic = <T>(work: () => Promise<T>) =>
{
    const request = useApi()

    const invoke = async () =>
    {
        request.start(work);
    }

    return {
        loading: request.loading,
        invoke,
    }
}