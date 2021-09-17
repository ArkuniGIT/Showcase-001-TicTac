import matchDef from "../definitions/matchDef.js";
import gameDef from "../definitions/gameDef.js";
import createAppwriteClient from "../utility/createAppwriteClient.js";
import sdk from 'node-appwrite';
import { databaseConstants } from "shared";

var run = async () =>
{
    var client = createAppwriteClient();
    var database = new sdk.Database(client);

    try
    {
        // Updating collections
        await database.updateCollection(databaseConstants.matchCollectionId, "matches", ['*'], [], matchDef);
        await database.updateCollection(databaseConstants.gameCollectionId, "games", ['*'], [], gameDef);
        
    }
    catch (err)
    {
        console.log(err);
    }
}

run();