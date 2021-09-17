import { GameModel } from "../../models/gameModel";
import { PointModel } from "../../models/pointModel";
import { checkTurn } from "./checkTurn"

export const getBoardIndex = (game: GameModel, point: PointModel) => 
{
    const index = point.x + point.y * 3;

    if (index < 0 || index >= game.board.length)
        throw new Error("Index is outside board boundary.");

    return index;
}