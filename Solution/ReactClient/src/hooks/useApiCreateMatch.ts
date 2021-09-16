import axios from "axios";
import { useState } from "react";
import { MatchModel } from "shared";
import useSWR from "swr";

export const useApiCreateMatch = (callback?: (res: MatchModel) => void) =>
{
    const [loading, setLoading] = useState(false);

    const invoke = async () =>
    {
        setLoading(true);

        try 
        {
            const res = await axios.post<MatchModel>("/match/create");

            if (callback)
                callback(res.data);
        }
        catch (err)
        {
            console.log(err);
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