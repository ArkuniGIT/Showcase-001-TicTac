import { GameModel } from "../../models/gameModel";
import { PointModel } from "../../models/pointModel";
import { getBoardValue } from "./getBoardValue";
import { getUserIndex } from "./getUserIndex";

export const checkDraw = (game: GameModel) => 
{
    const n = 3;

    for (let y = 0; y < n; y++) 
    {
        for (let x = 0; x < n; y++) 
        {
            const v = getBoardValue(game, { x, y });
            if (v === -1)
                return false;
        }
    }

    return true;
}