import { GameModel } from "../../models/gameModel";
import { PointModel } from "../../models/pointModel";
import { checkTurn } from "./checkTurn"
import { getBoardIndex } from "./getBoardIndex";
import { getUserIndex } from "./getUserIndex";

export const setBoardValue = (game: GameModel, point: PointModel, userId: string) => 
{
    const boardIndex = getBoardIndex(game, point);
    const userIndex = getUserIndex(game, userId);

    game.board[boardIndex] = userIndex;
}