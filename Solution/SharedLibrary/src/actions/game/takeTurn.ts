import { GameState } from "../../..";
import { GameModel } from "../../models/gameModel";
import { PointModel } from "../../models/pointModel";
import { checkDraw } from "./checkDraw";
import { checkTurn } from "./checkTurn";
import { checkWinner } from "./checkWinner";
import { getBoardValue } from "./getBoardValue";
import { getUserIndex } from "./getUserIndex";
import { setBoardValue } from "./setBoardValue";

export const takeTurn = (game: GameModel, userId: string, point: PointModel) => 
{
    checkTurn(game, userId);

    const boardValue = getBoardValue(game, point);

    if (boardValue !== -1)
        throw new Error("Board space is occupied.");
        
    setBoardValue(game, point, userId);

    const isWinner = checkWinner(game, userId, point);
    if (isWinner)
    {
        game.state = GameState.GameOver;
        game.winnerUserId = userId;
        return;
    }

    const isDraw = checkDraw(game);
    if (isDraw)
    {
        game.state = GameState.GameOver;
        return;
    }

    const activeUserIndex = getUserIndex(game, userId);
    const nextActiveUserIndex = (activeUserIndex + 1) % game.users.length;
    game.activeUserId = game.users[nextActiveUserIndex];
}