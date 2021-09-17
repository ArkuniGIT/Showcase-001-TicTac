import { useSnackbar } from "notistack";
import { useState } from "react";

export const useApi = <T>() =>
{
    const snackbar = useSnackbar();
    const [loading, setLoading] = useState(false);

    const start = async (work: () => Promise<T>) =>
    {
        setLoading(true);

        try 
        {
            const res = await work();
        }
        catch (error: any)
        {
            const message = error.response ? error.response.status : "Connection could not be made to the server.";

            snackbar.enqueueSnackbar(message, { variant: "error" });
        }
        finally
        {
            setLoading(false);
        }
    }

    return {
        start,
        loading,
    }
}