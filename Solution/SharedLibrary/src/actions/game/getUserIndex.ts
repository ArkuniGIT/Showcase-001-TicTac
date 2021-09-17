import { GameModel } from "../../models/gameModel";

export const getUserIndex = (game: GameModel, userId: string) => 
{
    const userIndex = game.users.indexOf(userId);
    if (userIndex === -1)
        throw new Error("User does not exist.");

    return userIndex;
}