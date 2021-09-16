import { createAppwrite } from "utility/appwrite/createAppwrite"

const appwrite = createAppwrite();

export const useAppwrite = () =>
{
    return appwrite;
}