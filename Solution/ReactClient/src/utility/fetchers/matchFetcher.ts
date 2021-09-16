import { MatchModel, databaseConstants } from "shared";
import { createAppwrite } from "utility/appwrite/createAppwrite"

export const matchFetcher = async (key: string) =>
{
    const appwrite = createAppwrite();
    const id = key.replace("match/", "");

    return appwrite.database.getDocument<MatchModel>(databaseConstants.matchCollectionId, id);
}