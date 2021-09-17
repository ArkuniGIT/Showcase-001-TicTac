import { GameModel } from "../../models/gameModel";
import { PointModel } from "../../models/pointModel";
import { checkTurn } from "./checkTurn"
import { getBoardIndex } from "./getBoardIndex";

export const getBoardValue = (game: GameModel, point: PointModel) => 
{
    const index = getBoardIndex(game, point);

    return game.board[index];
}