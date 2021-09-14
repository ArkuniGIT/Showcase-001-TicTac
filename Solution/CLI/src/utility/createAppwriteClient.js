import sdk from 'node-appwrite';

const createAppwriteClient = () =>
{
    return new sdk.Client()
        .setEndpoint(process.env.APPWRITE_ENDPOINT) 
        .setProject(process.env.APPWRITE_PROJECT) 
        .setKey(process.env.APPWRITE_KEY)
    ;
}

export default createAppwriteClient;