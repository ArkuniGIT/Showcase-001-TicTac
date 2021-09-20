import { getEnv } from "constants/getEnv";
import { MatchModel, MatchState } from "shared";
import { createAppwrite } from "utility/appwrite/createAppwrite"

export const openMatchesFetcher = async () =>
{
    const appwrite = createAppwrite();
    const env = getEnv();

    return appwrite.database
        .listDocuments<any>(env.databaseMatchCollectionId, [`state=${MatchState.Open}`], 20, 0)
        .then<MatchModel[]>((res) => res.documents);
}