import axios from "axios";
import { useSnackbar } from "notistack";
import { useState } from "react";

export const useApiPost = <T>(url: string, data: any, resolved?: (res: T) => void) =>
{
    const snackbar = useSnackbar();
    const [loading, setLoading] = useState(false);

    const invoke = async () =>
    {
        setLoading(true);

        try 
        {
            const res = await axios.post<T>(url, data);

            if (resolved)
                resolved(res.data);
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
        invoke,
        loading,
    }
}