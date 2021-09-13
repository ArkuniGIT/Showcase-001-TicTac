import { GameState } from "enums/GameState";

export interface GameModel
{
    id: string;
    matchId: string;
    users: string[];
    userTurn: number;
    state: GameState;
    board: number[];
}