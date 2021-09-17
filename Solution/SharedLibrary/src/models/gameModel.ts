import { GameState } from "../enums/gameState";

export interface GameModel
{
    $id?: string;

    matchId: string;
    
    users: string[];
    
    activeUserId: string;

    winnerUserId?: string;

    state: GameState;
    board: number[];
}