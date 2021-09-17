import { GameModel } from "../../models/gameModel";
import { PointModel } from "../../models/pointModel";
import { getBoardValue } from "./getBoardValue";
import { getUserIndex } from "./getUserIndex";

export const checkWinner = (game: GameModel, userId: string, point: PointModel) => 
{
    const { x: x1, y: y1 } = point;
    const v1 = getUserIndex(game, userId);
    const n = 3;

    // Column
    for (let i = 0; i < n; i++)
    {
        const v2 = getBoardValue(game, { x: x1, y: i })
        if (v2 !== v1)
            break;

        if (i == n - 1)
        {
            return true;
        }
    }

    //Row
    for (let i = 0; i < n; i++)
    {
        const v2 = getBoardValue(game, { x: i, y: y1 })
        if (v2 !== v1)
            break;

        if (i == n - 1)
        {
            return true;
        }
    }

    // Diagonal
    if (x1 === y1)
    {
        for (let i = 0; i < n; i++)
        {
            const v2 = getBoardValue(game, { x: i, y: i })
            if (v2 !== v1)
                break;

            if (i == n - 1)
            {
                return true;
            }
        }
    }

    // Anti-Digonal
    if (x1 + y1 === n - 1)
    {
        for (let i = 0; i < n; i++)
        {
            const v2 = getBoardValue(game, { x: i, y: i })
            if (v2 !== v1)
                break;

            if (i == n - 1)
            {
                return true;
            }
        }
    }

    return false;
}