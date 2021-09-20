export const getEnv = () => (
{
    databaseMatchCollectionId: process.env.REACT_APP_APPWRITE_DB_MATCH_COLLECTION_ID || "",
    databaseGameCollectionId: process.env.REACT_APP_APPWRITE_DB_GAME_COLLECTION_ID || ""
});