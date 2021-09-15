import { GameState } from "enums/gameState";

export interface GameModel
{
    $id?: string;

    matchId: string;
    
    users: string[];
    
    activeUserIndex: number;
    state: GameState;
    board: number[];
}