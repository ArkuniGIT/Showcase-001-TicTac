import { useEffect } from "react";
import { useAppwrite } from "./useAppwrite";

interface AppwriteRealtimePayload<T>
{
    event: string;
    channels: string[];
    timestamp: number;
    payload: T;
};

export const useAppwriteRealtime = <T>(channels: string | string[], callback: (payload: AppwriteRealtimePayload<T>) => void) =>
{
    const appwrite = useAppwrite();

    useEffect(() =>
    {
        console.log("Subscribe to realtime.", channels);
        const unsubscribe = appwrite.subscribe(channels, callback);

        return () =>
        {
            console.log("Unsubscribe from realtime.", channels);
            unsubscribe();
        }

    }, [channels]);
}