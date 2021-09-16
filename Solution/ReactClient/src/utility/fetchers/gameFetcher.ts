import { GameModel, databaseConstants } from "shared";
import { createAppwrite } from "utility/appwrite/createAppwrite"

export const gameFetcher = async (key: string) =>
{
    const appwrite = createAppwrite();
    const id = key.replace("game/", "");

    return appwrite.database.getDocument<GameModel>(databaseConstants.gameCollectionId, id);
}