import Cookies from "js-cookie";
import { createGUID } from "./createGUID";

export const CreateUser = () =>
{
    var userId = Cookies.get('userId');
    if (!userId)
    {
        userId = createGUID();
        Cookies.set('userId', userId);
    }
}