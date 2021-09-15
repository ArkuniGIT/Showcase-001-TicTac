import { atom } from "recoil";
import { UserModel } from "shared";

export const userState = atom<UserModel>({
    key: 'userState', 
    default: {
        $id: "",
        email: "",
        name: ""
    },
  });