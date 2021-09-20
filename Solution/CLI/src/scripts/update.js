import matchDef from "../definitions/matchDef.js";
import gameDef from "../definitions/gameDef.js";
import createAppwriteClient from "../utility/createAppwriteClient.js";
import sdk from 'node-appwrite';
import { env } from "../constants/env.js";

var run = async () =>
{
    var client = createAppwriteClient();
    var database = new sdk.Database(client);

    try
    {
        // Updating collections
        await database.updateCollection(env.databaseMatchCollectionId, "matches", ['*'], [], matchDef);
        await database.updateCollection(env.databaseGameCollectionId, "games", ['*'], [], gameDef);
        
    }
    catch (err)
    {
        console.log(err);
    }
}

run();