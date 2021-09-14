import { Injectable } from '@nestjs/common';
import { Client, Database, Storage } from 'node-appwrite'

@Injectable()
export class AppwriteService
{
    client: Client;
    database: Database;
    storage: Storage;

    constructor()
    {
        this.client = new Client()
            .setEndpoint(process.env.APPWRITE_ENDPOINT)
            .setProject(process.env.APPWRITE_PROJECT)
            .setKey(process.env.APPWRITE_KEY);

        this.database = new Database(this.client);
        this.storage = new Storage(this.client);
    }

    async getCollectionByName(name: string)
    {
        var collections = await this.database.listCollections(`name=${name}`) as any;
        var collection = collections.collections[0];

        return collection;
    }
}
