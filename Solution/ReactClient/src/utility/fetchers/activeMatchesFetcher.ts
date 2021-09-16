import { MatchModel, MatchState } from "shared";
import { createAppwrite } from "utility/appwrite/createAppwrite"

export const activeMatchesFetcher = async () =>
{
    const appwrite = createAppwrite();

    return appwrite.database
        .listDocuments<any>("6142083deb3c8", [`state=${MatchState.Active}`], 100, 0)
        .then<MatchModel[]>((res) => res.documents);;
}