import { Appwrite } from "appwrite";

if (!process.env.REACT_APP_APPWRITE_ENDPOINT)
    throw new Error("Missing `REACT_APP_APPWRITE_ENDPOINT` from enviroment file.");

if (!process.env.REACT_APP_APPWRITE_PROJECT)
    throw new Error("Missing `REACT_APP_APPWRITE_PROJECT` from enviroment file.");

const sdk = new Appwrite();

sdk
    .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT)
    ;

export const createAppwrite = () =>
{
    return sdk;
}