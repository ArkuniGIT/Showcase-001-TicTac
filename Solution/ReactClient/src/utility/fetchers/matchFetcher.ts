import { getEnv } from "constants/getEnv";
import { MatchModel } from "shared";
import { createAppwrite } from "utility/appwrite/createAppwrite"

export const matchFetcher = async (key: string) =>
{
    const appwrite = createAppwrite();
    const env = getEnv();
    const id = key.replace("match/", "");

    return appwrite.database.getDocument<MatchModel>(env.databaseMatchCollectionId, id);
}