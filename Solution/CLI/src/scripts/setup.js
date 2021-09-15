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
    var account = new sdk.Account(client);
    var users = new sdk.Users(client);

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
            var userResult = await storage.listFiles();
            if (userResult.sum === 0)
                break;

            if (userResult && userResult.files.length > 0)
            {
                userResult.files.forEach((x) =>
                {
                    storage.deleteFile(x.$id);
                });
            }
        }

        // Delete all users
        while (true)
        {
            var userResult = await users.list();
            if (userResult.sum === 0)
                break;

            if (userResult && userResult.users.length > 0)
            {
                userResult.users.forEach((x) =>
                {
                    users.delete(x.$id);
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