import matchDef from "../definitions/matchDef.js";
import gameDef from "../definitions/gameDef.js";
import createAppwriteClient from "../utility/createAppwriteClient.js";
import runEmpty from "./empty.js";
import sdk from 'node-appwrite';

var run = async () =>
{
    var client = createAppwriteClient();
    var database = new sdk.Database(client);

    try
    {
        await runEmpty();

        // Delete all collections
        var collectionResult = await database.listCollections();
        if (collectionResult && collectionResult.collections.length > 0)
        {
            collectionResult.collections.forEach((x) =>
            {
                database.deleteCollection(x.$id);
            });
        }

        // Creating collections
        var matchCollection = await database.createCollection("matches", ['*'], [], matchDef);
        var gameCollection = await database.createCollection("games", ['*'], [], gameDef);
        
    }
    catch (err)
    {
        console.log(err);
    }
}

run();