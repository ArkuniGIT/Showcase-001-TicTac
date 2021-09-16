import createAppwriteClient from "../utility/createAppwriteClient.js";
import sdk from 'node-appwrite';

var run = async () =>
{
    var client = createAppwriteClient();
    var database = new sdk.Database(client);
    var storage = new sdk.Storage(client);
    var users = new sdk.Users(client);

    try
    {
        // Delete all documents
        var collectionResult = await database.listCollections();
        if (collectionResult && collectionResult.collections.length > 0)
        {
            collectionResult.collections.forEach(async (x) =>
            {
                const documentResult = await database.listDocuments(x.$id);
                documentResult.documents.forEach(async (y) =>
                {
                    await database.deleteDocument(x.$id, y.$id);
                });
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
                userResult.files.forEach(async (x) =>
                {
                    await storage.deleteFile(x.$id);
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
                userResult.users.forEach(async (x) =>
                {
                    await users.delete(x.$id);
                });
            }
        }
        
    }
    catch (err)
    {
        console.log(err);
    }
}

run();