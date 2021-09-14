import matchDef from "../definitions/matchDef.js";
import gameDef from "../definitions/gameDef.js";
import createAppwriteClient from "../utility/createAppwriteClient.js";
import sdk from 'node-appwrite';
import path from 'path';

var run = async () =>
{
    var __dirname = path.resolve();
    var client = createAppwriteClient();
    var database = new sdk.Database(client);
    var storage = new sdk.Storage(client);

    try
    {
        // Delete all collections
        var collectionResult = await database.listCollections();
        if (collectionResult && collectionResult.collections.length > 0)
        {
            collectionResult.collections.forEach((x) =>
            {
                database.deleteCollection(x.$id);
            });
        }

        // Delete all files
        while (true)
        {
            var storageResult = await storage.listFiles();
            if (storageResult.sum === 0)
                break;

            if (storageResult && storageResult.files.length > 0)
            {
                storageResult.files.forEach((x) =>
                {
                    storage.deleteFile(x.$id);
                });
            }
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