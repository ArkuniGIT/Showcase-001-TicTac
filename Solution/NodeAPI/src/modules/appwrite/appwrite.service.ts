import { Client, Database, Storage, Account } from 'node-appwrite'

export class AppwriteService
{
    client: Client;
    database: Database;
    storage: Storage;
    account: Account;

    constructor()
    {
        this.client = new Client()
            .setEndpoint(process.env.APPWRITE_ENDPOINT)
            .setProject(process.env.APPWRITE_PROJECT)
            .setKey(process.env.APPWRITE_KEY);

        this.database = new Database(this.client);
        this.storage = new Storage(this.client);
        this.account = new Account(this.client);
    }

    getClient(jwt: string)
    {
        return new Client()
            .setEndpoint(process.env.APPWRITE_ENDPOINT)
            .setProject(process.env.APPWRITE_PROJECT)
            .setKey(process.env.APPWRITE_KEY)
            .setJWT(jwt);
    }
}
