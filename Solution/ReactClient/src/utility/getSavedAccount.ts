import Cookies from "js-cookie";
import { SavedAccountModel } from "shared";

export const getSavedAccount = (): SavedAccountModel | null =>
{
    var email = Cookies.get('email');
    var password = Cookies.get('password');

    if (!email || !password)
        return null;

    return {
        email,
        password,
    };
}