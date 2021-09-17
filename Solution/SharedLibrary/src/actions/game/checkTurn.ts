import { GameState } from "../../..";
import { GameModel } from "../../models/gameModel";
import { PointModel } from "../../models/pointModel";

export const checkTurn = (game: GameModel, userId: string) => 
{
    if (game.state !== GameState.Playing)
        throw new Error("Game is over.");

    if (game.activeUserId !== userId)
        throw new Error("User is not the active user.", );
}