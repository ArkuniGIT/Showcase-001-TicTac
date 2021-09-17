import { useEffect } from "react";
import { createAppwrite } from "utility/appwrite/createAppwrite";

interface AppwriteRealtimePayload<T>
{
    event: string;
    channels: string[];
    timestamp: number;
    payload: T;
};


export const useAppwriteRealtime = <T>(channels: string | string[], callback: (payload: AppwriteRealtimePayload<T>) => void) =>
{
    useEffect(() =>
    {
        const appwrite = createAppwrite();
        
        console.log("Subscribe to realtime.", channels);
        const unsubscribe = appwrite.subscribe(channels, callback);

        return () =>
        {
            console.log("Unsubscribe from realtime.", channels);
            unsubscribe();
        }

    }, [channels]);
}