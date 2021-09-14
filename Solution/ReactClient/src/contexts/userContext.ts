import React from "react";
import UserModel from "model/userModel";

export const UserContext = React.createContext<UserModel>({
    id: "",
});