import { MatchModel, MatchState, databaseConstants } from "shared";
import { createAppwrite } from "utility/appwrite/createAppwrite"

export const activeMatchesFetcher = async () =>
{
    const appwrite = createAppwrite();

    return appwrite.database
        .listDocuments<any>(databaseConstants.matchCollectionId, [`state!=${MatchState.Open}`], 100, 0)
        .then<MatchModel[]>((res) => res.documents);;
}