import { GameState } from "enums/GameState";

export interface GameModel
{
    id: string;
    users: string[];
    userTurn: number;
    state: GameState;
    board: number[];
}