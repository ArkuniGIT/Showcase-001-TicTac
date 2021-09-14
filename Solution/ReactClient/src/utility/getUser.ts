import Cookies from "js-cookie";
import UserModel from "model/userModel";
import { createGUID } from "./createGUID";

export const getUser = (): UserModel =>
{
    var userId = Cookies.get('userId');
    if (!userId)
    {
        userId = createGUID();
        Cookies.set('userId', userId);
    }

    const user: UserModel = {
        id: userId
    }

    return user;
}