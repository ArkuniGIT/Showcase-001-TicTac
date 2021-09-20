import { getEnv } from "constants/getEnv";
import { GameModel } from "shared";
import { createAppwrite } from "utility/appwrite/createAppwrite"

export const gameFetcher = async (key: string) =>
{
    const appwrite = createAppwrite();
    const env = getEnv();
    const id = key.replace("game/", "");

    return appwrite.database.getDocument<GameModel>(env.databaseGameCollectionId, id);
}