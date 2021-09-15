import axios from "axios"
import { PublicConfiguration } from "swr/dist/types"

export const createSwrConfig = (): Partial<PublicConfiguration> =>
{
    return {
        fetcher: (url: string) => axios.get(url).then(r => r.data),
    }
}
