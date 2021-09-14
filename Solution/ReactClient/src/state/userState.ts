import { atom } from "recoil";
import UserModel from "model/userModel";

export const userState = atom<UserModel>({
    key: 'userState', 
    default: {
        id: ""
    },
  });