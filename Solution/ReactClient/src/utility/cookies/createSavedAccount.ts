import Cookies from "js-cookie";
import { SavedAccountModel } from "shared";
import { createGUID } from "../values/createGUID";

export const createSavedAccount = (): SavedAccountModel =>
{
    const email = createGUID() + "@" + createGUID() + ".com";
    const password = createGUID().slice(0, 26) + "aA12!!";

    Cookies.set('email', email);
    Cookies.set('password', password);

    return {
        email,
        password
    };
}